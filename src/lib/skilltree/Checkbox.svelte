<script lang="ts">
  import { generateId } from '$lib/../utils/generateId';

  export let id: string = generateId();
  export let label: string;
  export let disabled: boolean = false;

  let checked: boolean;

  let clazz: string = '';
  export { clazz as class };
</script>

<div class="{clazz} pt-3 pl-3 checkbox-form">
  <input {id} type="checkbox" class="hidden" bind:checked />
  <label for={id} class="relative">
    <div
      class="absolute -top-2.5 -left-2 z-10 font-extrabold text-xl {disabled
        ? 'text-sky-600/25'
        : 'text-sky-600'}"
    >
      {label}
    </div>
    <div
      id=""
      class="w-6 h-6 border-2 {disabled ? 'border-sky-700/25' : 'border-sky-700'} rounded {checked
        ? 'bg-sky-700'
        : disabled
        ? 'bg-white/25'
        : 'bg-white'}"
    />
  </label>
</div>
