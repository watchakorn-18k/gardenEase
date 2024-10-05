<script lang="ts">
	import { checkLoginStatus } from '$lib/services/appwrite_service';
	import { onMount } from 'svelte';
	import type { Plants } from '$lib/entities/plants';
	checkLoginStatus();

	let plants: Plants[] = [
		{
			plant_id: '1',
			name: 'Tomato',
			description: 'ชอบดินร่วนซุย แดดจัด รดน้ำให้ชุ่มแต่ไม่แฉะ',
			grow_time: 75,
			water_needed: 1,
			sunlight: '6-8 ชั่วโมงต่อวัน',
			soil_type: 'ดินร่วนซุย',
			image_url:
				'https://cloud.appwrite.io/v1/storage/buckets/670118fe0010e6552abd/files/670119af003454dca9c7/view?project=67006765000ebf946517&mode=admin'
		},
		{
			plant_id: '2',
			name: 'Cucumber',
			description: 'ชอบดินที่มีความชุ่มชื้น อากาศร้อน สามารถปลูกในแปลงหรือกระถาง',
			grow_time: 50,
			water_needed: 1,
			sunlight: '6-8 ชั่วโมงต่อวัน',
			soil_type: 'ดินร่วนซุย',
			image_url:
				'https://cloud.appwrite.io/v1/storage/buckets/670118fe0010e6552abd/files/6701243200234f06290f/view?project=67006765000ebf946517&project=67006765000ebf946517&mode=admin'
		},
		{
			plant_id: '3',
			name: 'Chili',
			description: 'ต้องการแสงแดดเต็มที่ ดินร่วนซุย มีการระบายน้ำดี',
			grow_time: 90,
			water_needed: 1,
			sunlight: '6-8 ชั่วโมงต่อวัน',
			soil_type: 'ดินร่วน',
			image_url:
				'https://cloud.appwrite.io/v1/storage/buckets/670118fe0010e6552abd/files/67012472000f6e59d63f/view?project=67006765000ebf946517&project=67006765000ebf946517&mode=admin'
		},
		{
			plant_id: '4',
			name: 'Basil',
			description: 'สามารถปลูกในดินร่วนซุย ต้องการแสงแดดและการรดน้ำสม่ำเสมอ',
			grow_time: 30,
			water_needed: 1,
			sunlight: '6-8 ชั่วโมงต่อวัน',
			soil_type: 'ดินร่วนซุย',
			image_url:
				'https://cloud.appwrite.io/v1/storage/buckets/670118fe0010e6552abd/files/670124d7001eb486298d/view?project=67006765000ebf946517&project=67006765000ebf946517&mode=admin'
		},
		{
			plant_id: '5',
			name: 'Corn',
			description: 'ชอบดินที่มีความอุดมสมบูรณ์ ต้องการน้ำและแสงแดดเต็มที่',
			grow_time: 90,
			water_needed: 1,
			sunlight: '6-8 ชั่วโมงต่อวัน',
			soil_type: 'ดินร่วน',
			image_url:
				'https://cloud.appwrite.io/v1/storage/buckets/670118fe0010e6552abd/files/670125490013eecc24c1/view?project=67006765000ebf946517&project=67006765000ebf946517&mode=admin'
		}
	];
</script>

<div class="flex flex-col items-center justify-center m-10 gap-4">
	<h1 class="text-3xl font-bold text-center">Shop</h1>

	<div class="flex flex-wrap gap-5 mx-6 justify-center">
		{#each plants as garden}
			<div class="card bg-accent w-96 shadow-xl">
				<figure class="h-60">
					<img src={garden.image_url} alt={garden.name} />
				</figure>
				<div class="card-body">
					<h2 class="text-base-100">{garden.name}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn bg-warning text-base-100">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
