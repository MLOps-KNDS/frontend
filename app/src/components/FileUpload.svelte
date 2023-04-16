<script lang="ts">
    import { Alert, Fileupload } from 'flowbite-svelte'

    let file: FileList | undefined = undefined; // the file that is uploaded
    let files: File[] = []; // the file that is saved to process
    let error: string = '';
    const maxSize = 800000;

    const checkFile = (file: File) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
        if (validTypes.indexOf(file.type) === -1) {
            error = 'Invalid file type';
            return false;
        }
        // check size
        if (file.size > maxSize) {
            error = 'File is too large';
            return false;
        }
        return true;
    }
    
    $: {
        if (file !== undefined && checkFile(file[0])) {
            error = '';
            files[0] = file[0];
        }
        else {
            files = [];
        }
    }

</script>

<!-- if an error has been set -->
{#if error}
    <Alert color="red">
        <span class="font-medium">Error! {error}</span> {error}
    </Alert>
{/if}

<!-- if there is a file sucessfully saved -->
{#if files.length > 0}
    <Alert color="green">
        <span class="font-medium">Success!</span> The file has been sucessfully submitted.
    </Alert>
{/if}

<div class="w-1/4 center">
    <Fileupload bind:files={file} inputClass="border !p-0 dark:text-gray-400"/>
</div>

{#if files}
    {#each files as f}
        <img src={URL.createObjectURL(f)} alt={f.name} />
    {/each}
{/if}

<style>
</style>