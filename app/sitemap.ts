import { MetadataRoute } from 'next';

// Yeh line Next.js ko batati hai ki sitemap hamesha live data fetch karega
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wisegreenenergy.in';

  let blogs = [];
  try {
    const res = await fetch(`${baseUrl}/get_blogs.php`, { cache: 'no-store' });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (error) {
    console.error('Sitemap Generation Error:', error);
  }

  const blogUrls = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    ...blogUrls,
  ];
}




import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wisegreenenergy.in';

  // cPanel API se saare blogs fetch karna
  let blogs = [];
  try {
    const res = await fetch(`${baseUrl}/get_blogs.php`, { cache: 'no-store' });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (error) {
    console.error('Sitemap Generation Error:', error);
  }

  // Dynamic Blogs ke URLs generate karna
  const blogUrls = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static aur Dynamic URLs ko mila kar Google ko return karna
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0, // Homepage ki sabse high priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogUrls, // Yahan aapke saare cPanel blogs automatically add ho jayenge
  ];
}
