<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { lang, setLang, t } from '$lib/i18n.svelte';

	const links = [
		{ key: 'nav.work', href: '#work' },
		{ key: 'nav.about', href: '#about' },
		{ key: 'nav.blog', href: '/blog' },
		{ key: 'nav.contact', href: '#contact' },
		{ key: 'nav.resume', href: '/resume.pdf' }
	];

	// Section anchors only exist on the home page. From any other page the
	// link must navigate home first: '#work' on '/', '/#work' elsewhere.
	const isHome = $derived(page.url.pathname === '/');
	const linkHref = (href: string) =>
		href.startsWith('/') || isHome ? href : `/${href}`;

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let menuEl: HTMLElement;
	let burgerEl: HTMLButtonElement;

	const lockScroll = () => {
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
	};

	const unlockScroll = () => {
		document.documentElement.style.overflow = '';
		document.body.style.overflow = '';
	};

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			unlockScroll();
		};
	});

	// Menu lifecycle: scroll lock + focus + Escape. Runs synchronously on
	// state change, so hash navigation (native default action) still scrolls
	// after a menu link click.
	$effect(() => {
		if (menuOpen) {
			lockScroll();
			// Defer past the current flush: focusing during the effect runs
			// while the menu is still inert (inert removal lands in the same
			// flush) and is silently ignored. A macrotask runs after.
			setTimeout(() => {
				menuEl?.querySelector<HTMLElement>('a')?.focus();
			}, 0);
			const onKey = (e: KeyboardEvent) => {
				if (e.key === 'Escape') closeMenu();
			};
			window.addEventListener('keydown', onKey);
			return () => window.removeEventListener('keydown', onKey);
		} else {
			unlockScroll();
		}
	});

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const closeMenu = () => {
		menuOpen = false;
		burgerEl?.focus();
	};

	const onBackdrop = (e: MouseEvent) => {
		if (e.target === e.currentTarget) closeMenu();
	};
</script>

<header class="nav" class:scrolled>
	<a
		class="brand"
		href="/"
		onclick={() => {
			if (menuOpen) closeMenu();
		}}
		data-cursor
	>ilhaamghiffari<span class="accent">.codes</span></a
	>
	<nav class="links" aria-label="Primary">
		{#each links as l}
			<a class="link mono-label" href={linkHref(l.href)} data-cursor>{t(l.key)}</a>
		{/each}
	</nav>
	<div class="right">
		<div class="lang" data-cursor>
			<button
				class="lang-btn"
				class:active={lang.value === 'en'}
				onclick={() => setLang('en')}
				aria-label="EN — English"
			>EN</button
			>
			<span class="sep">/</span>
			<button
				class="lang-btn"
				class:active={lang.value === 'id'}
				onclick={() => setLang('id')}
				aria-label="ID — Bahasa Indonesia"
			>ID</button
			>
		</div>
		<button
			class="burger"
			class:open={menuOpen}
			onclick={toggleMenu}
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			bind:this={burgerEl}
		>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<div
	class="mobile-menu"
	class:open={menuOpen}
	id="mobile-menu"
	aria-hidden={!menuOpen}
	inert={!menuOpen}
	bind:this={menuEl}
	onclick={onBackdrop}
>
	<nav class="mm-links" aria-label="Mobile">
		{#each links as l, i}
			<a class="mm-link" href={linkHref(l.href)} onclick={closeMenu} style={`--i:${i}`}>
				<span class="mm-idx mono-label">0{i + 1}</span>
				<span class="mm-label">{t(l.key)}</span>
			</a>
		{/each}
	</nav>

	<div class="mm-foot mono-label">
		<span>© 2026 Ilhaam Ghiffari</span>
		<a href={linkHref('#top')} onclick={closeMenu}>↑ top</a>
	</div>
</div>

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
		padding: 12px 0;
		margin: -12px 0;
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

	.right {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	.lang {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 10px;
		letter-spacing: 0.14em;
		color: var(--muted);
	}

	.lang-btn {
		font: inherit;
		letter-spacing: inherit;
		color: var(--ink-dim);
		padding: 8px 4px;
		margin: -2px 0;
		opacity: 0.75;
		transition:
			opacity 0.2s ease,
			color 0.2s ease;
	}

	.lang-btn.active {
		color: var(--accent);
		opacity: 1;
	}

	.sep {
		opacity: 0.4;
	}

	/* ---------- hamburger ---------- */
	.burger {
		display: none;
		width: 40px;
		height: 40px;
		padding: 10px;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		margin-right: -10px;
	}

	.burger span {
		display: block;
		width: 100%;
		height: 1.5px;
		background: var(--ink);
		transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.burger.open span:nth-child(1) {
		transform: translateY(3.25px) rotate(45deg);
	}

	.burger.open span:nth-child(2) {
		transform: translateY(-3.25px) rotate(-45deg);
	}

	/* ---------- mobile overlay menu ---------- */
	.mobile-menu {
		position: fixed;
		inset: 0;
		z-index: 90; /* below the header so the burger stays reachable */
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: clamp(32px, 8vh, 64px);
		padding: 96px var(--gutter) 40px;
		background: rgba(10, 10, 11, 0.96);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		/* closed state = transparent + inert (blocks tab/AT). No
		   visibility:hidden — it would make the open-state focus() a no-op
		   until the transition flips. */
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.35s ease;
	}

	.mobile-menu.open {
		opacity: 1;
		pointer-events: auto;
	}

	.mm-links {
		display: flex;
		flex-direction: column;
	}

	.mm-link {
		display: flex;
		align-items: baseline;
		gap: 18px;
		padding: 10px 0;
		margin: -10px 0;
		opacity: 0;
		transform: translateY(28px);
		transition:
			opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
			transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: 0s;
	}

	.mobile-menu.open .mm-link {
		opacity: 1;
		transform: none;
		transition-delay: calc(80ms + var(--i) * 55ms);
	}

	.mm-idx {
		font-size: 10px;
		color: var(--accent);
		opacity: 0.8;
	}

	.mm-label {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: clamp(40px, 13vw, 64px);
		line-height: 1.02;
		letter-spacing: -0.02em;
		color: var(--ink);
		transition: color 0.25s ease;
	}

	@media (hover: hover) {
		.mm-link:hover .mm-label {
			color: var(--accent);
		}
	}

	.mm-foot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 10px;
		color: var(--ink-dim);
		opacity: 0.8;
	}

	.mm-foot a {
		color: var(--muted);
		padding: 8px 0;
	}

	/* ---------- breakpoints ---------- */
	@media (max-width: 640px) {
		.nav {
			padding-top: 14px;
			padding-bottom: 14px;
		}
		.brand {
			font-size: 9px;
			letter-spacing: 0.02em;
		}
		.links {
			display: none;
		}
		.burger {
			display: flex;
		}
		.right {
			gap: 12px;
		}
	}

	/* short screens (landscape phones) — compact menu */
	@media (max-width: 640px) and (max-height: 460px) {
		.mobile-menu {
			justify-content: flex-start;
			padding-top: 76px;
			gap: 12px;
			overflow-y: auto;
		}
		.mm-label {
			font-size: 30px;
		}
		.mm-link {
			padding: 6px 0;
			margin: -6px 0;
		}
	}
</style>
