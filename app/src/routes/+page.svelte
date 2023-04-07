<h1>Dashboard</h1>

<div class=models_header>Models:</div>

{#if models.length === 0}
    <p>Loading...</p>
{:else}
    {#each models as model}
        <div>
            <h2>{model.name}</h2>
            <p>{model.description}</p>
        </div>
    {/each}
{/if}


<style>
h1 {
    color: red;
    text-align: center;
}
.models_header {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    const base_api = 'http://localhost:3000/';

    type Model = {
        name: string;
        description: string;
    };

    let models: Model[] = [];
    onMount(() => {
        // fetch data from server
        fetch(base_api + 'models')
            .then(response => response.json())
            .then(data => {
                models = data.models;
            });
    });
</script>