<script lang="ts">
	import { onMount } from 'svelte';
	import { lang, t, toggleLang } from '$lib/i18n.svelte';

	const links = [
		{ key: 'nav.work', href: '#work' },
		{ key: 'nav.about', href: '#about' },
		{ key: 'nav.contact', href: '#contact' },
		{ key: 'nav.resume', href: '/resume.pdf' }
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
			<a class="link mono-label" href={l.href} data-cursor>{t(l.key)}</a>
		{/each}
	</nav>
	<div class="right">
		<button class="lang mono-label" onclick={toggleLang} data-cursor aria-label="Toggle language">
			{lang.value === 'en' ? 'ID' : 'EN'}
		</button>
		<div class="place mono-label">Aceh, ID</div>
	</div>
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

	.right {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	.lang {
		font-size: 10px;
		letter-spacing: 0.14em;
		color: var(--accent);
		border: 1px solid var(--line);
		border-radius: 4px;
		padding: 5px 9px;
		transition:
			border-color 0.25s ease,
			background 0.25s ease;
	}

	@media (hover: hover) {
		.lang:hover {
			border-color: var(--accent);
		}
	}

	@media (max-width: 640px) {
		.place {
			display: none;
		}
		.nav {
			padding-top: 14px;
			padding-bottom: 14px;
		}
		.brand {
			font-size: 9px;
			letter-spacing: 0.02em;
		}
		.links {
			gap: 12px;
		}
		.link {
			padding: 8px 6px;
			margin: -8px -6px;
		}
	}

	@media (max-width: 480px) {
		.brand {
			display: none;
		}
		.links {
			margin-left: auto;
		}
	}
</style>
