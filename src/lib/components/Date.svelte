<script>
	import { onMount } from 'svelte'
	import list from '../namedays.json'
	import { isLeapYear } from '$lib/utils'
	import { days, months } from '$lib/constants'

	let time = new Date()

	const currentMonth = time.getMonth()
	const currentDay = time.getDate()
	const currentYear = time.getFullYear()

	$: hours = time.getHours()
	$: minutes = time.getMinutes()
	$: date = time.getDate()
	$: day = days[time.getDay()]
	$: month = months[time.getMonth()]

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date()
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	})

	let cel = list[currentMonth][currentDay - 1].join(', ')

	if (isLeapYear(currentYear) && currentMonth === 2 && currentDay === 24) cel = ''
	if (isLeapYear(currentYear) && currentMonth === 2 && currentDay > 24) {
		cel = list[currentMonth][currentDay].join(', ')
	}
</script>

<section class="clock">
	<p class="time">{hours}:{minutes < 10 ? '0' + minutes : minutes}</p>
	<p class="date">{date} {month}.</p>
	<p class="day">{day}</p>
	<p class="nameday">{cel}</p>
</section>

<style>
	.clock {
		min-width: 500px;
	}
	p {
		margin: 0;
		padding: 0;
		text-shadow: 5px 5px 30px rgba(0, 0, 0, 0.63);
		font-weight: 200;
	}

	.time {
		font-size: 15rem;
	}

	.date {
		font-size: 3rem;
		margin-top: -4rem;
	}

	.day {
		font-size: 5rem;
		text-transform: uppercase;
		font-weight: 400;
	}
	.nameday {
		font-size: 2rem;
		padding: 2.5rem 0;
		word-spacing: 0.3rem;
	}
</style>
