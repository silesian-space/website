<div class="content">
	<h2>Who are we?</h2>
	<p>
		We are a team of amateur rocket engineers, programmers and technicians, that want to push the
		boundaries of amateur rocketry and aviation under the Silesian flag.
	</p>

	<a href="/about">Read more about us</a>
</div>

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

	a {
		text-decoration: none;
	}

	.content {
		min-height: 100dvh;
		max-width: min(80rem, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 2rem;
		align-items: center;
	}
</style>
