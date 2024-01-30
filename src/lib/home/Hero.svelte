<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte';
	import Stars from './Stars.svelte';

	let scrolled = 0;
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY)} />

<div class="hero">
	<Stars />

	<div class="logo" style="--offsetY: {scrolled}">
		<Logo />
	</div>
	<h1>silesian.space</h1>
	<h2>A CanSat mission</h2>
</div>

<style lang="scss">
	.hero {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		h1 {
			font-family: 'Squada One', sans-serif;
			font-size: 4em;
			margin-bottom: 0.5rem;
			color: #fff;
		}

		h2 {
			text-transform: uppercase;
			color: $primary;
			font-weight: 300;
			letter-spacing: 4px;
		}

		.logo {
			width: 100%;
			max-width: 200px;

			transform: translateY(calc(var(--offsetY) * -0.3px));
		}
	}
</style>
