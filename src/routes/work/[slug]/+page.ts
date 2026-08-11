import { projects } from '$lib/data';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug as string }));
}

export function load({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) throw error(404, 'Project not found');
	return { project };
}
