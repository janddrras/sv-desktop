<script lang="ts">
	import { onMount } from 'svelte'
	import { weather } from '$lib/stores'
	import Today from './Today.svelte'
	import Daily from './Daily.svelte'
	import Hourly from './Hourly.svelte'

	$: mode = { today: true, hourly: false, daily: false }

	const setActive = (key: keyof typeof mode) => {
		for (const k in mode) {
			mode[k as keyof typeof mode] = false
		}
		mode[key] = true
		mode = { ...mode }
	}

	onMount(() => {
		async function fetchWeather() {
			const res: Response = await fetch('/api/weather')
			const data = await res.json()
			weather.set(data.data)
		}
		fetchWeather()
		const interval = setInterval(fetchWeather, 60000 * 5)
		return () => clearInterval(interval)
	})
</script>

<section class="weather">
	<div class="buttons">
		<button on:click={() => setActive('today')} class:active={mode.today}>Today</button>
		<button on:click={() => setActive('hourly')} class:active={mode.hourly}>Hourly</button>
		<button on:click={() => setActive('daily')} class:active={mode.daily}>Daily</button>
	</div>
	{#if mode.today}
		<Today />
	{/if}
	{#if mode.hourly}
		<Hourly />
	{/if}
	{#if mode.daily}
		<Daily />
	{/if}
</section>

<style>
	.weather {
		width: 500px;
		height: 400px;
		position: relative;
		margin: 0;
		padding: 0;
	}
	.buttons {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: -2.5rem;
		left: 0rem;
	}
	button {
		background: none;
		border: var(--border);
		border-radius: 10px 10px 0 0;
		height: 2.5rem;
		color: var(--primary);
		padding: 0.35rem 2.5rem;
		cursor: pointer;
		font-size: 1rem;
		transition: all 0.3s ease;
	}
	button:hover {
		background: var(--primary-03);
	}
	button.active {
		background-color: var(--primary-03);
		color: var(--primary);
		cursor: default;
	}
</style>
