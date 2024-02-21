<script lang="ts">
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';

	export let title = '';
	export let backButton: {
		text: string;
		href: string;
	} | null = null;
</script>

<div class="heading">
	<h1>
		{title}
	</h1>

	{#if backButton}
		<a href={backButton.href}>
			<ArrowLeft />
			{backButton.text}
		</a>
	{/if}
</div>

<style lang="scss">
	// color gradient
	h1 {
		background: linear-gradient(90deg, $primary 0%, $secondary 100%);
		width: fit-content;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 0 auto;
		margin-bottom: 1rem;
		font-size: 3rem;
		font-weight: 300;
	}

	.heading {
		margin-bottom: 2rem;

		a {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s;
			width: fit-content;

			:global(svg) {
				margin-right: 0.5rem;
			}

			&:hover {
				color: #fff;
			}

			&:active {
				transform: scale(0.95);
			}
		}
	}
</style>
