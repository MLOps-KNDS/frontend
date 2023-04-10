<Head/>
<Navbar/>
<div class="relative">
    <div class="absolute top-0 left-0 w-full h-full">
            <h1 class="text-3xl text-red-600 my-3 text-center">Dashboard</h1>
            <div class="text-4xl text-yellow-600 my-3 text-center">Your models:</div>
        <Models/>
    </div>
</div>
<Background position="static"/>
<Footer/>

<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
    import Models from '../components/Models.svelte';
    import Background from '../components/Background.svelte';
    import Footer from '../components/Footer.svelte';
    import Head from '../components/Head.svelte';
</script>
