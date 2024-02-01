<script lang="ts">
	interface Person {
		name: string;
		role: string;
		xstar: number;
		xend: number;
	}

	let image: HTMLDivElement;

	const people = [
		{
			name: 'Random borec 1',
			role: 'Elektronický inženýros',
			xstar: 0,
			xend: 28
		},
		{
			name: 'Random borec 2',
			role: '3D modelář',
			xstar: 25,
			xend: 45
		},
		{
			name: 'Random borec 3',
			role: 'Programátor',
			xstar: 40,
			xend: 60
		},
		{
			name: 'Random borec 4',
			role: 'Webovkař',
			xstar: 55,
			xend: 77
		},
		{
			name: 'Random borec 5',
			role: 'Webovkař',
			xstar: 70,
			xend: 100
		}
	];

	let selected: Person | null = null;

	const onMouseMove = (event: MouseEvent) => {
		const mouseX = event.clientX;
		const rect = image.getBoundingClientRect();

		const percentageInImage = ((mouseX - rect.x) / rect.width) * 100;

		// calculate distance to each person midpoint
		const distances = people.map((person) => {
			const midpoint = (person.xstar + person.xend) / 2;
			return Math.abs(midpoint - percentageInImage);
		});

		// find the closest person
		const closest = distances.reduce((prev, curr) => (curr < prev ? curr : prev));

		// select the closest person
		selected = people[distances.indexOf(closest)];
	};
</script>

<div
	class="team"
	on:mousemove={onMouseMove}
	on:mouseleave={() => (selected = null)}
	role="presentation"
	bind:this={image}
>
	<img src="/images/team.png" alt="team piktur" class="darken" />

	<div
		class="slider"
		class:active={!!selected}
		style="
			--left:{selected?.xstar ?? 0}%; 
			--width: {selected ? selected?.xend - selected?.xstar : '0'}%
			"
	>
		<img src="/images/team.png" alt="team piktur" class="sliding" />
	</div>
</div>

<h2>
	{#if selected}
		{selected.name}
	{:else}
		Our team
	{/if}
</h2>

{#if selected}
	<p>{selected.role}</p>
{:else}
	<p>This is us</p>
{/if}

<style lang="scss">
	.team {
		position: relative;
		width: 100%;

		.darken {
			object-fit: contain;
			width: 100%;
		}

		.slider {
			position: absolute;
			object-fit: contain;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			transition: 0.2s;

			img {
				object-fit: cover;
				height: 100%;
				transition: 0.2s;
			}

			&.active {
				left: var(--left);
				width: var(--width);

				img {
					transform: translateX(calc(var(--left) * -1));
				}
			}
		}
	}

	.darken {
		opacity: 0.2;
		display: block;
	}
</style>
