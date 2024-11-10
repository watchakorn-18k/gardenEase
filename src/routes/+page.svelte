<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const handleToLogin = () => {
		goto(base + '/login');
	};
</script>

<div class="hero min-h-screen" style="background-image: url('assets/image/mocks/garden_1.jpg');">
	<div class="hero-overlay bg-opacity-60"></div>
	<div
		class="hero-content text-neutral-content text-center"
		style="backdrop-filter: blur(5px);border-radius: 10px"
	>
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">GardenEase</h1>
			<p class="mb-5">
				Grow your own vegetable garden with ease. GardenEase helps you plan, manage, and cultivate
				your garden with expert tips, personalized guidance, and simple tools to make gardening
				enjoyable for everyone.
			</p>
			<button class="btn btn-primary" on:click={handleToLogin}>Start Your Garden</button>
		</div>
	</div>
</div>
