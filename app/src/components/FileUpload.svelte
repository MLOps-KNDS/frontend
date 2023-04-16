<script lang="ts">
    import { Dropzone, Fileupload } from 'flowbite-svelte'

    let file: FileList | undefined = undefined;
    let files: File[] = [];
    const maxSize = 800000;

    const checkFile = (file: File) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
        if (validTypes.indexOf(file.type) === -1) {
            alert('Invalid file type');
            return false;
        }
        // check size
        if (file.size > maxSize) {
            alert('File is too large');
            return false;
        }
        return true;
    }
    
    $: {
        file = file;
        if (file !== undefined && checkFile(file[0])) {
            files[0] = file[0];
        }
    }

</script>
<div class="w-1/4 center">
    <Fileupload bind:files={file} inputClass="border !p-0 dark:text-gray-400"/>
</div>
{#if files}
    {#each files as f}
        <p>{f.name}</p>
        <img src={URL.createObjectURL(f)} alt={f.name} />
    {/each}
{/if}

<style>
</style>