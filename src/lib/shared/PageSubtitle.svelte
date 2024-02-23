<script>
	export let noMargin = false;
</script>

<h2 class:noMargin>
	<slot />
</h2>

<style lang="scss">
	h2 {
		color: #fff;
		margin-bottom: 1rem;
		margin-top: 2rem;
		font-size: 2rem;
		font-weight: 300;
		width: fit-content;
		position: relative;

		&.noMargin {
			margin-top: 0;
		}

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -0.1rem;
			width: 70%;
			height: 0.2rem;
			background: $primary;
			border-radius: 2px;
			margin-top: 0.5rem;
		}
	}
</style>
