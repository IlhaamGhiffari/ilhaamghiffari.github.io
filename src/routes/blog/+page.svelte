<script lang="ts">
	import { posts } from '$lib/posts';
	import { t } from '$lib/i18n.svelte';
</script>

<svelte:head>
	<title>Writing — Ilhaam Ghiffari</title>
	<meta property="og:title" content="Writing — Ilhaam Ghiffari" />
	<meta
		property="og:description"
		content="Field notes on platform engineering, GitOps and infrastructure."
	/>
	<link rel="canonical" href="https://ilhaamghiffari.codes/blog" />
</svelte:head>

<section class="section blog">
	<a class="back mono-label" href="/" data-cursor>{t('cs.back')}</a>

	<div class="head" data-reveal>
		<span class="mono-label">{t('blog.head1')}</span>
		<span class="mono-label">2026</span>
	</div>

	<div class="rows" data-reveal-children>
		{#each posts as p}
			<a class="row" href={`/blog/${p.slug}`} data-cursor>
				<span class="main">
					<span class="title">{p.title}</span>
					<span class="excerpt">{p.excerpt}</span>
				</span>
				<span class="meta mono-label">
					{p.date} · {p.readingTime}
				</span>
				<span class="arrow" aria-hidden="true">→</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.blog {
		padding-top: calc(var(--section-y) * 1.6);
		max-width: 1080px;
	}

	.back {
		display: inline-block;
		color: var(--muted);
		margin-bottom: clamp(48px, 8vh, 90px);
	}

	.back:hover {
		color: var(--accent);
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 24px;
	}

	.rows {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr auto auto;
		gap: 24px;
		align-items: center;
		padding: 34px 12px;
		border-top: 1px solid var(--line);
		transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.rows .row:last-child {
		border-bottom: 1px solid var(--line);
	}

	.main {
		min-width: 0;
	}

	.title {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(24px, 3.2vw, 40px);
		line-height: 1.1;
		letter-spacing: -0.015em;
	}

	.excerpt {
		display: block;
		margin-top: 10px;
		font-size: 14px;
		line-height: 1.6;
		color: var(--muted);
		max-width: 640px;
	}

	.meta {
		color: var(--ink-dim);
		white-space: nowrap;
	}

	.arrow {
		color: var(--accent);
		opacity: 0;
		transform: translateX(-6px);
		transition:
			opacity 0.3s ease,
			transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (hover: hover) {
		.row:hover {
			padding-left: 24px;
		}
		.row:hover .arrow {
			opacity: 1;
			transform: translateX(0);
		}
		.row:hover .title {
			color: var(--accent);
		}
	}

	@media (max-width: 640px) {
		.row {
			grid-template-columns: 1fr auto;
			gap: 12px;
			padding: 26px 6px;
		}
		.meta {
			display: none;
		}
		.title {
			font-size: 22px;
		}
	}
</style>
