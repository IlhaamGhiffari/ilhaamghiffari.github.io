<script lang="ts">
	import { onMount } from 'svelte';
	import { initPreloader } from '$lib/motion';

	let { onready = () => {} }: { onready?: () => void } = $props();

	onMount(() => {
		initPreloader(onready);
	});
</script>
