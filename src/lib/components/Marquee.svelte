<script lang="ts">
	import { marqueeItems } from '$lib/data';
</script>

<div class="marquee" aria-hidden="true">
	<div class="marquee-track">
		{#each marqueeItems as item}
			<span class="item">{item} <span class="sep">·</span></span>
		{/each}
		{#each marqueeItems as item}
			<span class="item">{item} <span class="sep">·</span></span>
		{/each}
	</div>
</div>

<style>
	.marquee {
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		overflow: hidden;
		padding: 20px 0;
	}

	@media (hover: hover) {
		.marquee:hover .marquee-track {
			animation-play-state: paused;
		}
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 40s linear infinite;
		will-change: transform;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 28px;
		padding: 0 28px;
		font-family: var(--font-mono);
		font-size: 13px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--muted);
		white-space: nowrap;
	}

	.sep {
		color: var(--accent);
		font-size: 14px;
	}

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}
</style>
