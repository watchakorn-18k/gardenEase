<script>
	import {base} from '$app/paths';
	import { createAccount } from '$lib/services/appwrite_service';
	import { goto } from '$app/navigation';
	import { IconError404, IconLock, IconLockFilled, IconMail, IconUserCircle, IconX } from '@tabler/icons-svelte';
	import ErrorText from '$lib/components/error_text.svelte';
	let textError = '';
	let email = '';
	let password = '';
	let name = '';
	let passwordConfirm = '';
	
	async function handleRegister() {
		if (password !== passwordConfirm) {
			textError = 'Password does not match';
			return;
		} else if(email === '') {
			textError = 'Email is required';
			return;
		} else if(password === '') {
			textError = 'Password is required';
			return;
		} else {
			textError = '';
		}
		const response = await createAccount(email, password, name);
		// @ts-ignore
		if (response.status) {
			goto('/login');
		}
	}

</script>

<h1 class="text-3xl font-bold text-center m-8">Register</h1>

<form on:submit|preventDefault={handleRegister} class="flex flex-col gap-2 m-10 xl:w-1/4">
	<label class="input input-bordered flex items-center gap-2">
		<IconMail />		
		<input type="email" class="grow" placeholder="Email"  bind:value={email} />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<IconUserCircle/>
		<input type="text" bind:value={name} class="grow" placeholder="Name" />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<IconLock/>
		<input type="password" bind:value={password} class="grow" placeholder="Password"/>
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<IconLockFilled/>
		<input type="password" bind:value={passwordConfirm} class="grow" placeholder="Confirm Password"/>
	</label>
	<ErrorText textError={textError} />
	<button type="submit" class="btn btn-primary w-full">Register</button>
	<p class="text-center text-sm link text-primary m-4" ><a href="{base}/login" rel="noopener noreferrer">you have an account already?</a>
	</p>
</form>
