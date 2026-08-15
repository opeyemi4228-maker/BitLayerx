import fs from "node:fs";
import path from "node:path";

/**
 * A tiny append oriented JSON store.
 *
 * Three datasets share it: enquiries, newsletter subscribers, and page views.
 *
 * DEPLOYMENT NOTE, worth reading before relying on this.
 * Serverless platforms give you a read only file system apart from /tmp, and
 * /tmp does not survive between invocations. On Vercel this store accepts a
 * write and loses it. So every write is also emitted to the process log, which
 * every host retains, and enquiries can additionally be forwarded to a webhook.
 *
 * For durable page view data at any volume, point NEXT_PUBLIC_GA_ID at Google
 * Analytics. This store is for a small site and a single operator.
 */

const DATA_DIR = path.join(process.cwd(), ".data");

/** Page views are capped so the file cannot grow without bound. */
const LIMITS = {
  pageviews: 5000,
  leads: 2000,
  subscribers: 2000,
};

function fileFor(name) {
  return path.join(DATA_DIR, `${name}.json`);
}

export function readAll(name) {
  try {
    const file = fileFor(name);
    if (!fs.existsSync(file)) return [];
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(name, rows) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(fileFor(name), JSON.stringify(rows, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
}

/** Newest first, trimmed to the limit for that dataset. */
export function append(name, record) {
  const rows = readAll(name);
  rows.unshift(record);
  const limit = LIMITS[name] ?? 2000;
  return writeAll(name, rows.slice(0, limit));
}

export function update(name, id, patch) {
  const rows = readAll(name);
  const i = rows.findIndex((r) => r.id === id);
  if (i === -1) return false;
  rows[i] = { ...rows[i], ...patch, updatedAt: new Date().toISOString() };
  return writeAll(name, rows);
}

export function newId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
