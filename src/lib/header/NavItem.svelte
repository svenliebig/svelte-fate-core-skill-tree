<script lang="ts">
  import { page } from '$app/stores';

  export let path: string;
</script>

<li
  class="flex h-full items-center relative px-2 first:pl-0"
  class:active={$page.url.pathname === path}
>
  <a
    class="text-sky-600 hover:text-sky-800 dark:text-sky-500 dark:hover:text-sky-300 transition-colors uppercase hover:no-underline text-xs font-bold tracking-widest"
    sveltekit:prefetch
    href={path}
  >
    <slot />
  </a>
</li>

<style>
  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }
</style>
