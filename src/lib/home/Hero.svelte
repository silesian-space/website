<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte';
</script>

<div class="hero">
	<div class="logo">
		<Logo />
	</div>
	<h1>silesian.space</h1>
	<h2>A CanSat mission</h2>
	<!-- <h3>Who we are?</h3>
	<p>
		We are a team of amateur rocket engineers, programmers and technicians, that want to push the
		boundaries of amateur rocketry and aviation under the Silesian flag.
	</p>

	<a href="/about">Read more about us</a> -->
</div>

<style lang="scss">
	.hero {
		background-color: #121212;
		min-height: 100dvh;
		padding: 0 10vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-family: 'Squada One', sans-serif;
			font-size: 4em;
			margin-bottom: 0.5rem;
		}

		h2 {
			text-transform: uppercase;
			color: $primary;
			font-weight: 300;
		}

		.logo {
			width: 100%;
			max-width: 200px;
		}
	}
</style>
