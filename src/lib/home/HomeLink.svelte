<script>
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	export let href = '';
	export let text = '';
</script>

<a {href}>
	{text}
	<span class="icon">
		<ArrowRight />
	</span>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: $primary;
		font-size: 1.25rem;
		transition: 0.25s;
		display: flex;
		align-items: center;

		&:hover {
			color: $secondary;

			.icon {
				transform: translateX(0);
				opacity: 1;
			}
		}

		svg {
			margin-left: 0.5rem;
		}

		.icon {
			display: flex;
			align-items: center;
			margin-left: 0.5rem;
			transform: translateX(-0.5rem);
			opacity: 0;
			transition:
				0.2s ease-in-out opacity,
				0.2s ease-in-out transform;
		}
	}
</style>
