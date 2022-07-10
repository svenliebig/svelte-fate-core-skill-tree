<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import '../app.css';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
</script>

<Header />

<main class="flex flex-1 flex-col p-4 w-full max-w-5xl mx-auto my-0 box-border">
  <slot />
</main>

<footer class="flex flex-col justify-center items-center p-10">
  <p>visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
