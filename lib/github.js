// lib/github.js
// Live GitHub -> Vercel project feed for the BitLayerx portfolio.
//
// Any public repo on the connected GitHub account that has a Vercel
// homepage URL set (Repo → About → Website) appears on the portfolio
// automatically. Push a new repo, set its Vercel URL, and it shows up
// on the next revalidation — no code changes needed.
//
// Optionally set GITHUB_TOKEN in the environment to raise the API rate
// limit (recommended for production deployments).

export const GITHUB_USER = 'opeyemi4228-maker';

// Force the correct live URL for repos whose GitHub "homepage" field is
// outdated or wrong. Keyed by lowercased repo name. These win over whatever
// the GitHub API (or the fallback list) reports.
const HOMEPAGE_OVERRIDES = {
  'realestate': 'https://bitlayerx-real-estate.vercel.app',
  'digital-library': 'https://digital-library-vert.vercel.app',
};

// Repos we never want to show on the public portfolio.
const EXCLUDED = new Set([
  'bitlayerx',
  'check',
  'nordic-bridge-partner',
  'bricks-wealth',
  'bricks-and-wealth',
  'rotimi',
  'rotimiamaechi-website',
]);

// Used only if the GitHub API is unreachable / rate-limited, so the
// portfolio always renders something sensible.
const FALLBACK = [
  { id: 'gcsa', name: 'GCSA-Consulting', homepage: 'https://gcsa-consulting.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/GCSA-Consulting', language: 'JavaScript', updated_at: '2026-06-08T00:00:00Z' },
  { id: 'realestate', name: 'RealEstate', homepage: 'https://bitlayerx-real-estate.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/RealEstate', language: 'JavaScript', updated_at: '2026-06-07T00:00:00Z' },
  { id: 'ngogbehei', name: 'Ngogbehei-Cancer-Center-', homepage: 'https://ngogbeheicancercenter.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/Ngogbehei-Cancer-Center-', language: 'JavaScript', updated_at: '2026-05-25T00:00:00Z' },
  { id: 'charles', name: 'Pastor-Charles-Adakole', homepage: 'https://charlesadakoleconsulting.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/Pastor-Charles-Adakole', language: 'JavaScript', updated_at: '2026-05-13T00:00:00Z' },
  { id: 'ncc', name: 'NCC', homepage: 'https://ncc-olive.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/NCC', language: 'JavaScript', updated_at: '2026-04-15T00:00:00Z' },
  { id: 'digital-library', name: 'Digital-Library', homepage: 'https://digital-library-vert.vercel.app', html_url: 'https://github.com/opeyemi4228-maker/Digital-Library', language: 'JavaScript', updated_at: '2026-01-19T00:00:00Z' },
];

// "Ngogbehei-Cancer-Center-" -> "Ngogbehei Cancer Center"
// "RotimiAmaechi-Website"    -> "Rotimi Amaechi Website"
export function prettifyName(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
}

function toProject(repo) {
  const override = HOMEPAGE_OVERRIDES[(repo.name || '').toLowerCase()];
  const homepage = (override || repo.homepage || '').trim();
  return {
    id: repo.id ?? repo.name,
    slug: repo.name,
    title: prettifyName(repo.name),
    homepage,
    repoUrl: repo.html_url || `https://github.com/${GITHUB_USER}/${repo.name}`,
    language: repo.language || 'Web',
    topics: repo.topics || [],
    stars: repo.stargazers_count || 0,
    description:
      repo.description ||
      'A live, production web experience designed, built and deployed by BitLayerx.',
    updatedAt: repo.updated_at || null,
  };
}

export async function getGithubProjects() {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } } // refresh hourly
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const repos = await res.json();
    const projects = repos
      .filter((r) => !r.fork)
      .filter((r) => (r.homepage || '').trim()) // must have a deployed URL
      .filter((r) => !EXCLUDED.has(r.name.toLowerCase()))
      .map(toProject);

    return projects.length ? projects : FALLBACK.map(toProject);
  } catch {
    return FALLBACK.map(toProject);
  }
}
