<script lang="ts">
	import { isAuthenticated, user, type User } from '$lib/auth/store';
	import decodeJWT from 'jwt-decode';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	let clazz: string = '';
	export { clazz as class };

	const clientId = import.meta.env.GOOGLE_CLIENT_ID;

	onMount(async () => {
		function getJwtCookie() {
			const c = document.cookie.split(';').find((v) => v.trim().startsWith('jwt='));
			if (c) {
				return c.trim();
			}
			return null;
		}

		function initAuth() {
			const jwt = getJwtCookie();
			if (jwt) {
				$isAuthenticated = true;
				$user = decodeJWT(jwt);
			}
		}

		initAuth();

		const handleCredentialResponse = async (response: CredentialResponse) => {
			document.cookie = `jwt=${response.credential};path=/`;
			const decoded = decodeJWT(response.credential);
			$user = decoded as User;
			$isAuthenticated = true;
		};

		google.accounts.id.initialize({
			client_id: clientId,
			callback: handleCredentialResponse
		});

		google.accounts.id.renderButton(document.getElementById('google-oauth-btn') as never, {
			theme: 'outline',
			size: 'small',
			type: 'icon',
			locale: 'de',
			shape: 'circle'
		});

		if (!$isAuthenticated) {
			// google.accounts.id.prompt((n) => {
			// 	console.log('hello', n);
			// });
		}
	});

	function renderLoginPrompt() {
		google.accounts.id.prompt((n) => {});
	}
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client"></script>
</svelte:head>

{#if $isAuthenticated}
	<button
		transition:slide={{}}
		class="authenticated-user {clazz}"
		on:click={renderLoginPrompt}
		style="background-image: url({$user?.picture});"
	/>
{:else}
	<div id="google-oauth-btn" class={clazz} />
{/if}

<style>
	.authenticated-user {
		width: 1rem;
		height: 1rem;
		background-size: 1rem 1rem;
		border-radius: 100%;
	}
</style>
