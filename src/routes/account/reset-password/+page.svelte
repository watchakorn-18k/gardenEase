<script lang="ts">
	import ErrorText from "$lib/components/error_text.svelte";
import { IconLock, IconLockFilled } from "@tabler/icons-svelte";

    let password = '';
    let passwordConfirm = '';
    let textError = '';
    const handeleResetPassword = () => {
        if (password === '') {
            textError = 'Password is required';
            return;
        } else if (passwordConfirm === '') {
            textError = 'Confirm Password is required';
            return;
        }
        if(password !== passwordConfirm) {
            textError = 'Password does not match';
            return;
        }
    }

</script>



<h1 class="m-10 text-2xl text-center">Reset Password</h1>
<form on:submit={handeleResetPassword} class="flex flex-col gap-2 m-10 xl:w-1/4">
    <label class="input input-bordered flex items-center gap-2">
		<IconLock/>
		<input type="password" bind:value={password} class="grow" placeholder="Password"/>
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<IconLockFilled/>
		<input type="password" bind:value={passwordConfirm} class="grow" placeholder="Confirm Password"/>
	</label>
    <ErrorText textError={textError} />
    <button type="submit" class="btn btn-primary w-full">Confirm Reset Password</button>
</form>