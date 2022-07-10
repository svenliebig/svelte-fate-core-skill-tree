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
    });
  }
</script>

<Header />

<main class="flex flex-1 grow flex-col box-border">
  <slot />
  <pre>{JSON.stringify(import.meta.env, null, 2)}</pre>
</main>

<footer class="flex flex-col justify-center items-center py-3 text-xs">
  <p>
    Version:
    <a
      class="font-bold"
      href="https://github.com/svenliebig/svelte-fate-core-skill-tree/commit/{import.meta.env
        .VERCEL_GIT_COMMIT_SHA}">{import.meta.env.VERCEL_GIT_COMMIT_SHA}</a
    >
    {import.meta.env.VITE_SVELTEKIT_APP_VERSION}
  </p>
</footer>

<style>
</style>
