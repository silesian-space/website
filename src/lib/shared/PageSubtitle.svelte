<h2>
	<slot />
</h2>

<style lang="scss">
	h2 {
		color: #fff;
		margin-bottom: 1rem;
		font-size: 2rem;
		font-weight: 300;
		width: fit-content;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 70%;
			height: 2px;
			background: $primary;
			border-radius: 2px;
			margin-top: 0.5rem;
		}
	}
</style>
