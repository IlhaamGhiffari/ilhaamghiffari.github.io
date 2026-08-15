<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Background from '$lib/components/Background.svelte';
	import { cleanupMotion, initMotion, revealAll } from '$lib/motion';

	function handleReady() {
		revealAll();
	}

	onMount(() => {
		initMotion();
		return cleanupMotion;
	});
</script>

<svelte:head>
	<title>Ilhaam Ghiffari — Platform Engineer</title>
	<meta property="og:title" content="Ilhaam Ghiffari — Platform Engineer" />
	<meta
		property="og:description"
		content="Cloud infrastructure, IaC, Kubernetes and CI/CD."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ilhaamghiffari.codes/" />
	<meta property="og:image" content="https://ilhaamghiffari.codes/preview/hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ilhaam Ghiffari — Platform Engineer" />
	<meta
		name="twitter:description"
		content="Cloud infrastructure, IaC, Kubernetes and CI/CD."
	/>
	<meta name="twitter:image" content="https://ilhaamghiffari.codes/preview/hero.png" />
	<link rel="canonical" href="https://ilhaamghiffari.codes/" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Muhaammad Ilhaam Ghiffari",
			"url": "https://ilhaamghiffari.codes",
			"jobTitle": "Platform Engineer",
			"email": "mailto:ghiffariilhaam@gmail.com",
			"sameAs": [
				"https://github.com/IlhaamGhiffari",
				"https://www.linkedin.com/in/ilhaam-ghiffari-3b3b27217"
			]
		}
	</script>
</svelte:head>

<Background />
<Preloader onready={handleReady} />
<Nav />
<main>
	<slot />
</main>
<div class="grain" aria-hidden="true"></div>
<Cursor />
