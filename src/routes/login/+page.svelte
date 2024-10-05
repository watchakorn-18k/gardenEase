<script lang="ts">
	import { login } from '$lib/services/appwrite_service';
	import { goto } from '$app/navigation';
	import { checkLoginStatus } from '$lib/services/appwrite_service';
	import { onMount } from 'svelte';
	import { statusLogon } from '$lib/store_state';

	//component
	import { IconMail, IconLock } from '@tabler/icons-svelte';

	let emailInput, passwordInput, loginBtn;

	onMount(async () => {
		emailInput.disabled = true;
		passwordInput.disabled = true;
		loginBtn.disabled = true;
		const response = await checkLoginStatus();
		if (response.status) {
			goto('/my-garden');
		} else {
			emailInput.disabled = false;
			passwordInput.disabled = false;
			loginBtn.disabled = false;
		}
	});

	let email = '';
	let password = '';

	async function handleLogin() {
		const response = await login(email, password);
		if (response.current) {
			statusLogon.set(true);
			goto('/my-garden');
		} else {
			alert('กรุณาตรวจสอบอีเมลและรหัสผ่านอีกครั้ง');
		}
	}
</script>

<div class="flex flex-col items-center justify-center m-10">
	<div class="flex flex-col lg:w-1/4 h-full justify-center gap-4">
		<h1 class="text-3xl font-bold text-center">Login</h1>
		<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-2">
			<label for="email" class="input input-bordered flex items-center gap-2">
				<input
					type="email"
					bind:value={email}
					class="grow w-full"
					placeholder="Email"
					bind:this={emailInput}
					disabled
				/>
				<IconMail />
			</label>
			<label for="password" class="input input-bordered flex items-center gap-2">
				<input
					type="password"
					bind:value={password}
					class="grow"
					placeholder="Password"
					bind:this={passwordInput}
					disabled
				/>
				<IconLock />
			</label>
			<button type="submit" class="btn btn-primary" bind:this={loginBtn} disabled>Login</button>
		</form>
	</div>
</div>

