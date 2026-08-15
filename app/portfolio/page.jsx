import { getGithubProjects } from '@/lib/github';
import PortfolioClient from '@/components/PortfolioClient';

export const metadata = {
  title: 'Work, Live Projects & Deployments',
  description:
    'Every project in the BitLayerX index is a running deployment you can open and use. Synced from GitHub and refreshed hourly.',
};

// Re-render hourly so newly published repos (with a Vercel URL) appear automatically.
export const revalidate = 3600;

export default async function PortfolioPage() {
  const projects = await getGithubProjects();

  return (
    <>
      {/* SEO Schema, generated from live project data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'BitLayerX Work, Live Projects & Deployments',
            description:
              'Running deployments built by BitLayerX across real estate, healthcare, education, consulting and more.',
            url: 'https://bitlayerx.com/portfolio',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: projects.length,
              itemListElement: projects.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.title,
                url: p.homepage,
              })),
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bitlayerx.com' },
                { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://bitlayerx.com/portfolio' },
              ],
            },
          }),
        }}
      />

      <PortfolioClient projects={projects} />
    </>
  );
}
