<div class="shadow-md bg-gray-200 rounded-md py-1">
    <div class="flex mb-3 m-1">
        <!-- on click redirecto to root -->
      <img src="https://avatars.githubusercontent.com/u/128986668?s=88&v=4" class="h-10 w-10 mr-2 ml-3" alt="Project logo" on:mousedown={() => window.location.href = '/'}>
      <button class="mx-4 text-gray-500 hover:text-blue-700 focus:text-gray-700 font-medium text-3xl px-2 focus:outline-none" class:active="{activeTab === 1}">Dashboard</button>
      <button class="mx-4 text-gray-500 hover:text-blue-700 focus:text-gray-700 font-medium text-3xl focus:outline-none" class:active="{activeTab === 2}">Testing</button>
      <button class="mx-4 text-gray-500 hover:text-blue-700 focus:text-gray-700 font-medium text-3xl focus:outline-none" class:active="{activeTab === 3}">Model metrics</button>
      <button class="mx-4 text-gray-500 hover:text-blue-700 focus:text-gray-700 font-medium text-3xl focus:outline-none" class:active="{activeTab === 3}">Models</button>
      <img src="https://avatars.githubusercontent.com/u/11145684?s=200&v=4" class="h-10 w-10 ml-auto" alt="Organization logo" on:mousedown={() => window.location.href = "https://github.com/Kolo-Naukowe-Data-Science-PW"}>
      <img src="profile-logo.png" class="h-10 w-10 mx-3" alt="Profile logo">
    </div>

    {#if activeTab === 1}
      <div class="mt-4">Content for Tab 1</div>
    {:else if activeTab === 2}
      <div class="mt-4">Content for Tab 2</div>
    {:else if activeTab === 3}
      <div class="mt-4">Content for Tab 3</div>
    {/if}
</div>
  
  
  

<h1 class="text-3xl text-red-600 my-3 text-center">Dashboard</h1>

<div class="text-center text-3xl text">Models:</div>

{#if model_error !== ''}
    <p class="error">{model_error}</p>
{:else if models.length === 0}
    <p class="loading">Loading models...</p>
{:else}
    <div class="flex flex-wrap justify-center">
    {#each models as model}
        <div class="bg-blue-5 border-gray-500 border-2 m-4 p-3 text-center">
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
:global(body) {
    background-color: #FEE2E2;
}
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    // Look of the API_URL environment variable
    // If it is not set, use the default value
    const base_api: string = import.meta.env.API_URL || 'http://localhost:3000/';
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

    let activeTab = 0;
    const setActiveTab = (tab: number) => {
        // TODO: go to the correct page
    };

    onMount(() => {
        // fetch data from server
        // if there is an error, show an error message
        fetch(base_api + 'models')
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