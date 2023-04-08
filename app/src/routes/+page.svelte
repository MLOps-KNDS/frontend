<h1>Dashboard</h1>

<div class="models_header">Models:</div>

{#if model_error !== ''}
    <p class="error">{model_error}</p>
{:else if models.length === 0}
    <p class="loading">Loading models...</p>
{:else}
    <div class="models">
    {#each models as model}
        <div class="model">
            <h2>{model.name}</h2>
            {#if model.status == "online"}
                <p class="online status">Online</p>
            {:else}
                <p class="offline status">Offline</p>
            {/if}
            <p class="model_info">Created by: {model.created_by.name} {model.created_by.surname}</p>
            <p class="model_info">Created at: {model.created_at}</p>
            <p class="model_info">Updated by: {model.updated_by.name} {model.updated_by.surname}</p>
            <p class="model_info">Updated at: {model.updated_at}</p>
            <p class="model_info">Description: {model.description}</p>
        </div>
    {/each}
    </div>
{/if}


<style>
h1 {
    color: red;
    text-align: center;
}
.models {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
.model_info {
    text-align: left;
}
.model {
    margin: 0.5em;
    padding: 0.5em;
    width: 20em;
    border: 1px solid black;
    border-radius: 2px;
    background-color:azure;
}
.online {
    color: green;
}
.offline {
    color: red;
}
.status {
    font-size: 1.5em;
}
.loading {
    text-align: center;
    font-size: 1.5em;
    color: purple;
}
.models_header {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}
.error {
    color: red;
    font-size: 1.5em;
}
:global(body) {
    background-color: #e6f2ff;
}
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    const base_api = 'http://localhost:3000/';
    type User = {
        name: string;
        surname: string;
        email: string;
    };
    type Model = {
        name: string;
        description: string;
        status: string;
        created_at: string;
        created_by: User;
        updated_at: string;
        updated_by: User;
    };
    let model_error = '';
    let models: Model[] = [];
    onMount(() => {
        // fetch data from server
        // if there is an error, show an error message
        fetch(base_api + 'models')
            .then(response => response.json())
            .then(data => {
                models = data.models;
            })
            .catch(err => {
                const not_found_msg = 'API not found';
                const unexpected_msg = 'Unexpected error';
                model_error = 'Error: ';
                switch(err.status) {
                    case 404:
                        model_error += not_found_msg;
                        break;
                    case undefined:
                        model_error += not_found_msg;
                        break;
                    default:
                        model_error = unexpected_msg;
                }
            });
    });
</script>