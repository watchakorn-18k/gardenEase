<script lang="ts">
	import { checkLoginStatus } from '$lib/services/appwrite_service';
	import { onMount } from 'svelte';
	import type { UserPlant } from '$lib/entities/user_plant';
	import { getUserPlants } from '$lib/repositories/user_plant';
	import { getPlant } from '$lib/repositories/plants';
	let userPlantsData: any[] = [];
	let userPlants: UserPlant[] = [];
	onMount(async () => {
		const response = await checkLoginStatus();
		if (response.status) {
			const userplants = await getUserPlants(response.data.$id);
			userPlants = userplants;
			// ใช้ Promise.all เพื่อให้รอผลลัพธ์ทั้งหมดจากการดึงข้อมูล plant
			const plantsWithDetails = await Promise.all(
				userPlants.map(async (item) => {
					const plant = await getPlant(item.plant_id);
					// รวมข้อมูลของ plant กับ userPlant
					return {
						...item, // ข้อมูลจาก userPlant
						plant // ข้อมูล plant ที่ดึงมา
					};
				})
			);
			userPlantsData = plantsWithDetails;
		}
	});
	const now = new Date();
	const day = String(now.getDate()).padStart(2, '0');
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const year = now.getFullYear();
	const formattedDate = `${day}-${month}-${year}`;

	const formatDate = (timestamp: string) => {
		const date = new Date(timestamp);
		const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');

		return `${day}/${month}/${year} ${hours}:${minutes}`;
	};
</script>

<div class="flex flex-col m-6 gap-4">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-bold">My Garden</h1>
	</div>
	<div class="flex flex-wrap gap-4">
		{#each userPlantsData as item}
			<a class="flex flex-col" href="/">
				<div class="card bg-base-100 w-full md:w-64 h-96 shadow-xl">
					<figure>
						<img src={item.plant.image_url} alt={item.plant.name} />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{item.plant.name}</h2>
						<div class="flex justify-between items-center">
							<p class="text-sm">Water status</p>
							{#if item.water_status}
								<div class="badge badge-primary">already</div>
							{:else}
								<div class="badge badge-primary badge-outline">not yet</div>
							{/if}
						</div>
						<div class="flex justify-between items-center">
							<p class="text-sm">Sunlight status</p>
							{#if item.sunlight_status}
								<div class="badge badge-primary">already</div>
							{:else}
								<div class="badge badge-primary badge-outline">not yet</div>
							{/if}
						</div>
						<div class="flex justify-between items-center">
							<p class="text-sm">Fertilizer status</p>
							{#if item.fertilizer_status}
								<div class="badge badge-primary">already</div>
							{:else}
								<div class="badge badge-primary badge-outline">not yet</div>
							{/if}
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm">Last Date</span>
							<span class="text-sm">{formatDate(item.lasted_at)}</span>
						</div>
						<div class="mt-4 flex flex-col gap-2">
							<div class="flex justify-between w-full">
								<div class="text-sm w-auto">Progress</div>
								<div class="text-sm">{item.progress}%</div>
							</div>
							<progress class="progress w-full" value={item.progress} max="100"></progress>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
