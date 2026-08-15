import { posts } from '$lib/posts';
import { projects } from '$lib/data';

export const prerender = true;

const BASE = 'https://ilhaamghiffari.codes';

export function GET() {
	const urls: { loc: string; priority: string }[] = [
		{ loc: `${BASE}/`, priority: '1.0' },
		{ loc: `${BASE}/blog`, priority: '0.8' }
	];

	for (const p of projects) {
		if (p.slug) urls.push({ loc: `${BASE}/work/${p.slug}`, priority: '0.9' });
	}
	for (const p of posts) {
		urls.push({ loc: `${BASE}/blog/${p.slug}`, priority: '0.8' });
	}

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
