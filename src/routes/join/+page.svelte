
<script>
	import HomeLink from '$lib/home/HomeLink.svelte';
	import '/src/scss/global.scss';
	import '/src/scss/vars.scss';
	let name = '';
	let surname = '';
	let email = '';
	let discord = '';
	let role = '';
	let about = '';

	const postData = async () => {
		// fetch(); // <-- tady pls
		try {
			const request = await fetch('/join', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					surname,
					email,
					discord,
					role,
					about
				})
			});

			const response = await request.json();
		} catch (error) {
			// tady
		}
	};
</script>

<div class="content">
	<h1>Join us!</h1>
	<p>Fill in the form below and we will contact you as soon as possible.</p>
	<form method="post" on:submit|preventDefault={postData}>
		<input type="text" name="name" placeholder="Name" bind:value={name} />
		<input type="text" name="surname" placeholder="Surname" bind:value={surname}/>
		<input type="email" name="email" placeholder="Email" bind:value={email}/>
		<input type="text" name="discord" placeholder="Discord username" bind:value={discord} />
		<select name="role" placeholder="Your role" bind:value={role}>
			<option value="developer">Developer</option>
			<option value="technician">Technician</option>
			<option value="tester">Tester</option>
			<option value="other">Other</option>
		</select>
		<textarea rows="4" cols="30" name="about" placeholder="Tell us something about you" bind:value={about}/>
		<input type="submit" value="Send" />
	</form>
</div>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	input, select, textarea {
		margin: 0.5rem;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
	}

	input[type="submit"] {
		width: 10rem;
		color: white;
		background-color: $primary;
	}

	textarea {
		resize: none;
	}
	h1 {
		color: $primary;
		
	}
	.content {
		min-height: 100dvh;
		max-width: min(80rem, calc(100vw - 2rem));
		margin: 0 auto;
		padding: 4rem 2rem;
		align-items: center;
		font-size: 1.25rem;
	}
</style>