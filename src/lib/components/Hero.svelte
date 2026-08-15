<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { prefersReduced } from '$lib/motion';
	import { t } from '$lib/i18n.svelte';
	import Terminal from './Terminal.svelte';

	let section: HTMLElement;

	onMount(() => {
		if (prefersReduced) return;
		const ctx = gsap.context(() => {
			gsap.to('.wi', {
				clipPath: 'inset(0 0 0% 0)',
				duration: 1.2,
				ease: 'power4.out',
				stagger: 0.12,
				delay: 0.3
			});
			gsap.from('[data-hero-fade]', {
				y: 20,
				opacity: 0,
				duration: 0.8,
				ease: 'expo.out',
				stagger: 0.15,
				delay: 1.3
			});
		}, section);
		return () => ctx.revert();
	});
</script>

<section class="hero" bind:this={section} id="top">
	<div class="hero-inner">
		<div class="hero-main">
			<div class="kicker mono-label" data-hero-fade>
		<span>Portfolio — 2026</span>
		<span class="dot">●</span>
		<span>Platform Engineering</span>
	</div>

	<h1 class="name">
		<span class="line">
			<span class="w"><span class="wi">Ilhaam</span></span>
		</span>
		<span class="line">
			<span class="w"
				><span class="wi">Ghiffari<span class="accent-dot">·</span></span></span>
		</span>
	</h1>

	<p class="role mono-label" data-hero-fade>Platform Engineer</p>

	<div class="cta-row" data-hero-fade>
		<a class="cta" href="#work" data-cursor>{t('hero.ctaWork')} <span class="arw">↓</span></a>
		<a class="cta" href="#about" data-cursor>{t('hero.ctaAbout')}</a>
		<span class="status"><span class="pulse"></span>{t('hero.status')}</span>
	</div>
		</div>

		<div class="term-wrap">
			<Terminal />
		</div>
	</div>

	<div class="coords mono-label" aria-hidden="true" data-hero-fade>
		REMOTE-FIRST · CLOUD-NATIVE
	</div>

	<div class="scroll-cue mono-label" aria-hidden="true" data-hero-fade>
		<span>Scroll</span>
		<span class="line"></span>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: calc(var(--section-y) + 40px) var(--gutter) var(--section-y);
		max-width: 1520px;
		margin: 0 auto;
		position: relative;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		/* glow extends to the true viewport edges when the 1520px cap kicks in */
		left: calc((100vw - min(100vw, 1520px)) / -2);
		right: calc((100vw - min(100vw, 1520px)) / -2);
		pointer-events: none;
		background: radial-gradient(
			900px 700px at 82% 18%,
			rgba(201, 242, 79, 0.05),
			transparent 62%
		);
	}

	.hero-inner {
		display: grid;
		grid-template-columns: 1fr 420px;
		gap: clamp(32px, 4vw, 72px);
		align-items: center;
	}

	.hero-main {
		min-width: 0;
	}

	@media (max-width: 1080px) {
		.hero-inner {
			grid-template-columns: 1fr;
		}
		.term-wrap {
			display: none;
		}
	}

	.kicker {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px 14px;
		margin-bottom: clamp(28px, 5vh, 56px);
	}

	.dot {
		color: var(--accent);
		font-size: 8px;
	}

	.name {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(48px, 12vw, 172px);
		line-height: 0.94;
		letter-spacing: -0.035em;
	}

	.line {
		display: block;
	}

	.w {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
		margin-right: 0.14em;
		/* room for descenders inside the clipping mask */
		padding-bottom: 0.1em;
		margin-bottom: -0.1em;
	}

	.w:last-child {
		margin-right: 0;
	}

	.wi {
		display: inline-block;
		clip-path: inset(0 0 100% 0);
		will-change: clip-path;
	}

	.accent-dot {
		color: var(--accent);
		font-style: italic;
		font-size: 1.15em;
		vertical-align: 0.02em;
	}

	.role {
		margin-top: clamp(24px, 4vh, 44px);
		font-size: 13px;
	}

	.cta-row {
		margin-top: clamp(32px, 5vh, 56px);
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 18px 36px;
	}

	.cta {
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		padding-bottom: 6px;
		border-bottom: 1px solid var(--line);
		transition:
			border-color 0.3s ease,
			color 0.3s ease;
	}

	@media (hover: hover) {
		.cta:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
	}

	.arw {
		display: inline-block;
		transition: transform 0.3s ease;
	}

	@media (hover: hover) {
		.cta:hover .arw {
			transform: translateY(4px);
		}
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.pulse {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent);
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 0 0 rgba(201, 242, 79, 0.55);
		}
		50% {
			box-shadow: 0 0 0 7px rgba(201, 242, 79, 0);
		}
	}

	.coords {
		position: absolute;
		right: var(--gutter);
		bottom: calc(var(--section-y) * 0.55);
		writing-mode: vertical-rl;
		opacity: 0.55;
		font-size: 10px;
	}

	.scroll-cue {
		position: absolute;
		left: 50%;
		bottom: 28px;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		opacity: 0.6;
		font-size: 10px;
	}

	.scroll-cue .line {
		width: 1px;
		height: 56px;
		background: linear-gradient(to bottom, var(--muted), transparent);
		overflow: hidden;
		position: relative;
	}

	.scroll-cue .line::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--accent);
		transform: translateY(-100%);
		animation: drop 1.8s ease-in-out infinite;
	}

	@keyframes drop {
		0% {
			transform: translateY(-100%);
		}
		60%,
		100% {
			transform: translateY(100%);
		}
	}

	@media (max-width: 640px) {
		.coords {
			display: none;
		}
		.scroll-cue {
			bottom: 16px;
		}
		.scroll-cue .line {
			height: 36px;
		}
	}
</style>
