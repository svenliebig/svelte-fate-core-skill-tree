<script lang="ts">
  import { generateId } from '$lib/../utils/generateId';

  export let id: string = generateId();
  export let label: string = '';
  export let inline: boolean = false;
  export let disabled: boolean = false;
  export let value: string = '';
  export let inputClass: string = '';

  let clazz: string = '';
  export { clazz as class };
</script>

<div
  class="{clazz} flex {inline ? '' : 'flex-col'} border-2 {disabled
    ? 'border-sky-700/25'
    : 'border-sky-700'} w-full text-xs rounded-lg mt-2"
>
  {#if label}
    <label
      class="shrink font-semibold {disabled
        ? 'bg-white/25 dark:text-blue-300/50'
        : 'bg-white'} text-blue-300 p-1 {inline ? 'rounded-l-md' : 'rounded-t-md'}"
      for={id}>{label}</label
    >
  {/if}

  <input
    {id}
    class="grow {inputClass} {disabled ? 'bg-blue-100/25' : 'bg-blue-100'} p-1 {inline
      ? label
        ? 'rounded-r-md'
        : 'rounded-md'
      : label
      ? 'rounded-b-md'
      : 'rounded-md'} dark:caret-slate-900 dark:text-slate-900"
    type="text"
    {disabled}
    bind:value
  />
</div>
