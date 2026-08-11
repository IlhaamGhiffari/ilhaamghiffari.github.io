<script lang="ts">
	import type { Post } from '$lib/posts';

	let { data }: { data: { post: Post } } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} — Ilhaam Ghiffari</title>
	<meta property="og:title" content={`${post.title} — Ilhaam Ghiffari`} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:url" content={`https://ilhaamghiffari.codes/blog/${post.slug}`} />
	<meta name="description" content={post.excerpt} />
</svelte:head>

<section class="section post-page">
	<a class="back mono-label" href="/#work" data-cursor>← Work</a>

	<header class="head">
		<h1 class="title">{post.title}</h1>
		<div class="meta mono-label">
			<span>{post.date}</span>
			<span>·</span>
			<span>{post.readingTime}</span>
		</div>
		<p class="excerpt">{post.excerpt}</p>
	</header>

	<article>
		{#each post.sections as s}
			{#if s.heading}
				<h2>{s.heading}</h2>
			{/if}
			<p>{s.body}</p>
		{/each}
	</article>

	<footer class="end mono-label">
		<span>Ilhaam Ghiffari — ilhaamghiffari.codes</span>
	</footer>
</section>

<style>
	.post-page {
		padding-top: calc(var(--section-y) + 60px);
		max-width: 760px;
	}

	.back {
		display: inline-block;
		margin-bottom: 44px;
		color: var(--muted);
		transition: color 0.25s ease;
	}

	@media (hover: hover) {
		.back:hover {
			color: var(--accent);
		}
	}

	.title {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(38px, 5.6vw, 64px);
		line-height: 1.05;
		letter-spacing: -0.015em;
	}

	.meta {
		margin-top: 20px;
		display: flex;
		gap: 10px;
		font-size: 10.5px;
		opacity: 0.6;
	}

	.excerpt {
		margin-top: 24px;
		color: var(--muted);
		font-size: 16px;
		line-height: 1.7;
	}

	article {
		margin-top: clamp(40px, 6vh, 56px);
	}

	article h2 {
		margin-top: 40px;
		margin-bottom: 14px;
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(24px, 3vw, 32px);
		line-height: 1.15;
		color: var(--accent);
	}

	article p {
		font-size: 16px;
		line-height: 1.8;
		color: var(--ink);
		margin-bottom: 18px;
	}

	.end {
		margin-top: clamp(48px, 8vh, 72px);
		padding-top: 20px;
		border-top: 1px solid var(--line);
		font-size: 10px;
		opacity: 0.5;
	}
</style>
