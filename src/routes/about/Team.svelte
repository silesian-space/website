<script>
	import PageSubtitle from '$lib/shared/PageSubtitle.svelte';
	import ImageEffect from './ImageEffect.svelte';
	import MemberCard from './MemberCard.svelte';
</script>

<PageSubtitle>The team</PageSubtitle>

<MemberCard
	index={0}
	member={{
		name: 'Adam Čech',
		role: 'CEO',
		description:
			'Tady bude nějaký text opisující našeho úžasného adama <3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quas facere beatae, ipsa quisquam sit molestias illum sed! Quas natus veritatis, quo labore eos sint. ',
		photo: '/images/team/op_adam.png',
		socials: [
			{ type: 'Instagram', link: 'https://www.facebook.com' },
			{ type: 'Github', link: 'https://www.instagram.com' },
			{ type: 'Globe', link: 'https://www.twitter.com' }
		]
	}}
/>

<MemberCard
	index={1}
	member={{
		name: 'Ondřej Kovalsky',
		role: 'Ondra',
		description:
			'Ondra je ten co robi raketky. woho vzudch nice xd. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quas facere beatae, ipsa quisquam sit molestias illum sed! Quas natus veritatis, quo labore eos sint. 	',
		photo: '/images/team/ondra.jpg',
		socials: [
			{ type: 'Instagram', link: 'https://www.facebook.com' },
			{ type: 'Github', link: 'https://www.instagram.com' },
			{ type: 'Globe', link: 'https://www.twitter.com' }
		]
	}}
/>

<MemberCard
	index={2}
	member={{
		name: 'Vikec Komarec',
		role: 'Inženýros',
		description:
			'Ten nejvic cool cáprda. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quas facere beatae, ipsa quisquam sit molestias illum sed! Quas natus veritatis, quo labore eos sint. 	',
		photo: '/images/team/vcikivk.png',
		socials: [
			{ type: 'Instagram', link: 'https://www.facebook.com' },
			{ type: 'Github', link: 'https://www.instagram.com' },
			{ type: 'Globe', link: 'https://www.twitter.com' }
		]
	}}
/>
