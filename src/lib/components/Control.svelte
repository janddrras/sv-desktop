<script lang="ts">
	import 'iconify-icon'
	import { tweened } from 'svelte/motion'
	import { fade } from 'svelte/transition'

	export let light: boolean
	export let clock: boolean
	export let weather: boolean
	export let search: boolean

	const changeMode = () => {
		light = !light
		document.body.classList.toggle('dark')
	}

	let controlToggle = false
	let containerWidth = tweened(50, { duration: 100 })

	const toggleControls = () => (controlToggle = !controlToggle)
	const toggleClock = () => (clock = !clock)
	const toggleWeather = () => (weather = !weather)
	const toggleSearch = () => (search = !search)

	$: $containerWidth = controlToggle ? 324 : 50
</script>

<section class="ctrl-sect" style:width="{$containerWidth}px">
	<div class="controls">
		<button class="icon-button" on:click={toggleControls}>
			<iconify-icon
				icon="fluent:chevron-right-24-regular"
				class="icon"
				style={clock && 'opacity: 1;'}
				class:rotate={controlToggle}
			/>
		</button>
		{#if controlToggle}
			<button class="icon-button" on:click={toggleClock} transition:fade>
				<iconify-icon icon="fluent:clock-28-regular" class="icon" style={clock && 'opacity: 1;'} />
			</button>
			<button class="icon-button" on:click={toggleWeather} transition:fade={{ delay: 100 }}>
				<iconify-icon icon="fluent:weather-rain-showers-day-24-regular" class="icon" style={weather && 'opacity: 1;'} />
			</button>
			<button class="icon-button" on:click={toggleSearch} transition:fade={{ delay: 200 }}>
				<iconify-icon icon="fluent:image-28-regular" class="icon" style={search && 'opacity: 1;'} />
			</button>
			<button class="icon-button" on:click={changeMode} transition:fade={{ delay: 300 }}>
				{#if light}
					<iconify-icon icon="fluent:brightness-high-28-regular" class="icon" style="opacity: 1;" />
				{:else}
					<iconify-icon icon="fluent:weather-moon-28-regular" class="icon" style="opacity: 1;" />
				{/if}
			</button>
		{/if}
	</div>
</section>

<style>
	.ctrl-sect {
		padding: 1rem;
		width: 100%;
	}
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
		position: relative;
	}
	.rotate {
		transform: rotate(180deg);
	}
</style>
