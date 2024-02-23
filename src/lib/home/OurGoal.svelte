<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte';
	import PageSubtitle from '$lib/shared/PageSubtitle.svelte';
	import { onMount } from 'svelte';
	import Cara from './assets/Cara.svelte';

	import { gsap } from 'gsap';

	let rocket;

	onMount(async () => {
		const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

		const path = document.querySelector('#rocket-path')!;

		gsap.to('#svg-rocket', {
			scrollTrigger: {
				trigger: '#our-goal',
				start: 'top bottom-=100px',
				end: 'bottom center',
				scrub: 1
			},
			motionPath: {
				path: '#rocket-path',
				align: path,
				autoRotate: 90, // disable automatic rotation here
				start: 0,
				end: 1,
				alignOrigin: [0.5, 0.5]
			},
			ease: 'power2.out',

			transformOrigin: '50% 50% 90deg'
		});
	});
</script>

<div class="our-goal" id="our-goal">
	<div class="goal-path">
		<Cara />
		<div id="svg-rocket" bind:this={rocket}>
			<Logo />
		</div>
	</div>
	<div class="text">
		<PageSubtitle>Our goal</PageSubtitle>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid perspiciatis
			in natus totam id amet atque quis quisquam nihil fugiat, hic, ullam sunt nisi quia et optio
			corporis vero!
		</p>
	</div>
</div>

<style lang="scss">
	.goal-path {
		width: 50%;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		:global(.rocket-path) {
			width: 100%;
			height: 100%;
			object-fit: contain;
			color: #555;
		}

		#svg-rocket {
			position: absolute;
			width: 5rem;
			height: 5rem;

			:global(.svg-logo) {
				width: 100%;
				height: 100%;
			}
		}
	}

	.our-goal {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4rem;

		.text {
			padding-left: 2rem;

			p {
				margin-top: 2rem;
				font-size: 1.25rem;
			}
		}
	}
</style>
