<script lang="ts">
	import ErrorText from '$lib/components/error_text.svelte';
	import { forgotPassword } from '$lib/services/appwrite_service';
	import { IconMail } from '@tabler/icons-svelte';
	let email = '';
	let textError = '';
	const handleForgetPassword = () => {
		if (email === '') {
			textError = 'Email is required';
			return;
		} else {
			textError = '';
		}
		forgotPassword(email);
		const modal = document.getElementById('modal_info') as HTMLDialogElement | null;
		if (modal) {
			modal.showModal();
		}
	};
</script>

<dialog id="modal_info" class="modal">
	<div class="modal-box">
		<p class="py-4 text-center">Please check your email to reset your password</p>
		<div class="modal-action">
			<form method="dialog" class="w-full">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn w-full">Close</button>
			</form>
		</div>
	</div>
</dialog>

<h1 class="m-10 text-2xl text-center">Forgot Password</h1>
<div class="w-full xl:flex flex-col items-center justify-center">
	<form on:submit|preventDefault={handleForgetPassword} class="flex flex-col gap-2 m-10 xl:w-1/4">
		<label for="email" class="input input-bordered flex items-center gap-2">
			<input type="email" class="grow" placeholder="Email" bind:value={email} />
			<IconMail />
		</label>
		<ErrorText {textError} />
		<button type="submit" class="btn btn-primary w-full">Reset Password</button>
	</form>
</div>
