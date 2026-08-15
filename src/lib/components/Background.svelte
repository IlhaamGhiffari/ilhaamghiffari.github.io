<script lang="ts">
	import { onMount } from 'svelte';
	import { prefersReduced } from '$lib/motion';

	let canvas: HTMLCanvasElement;

	// ---- blueprint grid + scroll parallax on a 2D canvas ----
	function initGrid(canvas: HTMLCanvasElement): (() => void) | undefined {
		const ctx = canvas.getContext('2d');
		if (!ctx) return undefined;

		const SPACING = 80; // minor grid pitch (px)
		const MAJOR = 4; // every Nth line is a major line

		const minorA = 'rgba(201, 242, 79, 0.055)';
		const majorA = 'rgba(201, 242, 79, 0.10)';
		const crossA = 'rgba(201, 242, 79, 0.16)';

		let dpr = 1;
		let w = 0;
		let h = 0;
		let raf = 0;
		let scrollT = 0;
		let scrollV = 0;
		let dirty = true;

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			const offY = (-scrollV * 0.08) % SPACING; // scroll parallax drift

			// vertical lines (fixed x)
			const xCount = Math.ceil(w / SPACING) + 2;
			for (let i = -1; i < xCount; i++) {
				const gx = i * SPACING;
				const major = ((i % MAJOR) + MAJOR) % MAJOR === 0;
				ctx.strokeStyle = major ? majorA : minorA;
				ctx.beginPath();
				ctx.moveTo(gx, 0);
				ctx.lineTo(gx, h);
				ctx.stroke();
			}

			// horizontal lines (drift with scroll)
			const yCount = Math.ceil(h / SPACING) + 2;
			for (let j = -1; j < yCount; j++) {
				const gy = j * SPACING + offY;
				const major = ((j % MAJOR) + MAJOR) % MAJOR === 0;
				ctx.strokeStyle = major ? majorA : minorA;
				ctx.beginPath();
				ctx.moveTo(0, gy);
				ctx.lineTo(w, gy);
				ctx.stroke();
			}

			// crosshairs at major intersections
			ctx.strokeStyle = crossA;
			for (let i = 0; i * MAJOR * SPACING <= w + SPACING; i++) {
				for (let j = 0; j * MAJOR * SPACING <= h + SPACING; j++) {
					const gx = i * MAJOR * SPACING;
					const gy = j * MAJOR * SPACING + offY;
					ctx.beginPath();
					ctx.moveTo(gx - 5, gy);
					ctx.lineTo(gx + 5, gy);
					ctx.moveTo(gx, gy - 5);
					ctx.lineTo(gx, gy + 5);
					ctx.stroke();
				}
			}
		};

		const onScroll = () => {
			scrollT = window.scrollY;
			dirty = true;
		};
		const onResize = () => {
			resize();
			dirty = true;
		};

		const step = () => {
			scrollV += (scrollT - scrollV) * 0.12;
			if (dirty || Math.abs(scrollT - scrollV) > 0.05) {
				draw();
				dirty = false;
			}
			raf = requestAnimationFrame(step);
		};

		resize();
		if (prefersReduced) {
			draw(); // static grid, no motion
			window.addEventListener('resize', onResize);
			return () => window.removeEventListener('resize', onResize);
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);
		raf = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	}

	onMount(() => {
		return initGrid(canvas);
	});
</script>

<div class="bg" aria-hidden="true">
	<canvas class="grid-canvas" bind:this={canvas}></canvas>
	<div class="vignette"></div>
	<span class="tag t1 mono-label">GITOPS — SYNCED</span>
	<span class="tag t2 mono-label">INFRA-AS-CODE</span>
	<span class="tag t3 mono-label">SVELTEKIT · STATIC</span>
</div>

<style>
	.bg {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		overflow: hidden;
	}

	.grid-canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
	}

	/* ---------- vignette: darkens edges, keeps the hero lit ---------- */
	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse at 50% 38%,
			transparent 60%,
			rgba(0, 0, 0, 0.3) 100%
		);
	}

	/* ---------- mono corner labels ---------- */
	.tag {
		position: absolute;
		font-size: 9px;
		letter-spacing: 0.16em;
		color: rgba(201, 242, 79, 0.45);
		user-select: none;
	}

	.t1 {
		top: 88px;
		right: var(--gutter);
	}
	.t2 {
		top: 46%;
		left: var(--gutter);
	}
	.t3 {
		right: var(--gutter);
		bottom: 28px;
	}

	@media (max-width: 640px) {
		.tag {
			display: none;
		}
	}
</style>
