<script lang="ts">
	import 'iconify-icon'

	export let light: boolean
	export let clock: boolean
	export let weather: boolean
	export let search: boolean

	const changeMode = () => {
		light = !light
		document.body.classList.toggle('dark')
	}

	const toggleClock = () => (clock = !clock)
	const toggleWeather = () => (weather = !weather)
	const toggleSearch = () => (search = !search)
</script>

<section>
	<div class="controls">
		<button class="icon-button" on:click={toggleClock}>
			<iconify-icon icon="fluent:clock-28-regular" class="icon" style={clock && 'opacity: 1;'} />
		</button>
		<button class="icon-button" on:click={toggleWeather}>
			<iconify-icon icon="fluent:weather-rain-showers-day-24-regular" class="icon" style={weather && 'opacity: 1;'} />
		</button>
		<button class="icon-button" on:click={toggleSearch}>
			<iconify-icon icon="fluent:image-28-regular" class="icon" style={search && 'opacity: 1;'} />
		</button>
		<button class="icon-button" on:click={changeMode}>
			{#if light}
				<iconify-icon icon="fluent:brightness-high-28-regular" class="icon" style="opacity: 1;" />
			{:else}
				<iconify-icon icon="fluent:weather-moon-28-regular" class="icon" style="opacity: 1;" />
			{/if}
		</button>
	</div>
</section>

<style>
	.controls {
		display: flex;
		gap: 1rem;
	}
	.icon {
		opacity: 0.5;
		color: var(--primary);
		font-size: 2.5rem;
		cursor: pointer;
		transition: all 0.5s ease;
	}
	.icon:hover {
		opacity: 1;
	}
	.icon-button {
		background: transparent;
		border: none;
		cursor: pointer;
	}
</style>
