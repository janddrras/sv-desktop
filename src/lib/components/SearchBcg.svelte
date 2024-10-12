<script lang="ts">
	import { images, modal } from '$lib/stores'

	let search = ''
	let category = ''

	const submit = async () => {
		const response = await fetch('/api/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ search, category })
		})
		const data = await response.json()

		images.update(() => [...data.imageResults])

		if ($images.length > 0) modal.set(true)
	}
</script>

<section>
	<form>
		<input type="text" id="search" name="search" placeholder="Search for something" bind:value={search} />
		<select name="category" id="category" bind:value={category}>
			<option value="">all categories</option>
			<option value="nature">nature</option>
			<option value="backgrounds">backgrounds</option>
			<option value="feelings">feelings</option>
			<option value="places">places</option>
			<option value="animals">animals</option>
			<option value="travel">travel</option>
			<option value="buildings">buildings</option>
		</select>
		<button type="submit" on:click|preventDefault={submit}>Search</button>
	</form>
</section>

<style>
	section {
		width: calc(100vw - 12rem);
		margin-left: 4rem;
	}
	form {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
	}
	input {
		background: transparent;
		flex: 2 1 auto;
		color: var(--primary);
		font-family: inherit;
		font-size: large;
		letter-spacing: 0.1rem;
		padding: 0.5rem 1rem;
		border: var(--border);
		border-radius: 10px;
	}
	input::placeholder {
		color: var(--primary);
	}
	select {
		background: transparent;
		flex: 1 1 auto;
		color: var(--primary);
		font-family: inherit;
		font-size: large;
		letter-spacing: 0.1rem;
		padding: 0.5rem 1rem;
		border: var(--border);
		border-radius: 10px;
		text-transform: capitalize;
	}
	select option {
		background: rgb(9, 7, 116);
		color: var(--primary);
		cursor: pointer;
		padding: 0.5rem 1rem;
	}
	button {
		flex: 1 1 auto;
		background: var(--primary-01);
		backdrop-filter: blur(10px);
		color: var(--primary);
		font-family: inherit;
		font-size: large;
		letter-spacing: 0.1rem;
		padding: 0.5rem 1rem;
		border: var(--border);
		border-radius: 10px;
		cursor: pointer;
	}
	button:hover {
		background: var(--primary-03);
	}
</style>
