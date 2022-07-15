<script lang="ts">
  import { formStore } from '$lib/skilltree/store';
  import Input from './Input.svelte';

  // TODO make this a component <span class="sr-only md:not-sr-only">Name</span><span>(+3)</span>
  export let label: string;
  export let values: Array<{ row: number; disabled: boolean }>;
</script>

<fieldset class="w-full flex">
  <legend class="w-1/5 text-xs items-center justify-end inline-flex pt-2 font-bold text-sky-600"
    >{label}</legend
  >
  <div class="w-4/5 flex">
    {#each values as { disabled, row }, index}
      <div class="w-1/5 pl-2">
        <Input {disabled} bind:value={$formStore.fertigkeiten[row][index]} />
      </div>
    {/each}
  </div>
</fieldset>
