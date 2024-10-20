<script lang="ts">
	import { weatherCodes } from '$lib/constants'
	import { weather } from '$lib/stores'

	let hourly = $weather?.hourly

	let times = hourly?.time ? Object.values(hourly.time) : []
	let temps = hourly?.temperature2m ? Object.values(hourly.temperature2m) : []
	let codes = hourly?.weatherCode ? Object.values(hourly.weatherCode) : []
	let icons = codes.map((code) => weatherCodes[code as keyof typeof weatherCodes].icon)
</script>

<div class="hourly">
	{#each times as time, i}
		<div class="hour" class:highlight={(i > 3 && i < 8) || (i > 11 && i < 16) || i > 19}>
			<p class="date">{new Date(time).toLocaleTimeString('ro-RO', { hour: 'numeric' })}</p>
			<div class="temps">
				<p class="temp">{temps[i].toFixed(1)} <sup>o</sup>C</p>
				<iconify-icon class="icon" icon={icons[i]} />
				<p class="code">{codes[i]}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.hourly {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(6, 1fr);
		padding-top: 0.2rem;
	}
	p {
		margin: 0;
		text-shadow: 5px 5px 30px rgba(0, 0, 0, 0.63);
	}
	.hour {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem 0;
	}
	.icon {
		font-size: 1.5rem;
	}
	.date {
		font-size: 1.2rem;
		font-weight: 700;
	}
	.temps {
		display: flex;
		gap: 0.5rem;
		align-items: center;
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
		background: var(--primary-01);
	}
</style>
