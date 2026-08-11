<script lang="ts">
	const links = [
		{ label: 'Work', href: '#work' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<header class="nav">
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
		mix-blend-mode: difference;
	}

	.brand {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #fff;
	}

	.accent {
		color: #fff;
		opacity: 0.9;
	}

	.links {
		display: flex;
		gap: clamp(20px, 4vw, 44px);
	}

	.link {
		color: #fff;
		opacity: 0.75;
		transition: opacity 0.25s ease;
	}

	.link:hover {
		opacity: 1;
	}

	.place {
		color: #fff;
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
