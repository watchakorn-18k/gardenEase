<script lang="ts">
	import ErrorText from "$lib/components/error_text.svelte";
import { IconMail } from "@tabler/icons-svelte";
    let email = '';
    let textError = '';
   const handleForgetPassword = () => {
        if(email === '') {
            textError = 'Email is required';
            return;
        } else {
            textError = '';
        }
        console.log(email);

       
   }
</script>

<h1 class="m-10 text-2xl text-center">Forgot Password</h1>
<form on:submit|preventDefault={handleForgetPassword} class="flex flex-col gap-2 m-10 xl:w-1/4">
    <label for="email" class="input input-bordered flex items-center gap-2">
        <input type="email" class="grow" placeholder="Email" bind:value={email}/>
        <IconMail />
    </label>
    <ErrorText textError={textError} />
    <button type="submit" class="btn btn-primary w-full">Reset Password</button>
</form>