import { getGithubProjects } from '@/lib/github';
import PortfolioClient from '@/components/PortfolioClient';

export const metadata = {
  title: 'Portfolio | BitLayerx — Live Projects & Deployments',
  description:
    'Explore live, deployed projects built by BitLayerx — real products shipped for businesses across Africa and beyond. Synced directly from GitHub.',
};

// Re-render hourly so newly published repos (with a Vercel URL) appear automatically.
export const revalidate = 3600;

export default async function PortfolioPage() {
  const projects = await getGithubProjects();

  return (
    <>
      {/* SEO Schema — generated from live project data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'BitLayerx Portfolio — Live Projects & Deployments',
            description:
              'Explore live, deployed projects built by BitLayerx across e-commerce, real estate, healthcare, education and more.',
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
                { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://bitlayerx.com/portfolio' },
              ],
            },
          }),
        }}
      />

      <PortfolioClient projects={projects} />
    </>
  );
}
