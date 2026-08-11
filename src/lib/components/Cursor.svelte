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
		let raf = 0;

		const move = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
		};

		const over = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
			if (target) {
				ring.classList.add('is-hover');
				const rect = target.getBoundingClientRect();
				const cx = rect.left + rect.width / 2;
				const cy = rect.top + rect.height / 2;
				rx += (cx - rx) * 0.15;
				ry += (cy - ry) * 0.15;
			} else {
				ring.classList.remove('is-hover');
			}
		};

		const loop = () => {
			rx += (x - rx) * 0.12;
			ry += (y - ry) * 0.12;
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
