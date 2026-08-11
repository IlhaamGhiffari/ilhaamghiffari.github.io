<script lang="ts">
	import { projects } from '$lib/data';
</script>

<section class="section work" id="work">
	<div class="head" data-reveal>
		<span class="mono-label">Selected work — 04</span>
		<span class="mono-label">2024 — 2026</span>
	</div>

	<hr class="section-rule" />

	<div class="rows" data-reveal-children>
		{#each projects as p}
			{#if p.href}
				<a
					class="row"
					href={p.href}
					target={p.external ? '_blank' : undefined}
					rel={p.external ? 'noreferrer noopener' : undefined}
					data-cursor
				>
					<span class="idx mono-label">{p.index}</span>
					<span class="main">
						<span class="title">
							{p.title}
							{#if p.note}<span class="note">{p.note}</span>{/if}
						</span>
						<span class="desc">{p.desc}</span>
						<span class="tags mono-label">{p.tags.join('  ·  ')}</span>
					</span>
					<span class="year mono-label">{p.year}</span>
					<span class="arrow" aria-hidden="true">↗</span>
				</a>
			{:else}
				<div class="row is-static">
					<span class="idx mono-label">{p.index}</span>
					<span class="main">
						<span class="title">
							{p.title}
							{#if p.note}<span class="note">{p.note}</span>{/if}
						</span>
						<span class="desc">{p.desc}</span>
						<span class="tags mono-label">{p.tags.join('  ·  ')}</span>
					</span>
					<span class="year mono-label">{p.year}</span>
					<span class="lock mono-label" aria-hidden="true">PRIVATE</span>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 8px;
	}

	.rows {
		border-bottom: 1px solid var(--line);
	}

	.row {
		display: grid;
		grid-template-columns: 56px 1fr auto 44px;
		gap: 28px;
		align-items: center;
		padding: clamp(28px, 4.5vh, 48px) 14px;
		border-top: 1px solid var(--line);
		transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (hover: hover) {
		.row:hover {
			padding-left: 24px;
		}
	}

	.idx {
		opacity: 0.6;
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-width: 0;
	}

	.title {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(30px, 4.2vw, 56px);
		line-height: 1.02;
		letter-spacing: -0.01em;
		position: relative;
		display: inline;
	}

	.title::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (hover: hover) {
		.row:hover .title {
			color: var(--accent);
		}

		.row:hover .title::after {
			transform: scaleX(1);
		}

		.row:hover .desc {
			color: var(--ink-dim);
		}

		.row:hover .tags {
			opacity: 0.85;
		}

		.row:hover .arrow {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	.note {
		display: inline-block;
		vertical-align: middle;
		margin-left: 14px;
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.18em;
		border: 1px solid currentColor;
		border-radius: 999px;
		padding: 4px 10px;
		opacity: 0.75;
	}

	.desc {
		max-width: 560px;
		font-size: 14.5px;
		line-height: 1.65;
		color: var(--muted);
		transition: color 0.35s ease;
	}



	.tags {
		font-size: 10.5px;
		opacity: 0.65;
		transition: opacity 0.35s ease;
	}

	.year {
		opacity: 0.55;
	}

	.arrow {
		font-size: 26px;
		transform: translate(-8px, 8px);
		opacity: 0;
		transition:
			transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
			opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.lock {
		font-size: 9px;
		letter-spacing: 0.2em;
		opacity: 0.4;
		border: 1px solid var(--line);
		padding: 3px 8px;
		border-radius: 3px;
	}

	.is-static .desc {
		opacity: 0.9;
	}

	@media (max-width: 820px) {
		.row {
			grid-template-columns: 40px 1fr auto;
			gap: 16px;
		}
		.arrow,
		.lock {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.row {
			grid-template-columns: 1fr;
			gap: 8px;
		}
		.idx {
			display: none;
		}
		.year {
			text-align: left;
		}
	}
</style>
