<div class="loading">
	<p>Loading ...</p>
	<iconify-icon icon="svg-spinners:8-dots-rotate" class="icon" />
</div>

<style>
	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.5);
		z-index: 3;
	}
	.loading p {
		color: var(--primary);
		font-size: 2rem;
	}
	.icon {
		color: var(--primary);
		font-size: 5rem;
	}
</style>
