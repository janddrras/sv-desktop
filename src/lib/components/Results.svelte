<script lang="ts">
	import { fade } from 'svelte/transition'
	import { modal, images, background } from '$lib/stores'

	const closeModal = () => modal.set(false)

	const setAsBackground = async (e: MouseEvent) => {
		const imgId = (e.target as HTMLImageElement).id

		const resp = await fetch('/api/set', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ imgId })
		})
		const img = await resp.json()
		background.set(img.img)
		modal.set(false)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if $images.length > 0}
	<div class="results">
		{#each $images as image, i (image.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="img" on:click|preventDefault={setAsBackground} in:fade={{ duration: 500, delay: 3000 + i * 1000 }}>
				<img src={image.url} alt={image.alt} id={image.id} />
			</div>
		{/each}
		<span class="backdrop" on:click={closeModal} on:keydown={(e) => e.key === 'Escape' && modal.set(false)}></span>
	</div>
{/if}

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
