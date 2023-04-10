<div class="shadow-md bg-gray-200 rounded-md py-1 Navbar">
    <div class="flex mb-3 m-1">
        <!-- on click redirecto to root -->
    <img src="https://avatars.githubusercontent.com/u/128986668?s=88&v=4"
        class="h-12 w-12 mr-2 ml-3"
        alt="Project logo"
        on:mousedown={() => window.location.href='/'}>
    {#each Tabs as tab}
        <button class="mx-4 text-gray-500 hover:text-blue-700 focus:text-gray-800 font-medium text-3xl px-2 focus:outline-none"
        class:active="{activeTab === tab}"
        on:click={() => window.location.href = '/' + tab.toLowerCase()}>{tab}</button>
    {/each}
    <img src="https://avatars.githubusercontent.com/u/11145684?s=200&v=4"
        class="h-12 w-12 ml-auto" alt="Organization logo"
        on:mousedown={() => window.location.href="https://github.com/Kolo-Naukowe-Data-Science-PW"}>
    <img src="https://avatars.githubusercontent.com/u/77837063?v=4"
        class="h-12 w-12 mx-3" alt="Profile logo"
        on:mousedown={() => window.location.href = "/profile"}>
    </div>
</div>


<script context="module" lang="ts">
    // let activetab be one of the following: dashboard, testing, model_metrics, models, datasets
    import type { Tab } from "../types"
    import { Tabs } from "../types"
    export let activeTab: Tab = "Dashboard";

    const setActiveTab = (tab: Tab) => {
        // TODO: go to the correct page
    };
</script>
