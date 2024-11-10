<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<title>GardenEase</title>
</svelte:head>

<Navbar />
<slot />
<Footer/>