<script lang="ts">
	import { onMount } from 'svelte';
	import { isFinePointer, prefersReduced } from '$lib/motion';

	let dot: HTMLDivElement;
	let ring: HTMLDivElement;

	onMount(() => {
		if (!isFinePointer || prefersReduced) return;

		const root = document.documentElement;
		root.classList.add('has-cursor');

		// Pointer target coordinates: dot tracks instantly, ring eases toward it.
		let px = window.innerWidth / 2;
		let py = window.innerHeight / 2;
		let rx = px;
		let ry = py;
		let tx = px;
		let ty = py;

		let hoverEl: HTMLElement | null = null;
		let visible = false;
		let pressed = false;
		let raf = 0;
		let last = performance.now();

		const setVisible = (v: boolean) => {
			visible = v;
			dot?.classList.toggle('is-visible', v);
			ring?.classList.toggle('is-visible', v);
		};

		// Subtle magnetic pull toward the center of small interactive targets.
		// Capped at 20px and skipped on wide elements (e.g. full-width rows)
		// so the ring never wobbles or strays far from the pointer.
		const target = (el: HTMLElement | null, cx: number, cy: number) => {
			if (el && el.getBoundingClientRect().width < 480) {
				const r = el.getBoundingClientRect();
				const dx = r.left + r.width / 2 - cx;
				const dy = r.top + r.height / 2 - cy;
				const dist = Math.hypot(dx, dy) || 1;
				const pull = Math.min(dist, 20) / dist;
				tx = cx + dx * pull;
				ty = cy + dy * pull;
			} else {
				tx = cx;
				ty = cy;
			}
		};

		const onMove = (e: MouseEvent) => {
			px = e.clientX;
			py = e.clientY;
			if (!visible) setVisible(true);
			target(hoverEl, px, py);
		};

		const onOver = (e: MouseEvent) => {
			const el = (e.target as Element | null)?.closest?.(
				'[data-cursor]'
			) as HTMLElement | null;
			hoverEl = el ?? null;
			ring?.classList.toggle('is-hover', !!hoverEl);
			target(hoverEl, px, py);
		};

		const onDown = () => {
			pressed = true;
		};
		const onUp = () => {
			pressed = false;
		};
		const onLeave = () => setVisible(false);
		const onEnter = () => setVisible(true);

		// Frame-rate independent easing so the feel is identical on 60/120/144 Hz.
		const loop = (now: number) => {
			const dt = Math.min((now - last) / 1000, 0.1);
			last = now;
			const k = 1 - Math.exp(-dt * 14);
			rx += (tx - rx) * k;
			ry += (ty - ry) * k;
			if (dot) dot.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
			if (ring) {
				const s = pressed ? 0.82 : 1;
				ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${s})`;
			}
			raf = requestAnimationFrame(loop);
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('mouseover', onOver, { passive: true });
		window.addEventListener('mousedown', onDown);
		window.addEventListener('mouseup', onUp);
		document.documentElement.addEventListener('mouseleave', onLeave);
		document.documentElement.addEventListener('mouseenter', onEnter);
		raf = requestAnimationFrame(loop);

		return () => {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseover', onOver);
			window.removeEventListener('mousedown', onDown);
			window.removeEventListener('mouseup', onUp);
			document.documentElement.removeEventListener('mouseleave', onLeave);
			document.documentElement.removeEventListener('mouseenter', onEnter);
			cancelAnimationFrame(raf);
			root.classList.remove('has-cursor');
		};
	});
</script>

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
		z-index: 1000;
		pointer-events: none;
		border-radius: 50%;
		mix-blend-mode: difference;
		opacity: 0;
		transition: opacity 0.25s ease;
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
			opacity 0.25s ease,
			width 0.25s ease,
			height 0.25s ease,
			background 0.25s ease,
			border-color 0.25s ease;
	}

	.cursor-dot:global(.is-visible),
	.cursor-ring:global(.is-visible) {
		opacity: 1;
	}

	.cursor-ring:global(.is-hover) {
		width: 56px;
		height: 56px;
		background: rgba(255, 255, 255, 0.08);
		border-color: var(--accent);
	}
</style>
