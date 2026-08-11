<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { cleanupMotion, initMotion, revealAll } from '$lib/motion';

	onMount(() => {
		initMotion();
		revealAll();
		return cleanupMotion;
	});
</script>

<svelte:head>
	<title>Ilhaam Ghiffari — Platform Engineer</title>
	<meta name="og:title" content="Ilhaam Ghiffari — Platform Engineer" />
	<meta
		name="og:description"
		content="Cloud infrastructure, IaC, Kubernetes and CI/CD — deployed via GitHub Actions to GitHub Pages."
	/>
</svelte:head>

<Cursor />
<Nav />
<main>
	<slot />
</main>
<div class="grain" aria-hidden="true"></div>
