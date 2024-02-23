<script>
	import Logo from '$lib/shared/Logo.svelte';
	import PageSubtitle from '$lib/shared/PageSubtitle.svelte';
	import HomeLink from './HomeLink.svelte';
</script>

<div class="text-image about-us">
	<div class="text">
		<PageSubtitle noMargin>Who we are</PageSubtitle>
		<p>
			We are a team of amateur rocket engineers, programmers and technicians, that want to push the
			boundaries of amateur rocketry and aviation under the Silesian flag.
		</p>

		<HomeLink href="/about" text="Learn more about us" />
	</div>
	<div class="image">
		<img src="/images/eagle.png" alt="Silesian eagle" />
	</div>
</div>

<style lang="scss">
	.about-us {
		height: 50dvh;
	}

	p {
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}

	.image {
		margin-left: 5rem;
		width: 15rem;

		img {
			object-fit: contain;
			width: 100%;
		}
	}

	.text-image {
		display: flex;
		align-items: center;
	}
</style>
