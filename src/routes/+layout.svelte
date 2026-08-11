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
	<title>Ilhaam Ghiffari — Platform Engineer & Water Resources Analyst</title>
	<meta
		name="og:title"
		content="Ilhaam Ghiffari — Platform Engineer & Water Resources Analyst"
	/>
	<meta
		name="og:description"
		content="Cloud infrastructure, IaC and CI/CD on one side — hydrological modeling (F.J. Mock, debit andalan) on the other."
	/>
</svelte:head>

<Cursor />
<Nav />
<main>
	<slot />
</main>
<div class="grain" aria-hidden="true"></div>
