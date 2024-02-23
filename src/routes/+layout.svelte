<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
		gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
	});
</script>

<slot />
