<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
	import Background from '../../components/Background.svelte';
	import Footer from '../../components/Footer.svelte';
	import Head from '../../components/Head.svelte';
	import Table from '../../components/Table.svelte';
	import FileUpload from '../../components/FileUpload.svelte';
</script>

<Head />
<Navbar/>
<div class="static">
	<div class="static top-0 left-0 w-full h-full">
		<Table/>
	</div>
	<FileUpload/>
</div>
<Background position="relative" />
<Footer />
