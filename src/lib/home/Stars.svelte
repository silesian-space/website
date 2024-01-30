<script lang="ts">
	interface Star {
		x: number;
		y: number;
		yOffset: number;
		brightness: number;
		startedAt: number;
		toTravel: number;
		brightnessModifier: number;
	}

	import { onMount } from 'svelte';

	let stars: Star[] = [];
	let pointerX = 0;
	let pointerY = 0;
	let scrolled = 0;

	let screenWidth = 0;

	const STAR_SPEED = 0.005;
	const EDGE_DIMMING = 100; // in px
	const DISTANCE_TO_POINTER = 500; // in px

	function createStar(): Star {
		const x = Math.random() * window.innerWidth;

		return {
			y: Math.random() * window.innerHeight,
			x,
			startedAt: x,
			yOffset: Math.random() * 100,
			toTravel: Math.random() * 100,
			brightness: Math.random() * 100,
			brightnessModifier: 0
		};
	}

	function createStars() {
		stars = [];

		for (let i = 0; i < window.innerWidth / 20; i++) {
			stars.push(createStar());
		}

		stars = stars;
	}

	function loop() {
		const frame = requestAnimationFrame(loop);

		stars = stars.map((star) => {
			star.y += star.brightness * STAR_SPEED;

			if (star.y > window.innerHeight) {
				star.y = 0;
			}

			const distanceToPointer = Math.sqrt(
				Math.pow(pointerX - star.x, 2) + Math.pow(pointerY + scrolled - (star.y + star.yOffset), 2)
			);

			if (distanceToPointer < DISTANCE_TO_POINTER) {
				star.brightnessModifier = 1 - distanceToPointer / DISTANCE_TO_POINTER;
			} else {
				star.brightnessModifier = 0;
			}

			const distanceToScreenEdge = window.innerHeight - star.y - star.yOffset;

			// dim the star when it's close to the screen edge
			if (distanceToScreenEdge < EDGE_DIMMING) {
				star.brightnessModifier = (1 - distanceToScreenEdge / EDGE_DIMMING) * -1;
			}

			star.yOffset = scrolled * (130 - star.brightness) * 0.01 * 0.75;

			return star;
		});

		stars = stars;
	}

	onMount(() => {
		createStars();
		loop();
	});
</script>

<svelte:document
	on:mousemove={(e) => {
		pointerX = e.clientX;
		pointerY = e.clientY;
	}}
	on:scroll={(e) => {
		scrolled = window.scrollY;
	}}
/>

<svelte:window
	on:resize={() => {
		createStars();
	}}
/>

<div class="stars">
	<div class="stars-wrapper">
		{#each stars as star}
			<div
				class="star"
				style="
        left: {star.x}px;
        top: {star.y + star.yOffset}px;
        --brightness: {star.brightness}%;
        --brightness-modifier: {star.brightnessModifier};
      "
			></div>
		{/each}
	</div>

	<!-- <div class="overlay"></div> -->
	<!-- <Smoke /> -->
</div>

<style>
	.stars {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		pointer-events: none;
		z-index: -1;
		overflow: hidden;
	}

	.star {
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 0.5rem;
		background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		/* background-color: white; */
		opacity: calc(var(--brightness) / 2 + var(--brightness-modifier) * 50%);
		pointer-events: none;

		animation: appear 1s ease-in-out;
		animation-delay: calc(var(--brightness) * 2s);
	}

	.overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 15vh;
		background: linear-gradient(#12121200, #121212);
		width: 100%;
	}

	@keyframes appear {
		from {
			opacity: 0;
		}

		to {
			opacity: calc(var(--brightness) / 2 + var(--brightness-modifier) * 50%);
		}
	}
</style>
