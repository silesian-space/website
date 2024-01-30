<script lang="ts">
	import ArrowDown from '$lib/icons/ArrowDown.svelte';
	import Logo from '$lib/shared/Logo.svelte';
	import Stars from './Stars.svelte';

	let scrolled = 0;
	let starsRef: Stars;

	function onScroll() {
		starsRef.triggerHyperDrive();

		setTimeout(() => {
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth'
			});
		}, 700);
	}
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY)} />

<div class="hero">
	<Stars bind:this={starsRef} />

	<div class="logo" style="--offsetY: {scrolled}">
		<Logo />
	</div>
	<h1>silesian.space</h1>
	<h2>A CanSat mission</h2>

	<button type="button" class="scroll" on:click={onScroll}>
		<div class="scroll-content">
			<ArrowDown />
		</div>
	</button>
</div>

<style lang="scss">
	.hero {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		.scroll {
			appearance: none;
			border: 0;
			background: 0;
			position: absolute;
			bottom: 2rem;
			cursor: pointer;

			.scroll-content {
				transition: transform 0.2s;
			}

			&:hover .scroll-content {
				transform: translateY(0.5rem);
				color: #fff;
			}

			&:active .scroll-content {
				transform: translateY(0.5rem) scale(0.8);
			}
		}

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
