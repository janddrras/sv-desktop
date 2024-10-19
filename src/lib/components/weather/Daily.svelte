<script lang="ts">
	import { weatherCodes } from '$lib/constants'
	import { weather } from '$lib/stores'

	let daily = $weather?.daily
	let minTemps = daily?.temperature2mMin ? Object.values(daily.temperature2mMin) : []
	let maxTemps = daily?.temperature2mMax ? Object.values(daily.temperature2mMax) : []
	let times = daily?.time ? Object.values(daily.time) : []
	let codes = daily?.weatherCode ? Object.values(daily.weatherCode) : []
	let icons = codes.map((code) => weatherCodes[code as keyof typeof weatherCodes].icon)
</script>

<div class="daily">
	{#each times as time, i}
		<div class="day" class:highlight={(i > 3 && i < 8) || i > 11}>
			<p class="date">{new Date(time).toLocaleString('en-US', { weekday: 'short', day: 'numeric' })}</p>
			<div class="temps">
				<p class="temp">{minTemps[i].toFixed(1)} <sup>o</sup>C</p>
				<p class="temp">{maxTemps[i].toFixed(1)} <sup>o</sup>C</p>
			</div>
			<div class="icons">
				<iconify-icon class="icon" icon={icons[i]} />
				<p class="code">{codes[i]}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.daily {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		padding-top: 0.5rem;
	}
	p {
		margin: 0;
		text-shadow: 5px 5px 30px rgba(0, 0, 0, 0.63);
	}
	.day {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.5rem;
	}
	.icon {
		font-size: 1.5rem;
	}
	.date {
		font-size: 1.2rem;
		font-weight: 700;
	}
	.temps,
	.icons {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.icons {
		margin-bottom: 0.8rem;
	}
	.code {
		font-size: 0.8rem;
		font-weight: 400;
	}
	.temp {
		font-size: 1rem;
	}
	sup {
		font-size: 0.7rem;
	}
	.highlight {
		background: var(--primary-03);
	}
</style>
