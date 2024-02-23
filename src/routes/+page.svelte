<script>
	import Hero from '$lib/home/Hero.svelte';
	import OurGoal from '$lib/home/OurGoal.svelte';
	import Project from '$lib/home/Project.svelte';
	import '../scss/global.scss';
	import '../scss/vars.scss';
</script>

<Hero />
<div class="content">
	<Project />
	<OurGoal />
</div>

<div class="content"></div>

<style>
	.content {
		min-height: 100dvh;
		max-width: min(80rem, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 4rem 2rem;
		align-items: center;
	}
</style>
