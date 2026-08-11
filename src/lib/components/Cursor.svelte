<script lang="ts">
	import { onMount } from 'svelte';
	import { isFinePointer, prefersReduced } from '$lib/motion';

	let dot: HTMLDivElement;
	let ring: HTMLDivElement;

	onMount(() => {
		if (!isFinePointer || prefersReduced) return;

		document.documentElement.classList.add('has-cursor');

		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let rx = x;
		let ry = y;
		let tx = x;
		let ty = y;
		let hoveredEl: HTMLElement | null = null;
		let raf = 0;

		const applyPull = (e: MouseEvent) => {
			if (!hoveredEl) return;
			const rect = hoveredEl.getBoundingClientRect();
			const dx = rect.left + rect.width / 2 - e.clientX;
			const dy = rect.top + rect.height / 2 - e.clientY;
			const dist = Math.hypot(dx, dy) || 1;
			if (rect.width < 480) {
				// magnetic pull, capped at 24px so the ring never strays far
				const pull = Math.min(dist, 24) / dist;
				tx = e.clientX + dx * pull;
				ty = e.clientY + dy * pull;
			} else {
				// large elements (e.g. full-width project rows): no pull, follow mouse
				tx = e.clientX;
				ty = e.clientY;
			}
		};

		const move = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			if (hoveredEl) applyPull(e);
		};

		const over = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
			hoveredEl = target;
			if (target) {
				ring.classList.add('is-hover');
				applyPull(e);
			} else {
				ring.classList.remove('is-hover');
				tx = x;
				ty = y;
			}
		};

		const loop = () => {
			rx += (tx - rx) * 0.12;
			ry += (ty - ry) * 0.12;
			if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
			if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
			raf = requestAnimationFrame(loop);
		};

		window.addEventListener('mousemove', move, { passive: true });
		window.addEventListener('mouseover', over, { passive: true });
		raf = requestAnimationFrame(loop);

		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseover', over);
			cancelAnimationFrame(raf);
			document.documentElement.classList.remove('has-cursor');
		};
	});
</script>

<svelte:window />
{#if isFinePointer && !prefersReduced}
	<div class="cursor-dot" bind:this={dot} aria-hidden="true"></div>
	<div class="cursor-ring" bind:this={ring} aria-hidden="true"></div>
{/if}

<style>
	.cursor-dot,
	.cursor-ring {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		pointer-events: none;
		border-radius: 50%;
		mix-blend-mode: difference;
	}

	.cursor-dot {
		width: 6px;
		height: 6px;
		background: #fff;
	}

	.cursor-ring {
		width: 36px;
		height: 36px;
		border: 1px solid rgba(255, 255, 255, 0.7);
		transition:
			width 0.25s ease,
			height 0.25s ease,
			background 0.25s ease;
	}

	.cursor-ring:global(.is-hover) {
		width: 64px;
		height: 64px;
		background: none;
		border-color: var(--accent);
	}
</style>
