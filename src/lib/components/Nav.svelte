<script lang="ts">
	import { onMount } from 'svelte';

	const links = [
		{ label: 'Work', href: '#work' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];

	let scrolled = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="nav" class:scrolled>
	<a class="brand" href="#top" data-cursor>ilhaamghiffari<span class="accent">.codes</span></a>
	<nav class="links" aria-label="Primary">
		{#each links as l}
			<a class="link mono-label" href={l.href} data-cursor>{l.label}</a>
		{/each}
	</nav>
	<div class="place mono-label">Aceh, ID</div>
</header>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 22px var(--gutter);
		transition: background 0.4s ease, backdrop-filter 0.4s ease;
	}

	.nav.scrolled {
		background: rgba(10, 10, 11, 0.7);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.brand {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--ink);
	}

	.accent {
		color: var(--accent);
	}

	.links {
		display: flex;
		gap: clamp(20px, 4vw, 44px);
	}

	.link {
		color: var(--ink);
		opacity: 0.75;
		transition: opacity 0.25s ease;
		position: relative;
		padding: 10px 12px;
		margin: -10px -12px;
	}

	@media (hover: hover) {
		.link:hover {
			opacity: 1;
		}
	}

	.link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (hover: hover) {
		.link:hover::after {
			transform: scaleX(1);
		}
	}

	.place {
		color: var(--muted);
		opacity: 0.5;
	}

	@media (max-width: 640px) {
		.place {
			display: none;
		}
		.nav {
			padding-top: 16px;
			padding-bottom: 16px;
		}
		.brand {
			font-size: 10px;
			letter-spacing: 0.03em;
		}
	}
</style>
