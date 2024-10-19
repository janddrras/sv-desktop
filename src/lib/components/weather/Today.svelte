<script lang="ts">
	import { weatherCodes } from '$lib/constants'
	import { weather } from '$lib/stores'

	let cc: number = $weather?.current.weatherCode || 0
	let weatherBcg = weatherCodes[cc as keyof typeof weatherCodes].background
	let weatherIcon = weatherCodes[cc as keyof typeof weatherCodes].icon
	let weatherDesc = weatherCodes[cc as keyof typeof weatherCodes].label
</script>

<div class="content today" style="background: url({weatherBcg}) no-repeat;">
	<h1>{$weather?.current.temperature2m?.toFixed(1)} <sup>o</sup>C</h1>
	<iconify-icon class="icon" icon={weatherIcon} />
	<h2>{weatherDesc}</h2>
</div>

<style>
	.today {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		background-size: cover !important;
		border-radius: 10px;
	}
	h1 {
		font-size: 5rem;
		margin: 1rem 0 -0.5rem 0;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
	}
	.icon {
		font-size: 5rem;
	}
	sup {
		font-size: 3rem;
	}
</style>
