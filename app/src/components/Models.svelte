<div>
    {#if model_error !== ''}
        <p class="error">{model_error}</p>
    {:else if models.length === 0}
        <p class="loading text-center">Loading models...</p>
    {:else}
        <div class="flex flex-wrap justify-center">
        {#each models as model}
            <div class="bg-blue-5 border-gray-500 border-2 m-4 p-3 text-center bg-slate-100">
                <h2 class="font-semibold text-xl">{model.name}</h2>
                {#if model.status == "online"}
                    <p class="online status">Online</p>
                {:else}
                    <p class="offline status">Offline</p>
                {/if}
                <p class="text-left">Created by: {model.created_by.name} {model.created_by.surname}</p>
                <p class="text-left">Created at: {model.created_at}</p>
                <p class="text-left">Updated by: {model.updated_by.name} {model.updated_by.surname}</p>
                <p class="text-left">Updated at: {model.updated_at}</p>
                <p class="text-left">Description: {model.description}</p>
            </div>
        {/each}
        </div>
    {/if}
</div>

<style lang="postcss">
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
    .error {
        color: red;
        font-size: 1.5em;
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { api_url } from '../config';
    import type { Model } from '../types';
    let model_error = '';
    let models: Model[] = [];
    onMount(() => {
        console.log(api_url);
        // fetch data from server
        // if there is an error, show an error message
        fetch(api_url + 'models')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                models = data.models;
            })
            .catch(err => {
                console.log(err);
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