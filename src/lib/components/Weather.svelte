<script lang="ts">
	import { onMount } from 'svelte'

	onMount(async () => {
		const res: Response = await fetch('/api/weather')
		const data = await res.json()
		console.log(data)
	})
</script>

<section>
	<h1>Weather</h1>
	<!-- {#if weatherData}
		<pre>
			{weatherData}
		</pre>
	{/if} -->
</section>
