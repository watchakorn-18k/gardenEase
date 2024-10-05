<script lang="ts">
	import { getPlants } from '$lib/repositories/plants';

	import { onMount } from 'svelte';

	let plants = [];

	onMount(async () => {
		const response = await getPlants();
		plants = response;
	});
</script>

<h1>GardenEase</h1>

<ul>
	{#each plants as plant}
		<li>{plant.name}</li>
	{/each}
</ul>
