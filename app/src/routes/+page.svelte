<Navbar/>
<div class="relative">
    <div class="absolute top-0 left-0 w-full h-full">
            <h1 class="text-3xl text-red-600 my-3 text-center">Dashboard</h1>
            <div class="text-4xl text-yellow-600 my-3 text-center">Your models:</div>
        <Models position="absolute"/>
    </div>
</div>
<Background position="relative"/>

<style>
    :global(body) {
        background-color: #FEE2E2;
    }
</style>

<script lang="ts">
    import Navbar from '../Navbar.svelte';
    import Models from '../Models.svelte';
    import Background from '../Background.svelte';
</script>
