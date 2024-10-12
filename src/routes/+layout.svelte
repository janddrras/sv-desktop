<script lang="ts">
	import SearchBcg from '$lib/components/SearchBcg.svelte'
	import Date from '$lib/components/Date.svelte'
	import Results from '$lib/components/Results.svelte'
	import Control from '$lib/components/Control.svelte'
	import { modal } from '$lib/stores'

	export let data: { data: string }

	$: light = true
	$: clock = true
	$: weather = false
	$: search = true

	$: background = data.data
</script>

<svelte:head>
	<title>Desktop App</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&display=swap" rel="stylesheet" />
</svelte:head>

<main style="background: url({background}) no-repeat center; background-size: cover">
	{#if $modal}
		<Results />
	{/if}

	<div class="control">
		<Control bind:light bind:clock bind:weather bind:search />
	</div>

	{#if clock}
		<div class="date">
			<Date />
		</div>
	{/if}

	{#if search}
		<div class="search">
			<SearchBcg />
		</div>
	{/if}

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
	main {
		width: 100%;
		height: 100vh;
		position: relative;
	}
	:global(section) {
		border: var(--border);
		border-radius: 10px;
		padding: 1rem 2rem;
	}
	.date {
		position: absolute;
		top: 2rem;
		right: 4rem;
		text-align: center;
		z-index: 2;
	}
	.search {
		position: absolute;
		bottom: 2rem;
		z-index: 2;
	}
	.control {
		position: absolute;
		top: 2rem;
		left: 4rem;
		z-index: 2;
	}
</style>
