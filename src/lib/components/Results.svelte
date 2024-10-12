<script>
	import { images } from '$lib/constants'

	export let modal
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="results">
	{#each images as image}
		<div class="img">
			<img src={image} alt="Pixabay result" />
		</div>
	{/each}
	<span class="backdrop" on:click={() => (modal = false)} on:keydown={(e) => e.key === 'Escape' && (modal = false)}
	></span>
</div>

<style>
	.results {
		position: fixed;
		padding: 2rem;
		inset: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		gap: 1rem;
		z-index: 4;
	}
	.img {
		position: relative;
		overflow: hidden;
		cursor: pointer;
		border: 1px solid rgba(255, 255, 255, 0.63);
		border-radius: 10px;
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
		z-index: 6;
	}
	.img::after {
		content: 'Set as background';
		position: absolute;
		bottom: 0.5rem;
		left: 25%;
		color: rgba(255, 255, 255, 0.6);
		font-size: 1.5rem;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		opacity: 0;
		transition: opacity 0.7s ease;
	}
	.img:hover img {
		transform: scale(1.1);
	}
	.img:hover::after {
		opacity: 1;
	}
	img {
		transition: transform 0.5s ease;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
		z-index: 5;
	}
</style>
