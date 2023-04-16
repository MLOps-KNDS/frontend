
<script lang="ts">
	// let activetab be one of the following: dashboard, testing, model_metrics, models, datasets
	import type { Tab } from '../types';
	import { Tabs } from '../types';
	export let activeTab: Tab = 'Dashboard';
	let largeScreen = true;
	$: largeScreen = innerWidth > 400;
	$: innerWidth = 500;
</script>

<svelte:window bind:innerWidth/>
<div class="shadow-md bg-gray-200 rounded-md py-1">
	<div class="flex mb-3 m-1">
		<!-- on click redirecto to root -->
		<img
			src="https://avatars.githubusercontent.com/u/128986668?s=88&v=4"
			style="height: min(3rem,15vw);width: min(3rem,15vw)"
			class="h-12 w-12 mr-2 ml-3"
			alt="Project logo"
			on:mousedown={() => (window.location.href = '/')}
		/>
		{#each Tabs as tab}
			<button
				class="text-gray-500 hover:text-blue-700 focus:text-gray-800 font-medium px-2 focus:outline-none"
				class:active={activeTab === tab}
				style="font-size: min(1.875rem,4vw);
					line-height: 1.875rem;
					margin-left: min(0.75rem,1vw);
					margin-right: min(0.75rem,1vw);
					padding: 0"
				on:click={() => (window.location.href = '/' + tab.toLowerCase())}>{tab}
			</button>
		{/each}
		<!-- if screen size is larger than threshhold -->
		{#if largeScreen}
		<img
			src="https://avatars.githubusercontent.com/u/11145684?s=200&v=4"
			class="h-12 w-12 ml-auto mr-3 text-xl"
			alt="Organization logo"
			on:mousedown={() =>
				(window.location.href = 'https://github.com/Kolo-Naukowe-Data-Science-PW')}
		/>
		{/if}
		<img
			src="https://avatars.githubusercontent.com/u/77837063?v=4"
			class="{largeScreen ? 'mr-3' : 'mx-auto'}"
			style="height: min(3rem,15vw);width: min(3rem,15vw)"
			alt="Profile logo"
			on:mousedown={() => (window.location.href = '/profile')}
		/>
	</div>
</div>