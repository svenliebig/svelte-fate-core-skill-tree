<script lang="ts">
  import Input from './Input.svelte';

  export let label: string;
  export let values: Array<{ value: string; disabled: boolean }>;
</script>

<fieldset class="w-full flex">
  <legend class="w-1/5 text-xs items-center justify-end inline-flex pt-2 font-bold text-sky-600"
    >{label}</legend
  >
  <div class="w-4/5 flex">
    {#each values as value}
      <div class="w-1/5 pl-2">
        <Input disabled={value.disabled} />
      </div>
    {/each}
  </div>
</fieldset>
