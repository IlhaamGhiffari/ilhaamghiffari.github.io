<script lang="ts">
	import { onMount } from 'svelte';
	import { isFinePointer, prefersReduced } from '$lib/motion';

	let ring: HTMLDivElement;

	onMount(() => {
		if (!isFinePointer || prefersReduced) return;

		// simple follow: ring tracks the pointer directly, no lag, no magnetic pull
		const move = (e: MouseEvent) => {
			ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
		};

		const over = (e: MouseEvent) => {
			if ((e.target as HTMLElement).closest('[data-cursor]')) {
				ring.classList.add('is-hover');
			} else {
				ring.classList.remove('is-hover');
			}
		};

		window.addEventListener('mousemove', move, { passive: true });
		window.addEventListener('mouseover', over, { passive: true });
		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseover', over);
		};
	});
</script>

<svelte:window />
{#if isFinePointer && !prefersReduced}
	<div class="cursor-ring" bind:this={ring} aria-hidden="true"></div>
{/if}

<style>
	.cursor-ring {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		width: 36px;
		height: 36px;
		border: 1.5px solid var(--accent);
		border-radius: 50%;
		pointer-events: none;
		transition:
			width 0.2s ease,
			height 0.2s ease,
			background 0.2s ease;
	}

	.cursor-ring:global(.is-hover) {
		width: 56px;
		height: 56px;
		background: rgba(201, 242, 79, 0.08);
	}
</style>
