<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ErrorText from '$lib/components/error_text.svelte';
	import { logout, resetPassword } from '$lib/services/appwrite_service';
	import { IconLock, IconLockFilled } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment'; // ใช้ตรวจสอบว่าโค้ดทำงานใน client-side

	let password = '';
	let passwordConfirm = '';
	let textError = '';

	let userId: string | null = null;
	let secret: string | null = null;

	if (browser) {
		const url = new URL(window.location.href);
		userId = url.searchParams.get('userId');
		secret = url.searchParams.get('secret');
	}

	onMount(() => {
		logout();
	});
	const handeleResetPassword = () => {
		if (password === '') {
			textError = 'Password is required';
			return;
		} else if (passwordConfirm === '') {
			textError = 'Confirm Password is required';
			return;
		}
		if (password !== passwordConfirm) {
			textError = 'Password does not match';
			return;
		}
		if (userId === null || secret === null) {
			textError = 'Invalid link';
			return;
		}
		if (!resetPassword(userId, secret, password)) {
			textError = 'Reset password failed';
			return;
		}
		const modal = document.getElementById('modal_info') as HTMLDialogElement | null;
		if (modal) {
			modal.showModal();
		}
	};

	const handleToLogin = () => {
		goto(base + '/login');
	};
</script>

<dialog id="modal_info" class="modal">
	<div class="modal-box">
		<p class="py-4 text-center">Chnage password successfully click close button to login</p>
		<div class="modal-action">
			<form method="dialog" class="w-full">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn w-full" on:click={handleToLogin}>Close</button>
			</form>
		</div>
	</div>
</dialog>

<h1 class="m-10 text-2xl text-center">Change Password</h1>
<div class="w-full xl:flex flex-col items-center justify-center">
	<form
		on:submit={handeleResetPassword}
		class="flex flex-col items-center justify-center gap-2 m-10 xl:w-2/4"
	>
		<label class="input input-bordered flex items-center gap-2 w-full">
			<IconLock />
			<input type="password" bind:value={password} class="grow" placeholder="Password" />
		</label>
		<label class="input input-bordered flex items-center gap-2 w-full">
			<IconLockFilled />
			<input
				type="password"
				bind:value={passwordConfirm}
				class="grow"
				placeholder="Confirm Password"
			/>
		</label>
		<ErrorText {textError} />
		<button type="submit" class="btn btn-primary w-full">Change Password</button>
	</form>
</div>
