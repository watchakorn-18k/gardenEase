<script>

	import { IconX } from "@tabler/icons-svelte";
    export let textError = '';
</script>

<div role="alert" style="display: {textError ? 'flex' : 'none'}" class="alert alert-error flex items-center justify-center text-sm">
    <IconX />
    <span>{textError}</span>
</div>