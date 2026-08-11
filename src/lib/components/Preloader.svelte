<script lang="ts">
	import { onMount } from 'svelte';
	import { initPreloader } from '$lib/motion';

	export let onready: () => void = () => {};

	onMount(() => {
		initPreloader(onready);
	});
</script>
