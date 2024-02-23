<script lang="ts">
	interface Member {
		name: string;
		role: string;
		description: string;
		photo: string;
		socials: {
			type: string;
			link: string;
		}[];
	}

	export let member: Member;
	export let index: number;

	import Instagram from '$lib/icons/Instagram.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Globe from '$lib/icons/Globe.svelte';
	import type { ComponentType } from 'svelte';
	import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../scss/colors';
	import { generateColor } from '../../utils/colors';
	import ImageEffect from './ImageEffect.svelte';

	const socials: { [k: string]: ComponentType } = { Instagram, Github, Globe };
	const colors = generateColor(SECONDARY_COLOR, PRIMARY_COLOR, member.socials.length);

	let offsetY = 0;
	let offsetX = 0;
	let image: HTMLImageElement | null = null;

	const easing = (t: number) => t * (2 - t);

	const onMouseMove = (e: MouseEvent) => {
		if (!image) return;
		const { clientX, clientY } = e;

		const boundingRect = image.getBoundingClientRect();

		const imageCenterPosX = boundingRect.x + boundingRect.width / 2;
		const imageCenterPosY = boundingRect.y + boundingRect.height / 2;

		const relativeMouseX = clientX - imageCenterPosX;
		const relativeMouseY = clientY - imageCenterPosY;

		const DISTANCE_TO_POINTER = 100;

		// make offset maximum of 20px with nice easing at the end
		const maxOffset = 5;
		const t = Math.min(
			1,
			Math.sqrt(Math.pow(relativeMouseX, 2) + Math.pow(relativeMouseY, 2)) / DISTANCE_TO_POINTER
		);
		const offset = maxOffset * easing(t);

		offsetX = (relativeMouseX / boundingRect.width) * offset;
		offsetY = (relativeMouseY / boundingRect.height) * offset;
	};
</script>

<svelte:window on:mousemove={onMouseMove} />

<div class="member-card" class:odd={index % 2}>
	<div class="member-img">
		<img src={member.photo} alt={member.name} bind:this={image} />

		<div class="image-effect" style="--left: {offsetX}; --top: {offsetY}">
			<ImageEffect />
		</div>
	</div>

	<div class="member-info">
		<h3>
			{member.name}

			<span>
				&bull;
				{member.role}
			</span>
		</h3>
		<p class="member-description">
			{member.description}
		</p>
		<div class="socials">
			{#each member.socials as social, index}
				<a
					href={social.link}
					target="_blank"
					rel="noopener noreferrer"
					style={`--hover: #${colors[index]}`}
				>
					<svelte:component this={socials[social.type]} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.socials {
		display: flex;
		margin-top: 1rem;

		a {
			&:not(:last-child) {
				margin-right: 1rem;
			}

			&:hover {
				color: var(--hover);
			}
		}
	}

	.member-card {
		display: flex;
		align-items: center;
		margin-top: 4rem;

		&:hover .member-img img {
			filter: grayscale(0);
		}

		.member-img {
			width: 16rem;
			height: 16rem;
			border-radius: 50%;
			margin-right: 4rem;
			flex-shrink: 0;
			position: relative;

			.image-effect {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				transform: translate(calc(var(--left) * 1px), calc(var(--top) * 1px));

				:global(svg) {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			&:after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				border-radius: 50%;
				bottom: 0;
				left: 0;
			}

			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				object-fit: cover;
				// black and white
				filter: grayscale(100%);
				transition: filter 0.4s;

				&:hover {
					filter: grayscale(0);
				}
			}
		}

		.member-info {
			h3 {
				font-size: 2rem;
				margin-bottom: 1rem;
				font-weight: 300;
				color: #fff;

				span {
					color: #555;
				}
			}
		}

		&.odd {
			flex-direction: row-reverse;

			.member-img {
				margin-right: 0;
				margin-left: 4rem;
			}
		}
	}
</style>
