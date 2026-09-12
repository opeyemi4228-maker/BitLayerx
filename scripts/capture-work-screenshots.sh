#!/usr/bin/env bash
# Capture a screenshot of every live project that does not already have one.
#
# The work tiles look for /public/images/work/<repo-name-lowercased>.jpg and
# fall back to a drawn placeholder when the file is missing. This fills the
# gaps from the live deployment URLs, so the grid shows real work.
#
#   ./scripts/capture-work-screenshots.sh          # only what is missing
#   ./scripts/capture-work-screenshots.sh --force  # recapture everything
#
# Requires Google Chrome. Output is 1200x633 to match the existing files.

set -uo pipefail
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="public/images/work"
W=1200; H=633
FORCE="${1:-}"

mkdir -p "$OUT"

capture() {
  local slug="$1" url="$2"
  local jpg="$OUT/${slug}.jpg"

  if [[ -f "$jpg" && "$FORCE" != "--force" ]]; then
    printf '  %-32s skip (already have it)\n' "$slug"; return
  fi

  local code
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 25 -L "$url" || echo 000)
  if [[ "$code" != "200" ]]; then
    printf '  %-32s SITE DOWN (HTTP %s) %s\n' "$slug" "$code" "$url"; return
  fi

  local profile png
  profile=$(mktemp -d); png=$(mktemp -t shot).png

  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --user-data-dir="$profile" --window-size=${W},${H} \
    --virtual-time-budget=12000 --screenshot="$png" "$url" >/dev/null 2>&1

  if [[ -s "$png" ]]; then
    sips -s format jpeg -s formatOptions 82 "$png" --out "$jpg" >/dev/null 2>&1
    printf '  %-32s captured\n' "$slug"
  else
    printf '  %-32s CAPTURE FAILED\n' "$slug"
  fi
  rm -rf "$profile" "$png"
}

echo "Capturing work screenshots..."
while IFS=$'\t' read -r slug url; do
  [[ -z "$slug" ]] && continue
  capture "$slug" "$url"
done < <(
  curl -s --max-time 30 "https://api.github.com/users/opeyemi4228-maker/repos?per_page=100&sort=updated" \
  | python3 -c "
import sys, json
EXCLUDED={'bitlayerx','check','nordic-bridge-partner','bricks-wealth','bricks-and-wealth','rotimi','rotimiamaechi-website'}
repos=json.load(sys.stdin)
if isinstance(repos,dict): raise SystemExit
for r in repos:
    if r.get('fork') or not (r.get('homepage') or '').strip(): continue
    if r['name'].lower() in EXCLUDED: continue
    print(r['name'].lower()+chr(9)+r['homepage'].strip())
"
)
echo "Done."
