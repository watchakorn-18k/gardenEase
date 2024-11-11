<script lang="ts">
	import { base } from '$app/paths';
	import { checkLoginStatus, logout } from '$lib/services/appwrite_service';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { statusLogon } from '$lib/store_state';
	import { getUser } from '$lib/repositories/users';
	import type { Users } from '$lib/entities/users';

	let statusLogin = false;
	let userData: Users;

	// ฟังก์ชันอัพเดตสถานะการล็อกอิน
	const updateLoginStatus = async () => {
		const response: any = await checkLoginStatus();
		statusLogon.set(response.status);
		if (response.status) {
			const user: any = await getUser(response.data.$id);
			userData = user;
			// console.log('userData', userData);
		}
	};

	// ตั้งค่า onMount เพื่อตรวจสอบสถานะการล็อกอินและสมัครรับการเปลี่ยนแปลงของ store
	onMount(() => {
		updateLoginStatus();
		const unsubscribe = statusLogon.subscribe((value) => {
			statusLogin = value;
		});
		return unsubscribe;
	});

	// ฟังก์ชันล็อกเอาท์
	const signOut = async () => {
		await logout();
		statusLogon.set(false);
		goto(base + '/login');
	};
</script>

<!-- ส่วนการแสดง UI -->
<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
				<li><a href="{base}/">Home</a></li>
				{#if statusLogin}
					<li><a href="{base}/my-garden">My Garden</a></li>
					<li><a href="{base}/my-garden">Comunity</a></li>
					<li><a href="{base}/my-garden">Shop</a></li>
					<li><a href="{base}/logout" on:click|preventDefault={signOut}>Logout</a></li>
				{:else}
					<li><a href="{base}/login">Login</a></li>
					<li><a href="{base}/register">Register</a></li>
				{/if}
			</ul>
		</div>
		<a href="{base}/" class="btn btn-ghost text-xl">GardenEase</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#if statusLogin}
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/my-garden">My Garden</a></li>
				<li><a href="{base}/my-garden">Comunity</a></li>
				<li><a href="{base}/shop">Shop</a></li>
			{/if}
		</ul>
	</div>
	<div class="navbar-end">
		{#if statusLogin}
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src={userData?.image_url ||
								'https://cloud.appwrite.io/v1/storage/buckets/6700a7b800185d1de4a9/files/6700a7ce0028dabae0c7/view?project=67006765000ebf946517'}
						/>
					</div>
				</div>
				<ul
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
				>
					{#if statusLogin}
						<li><a href="{base}/my-garden">My Garden</a></li>
						<li><a href="{base}/logout" on:click|preventDefault={signOut}>Logout</a></li>
					{:else}
						<li><a href="{base}/login">Login</a></li>
						<li><a href="{base}/register">Register</a></li>
					{/if}
				</ul>
			</div>
		{:else}
			<button class="btn" disabled={statusLogin} on:click={() => goto(base + '/login')}
				>Get Started</button
			>
		{/if}
	</div>
</div>
