<script>
	import HomeLink from '$lib/home/HomeLink.svelte';
	import PageHeading from '$lib/shared/PageHeading.svelte';
	import PageSubtitle from '$lib/shared/PageSubtitle.svelte';
	import Team from './Team.svelte';
	import '/src/scss/global.scss';
	import '/src/scss/vars.scss';
</script>

<div class="content">
	<PageHeading
		title="About us"
		backButton={{
			href: '/',
			text: 'Back to home'
		}}
	/>
	<!-- daka cool tymova fotka -->
	<PageSubtitle>Our story</PageSubtitle>
	<p>
		Our three founding fathers came with this idea of creating Silesian amateur rocketry club in
		2022. The idea was to create a community of people who are interested in rocketry and space
		technology. The community is be opened to anyone who is interested in rocketry or aviation.
	</p>
	<HomeLink href="../join/" text="You can join us here" />
	<Team />
</div>

<style lang="scss">
	.content {
		min-height: 100dvh;
		max-width: min(80rem, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 4rem 2rem;
		align-items: center;
		font-size: 1.25rem;

		h1,
		h2,
		p {
			margin-bottom: 1rem;
		}

		:global(a) {
			margin-bottom: 1rem;
		}
	}
</style>
