<script lang="ts">
	import SearchBcg from '$lib/components/SearchBcg.svelte'
	import Date from '$lib/components/Date.svelte'
	import Results from '$lib/components/Results.svelte'
	import Control from '$lib/components/Control.svelte'

	import { modal, background, loading } from '$lib/stores'
	import Loading from '$lib/components/Loading.svelte'
	import Weather from '$lib/components/Weather.svelte'

	export let data: { data: string }

	$: light = true
	$: clock = true
	$: weather = true
	$: search = true

	background.set(data.data)
</script>

<svelte:head>
	<title>Desktop App</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&display=swap" rel="stylesheet" />
</svelte:head>

<main style="background: url({$background}) no-repeat center;">
	{#if $loading}
		<Loading />
	{/if}

	{#if $modal}
		<Results />
	{/if}

	<div class="grid">
		<div class="control">
			<Control bind:light bind:clock bind:weather bind:search />
		</div>
		<div class="clock">
			{#if clock}
				<Date />
			{/if}
		</div>
		<div class="weather">
			{#if weather}
				<Weather />
			{/if}
		</div>
		<div class="search">
			{#if search}
				<SearchBcg />
			{/if}
		</div>
	</div>
	<slot />
</main>

<style>
	:global(:root) {
		--primary: white;
		--primary-01: rgba(255, 255, 255, 0.1);
		--primary-03: rgba(255, 255, 255, 0.3);
		--primary-65: rgba(255, 255, 255, 0.65);
		--border: 1px solid rgba(255, 255, 255, 0.5);
	}
	:global(body) {
		font-family: 'Akshar', sans-serif;
		color: var(--primary);
		margin: 0;
		padding: 0;
	}
	:global(body.dark) {
		--primary: black;
		--primary-01: rgba(0, 0, 0, 0.1);
		--primary-03: rgba(0, 0, 0, 0.3);
		--primary-65: rgba(0, 0, 0, 0.65);
		--border: 1px solid rgba(0, 0, 0, 0.5);
	}
	:global(section) {
		border: var(--border);
		border-radius: 10px;
		padding: 1rem 2rem;
		z-index: 2;
	}
	main {
		width: 100%;
		height: 100vh;
		position: relative;
		background-size: cover !important;
	}
	.grid {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.control {
		position: absolute;
		top: 2rem;
		left: 2rem;
	}
	.clock {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
	.weather {
		position: absolute;
		top: 8rem;
		left: 2rem;
	}
	.search {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		right: 2rem;
	}
</style>
