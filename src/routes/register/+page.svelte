<script>
	import { createAccount } from '$lib/services/appwrite_service';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let name = '';

	async function handleRegister() {
		const response = await createAccount(email, password, name);
		// @ts-ignore
		if (response.status) {
			goto('/login');
		}
	}
</script>

<h1>Register</h1>

<form on:submit|preventDefault={handleRegister}>
	<label for="email">Email</label>
	<input type="email" bind:value={email} />

	<label for="password">Password</label>
	<input type="password" bind:value={password} />

	<label for="name">Name</label>
	<input type="text" bind:value={name} />

	<button type="submit">Register</button>
</form>
