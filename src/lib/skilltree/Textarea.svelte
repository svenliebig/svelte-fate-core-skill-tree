<script lang="ts">
  import { generateId } from '$lib/../utils/generateId';

  export let id: string = generateId();
  export let label: string;
  export let inline: boolean = false;

  export let hideLabel: boolean = false;

  let clazz: string = '';
  export { clazz as class };
</script>

<div
  class="{clazz} flex {inline
    ? ''
    : 'flex-col'} border-2 border-sky-700 w-full text-xs rounded-lg mt-2"
>
  <label
    class="font-semibold {hideLabel ? 'sr-only' : ''} shrink bg-white text-blue-300 p-1 {inline
      ? 'rounded-l-md'
      : 'rounded-t-md'}"
    for={id}>{label}</label
  >
  <textarea
    {id}
    class="grow bg-blue-100 p-1 {inline
      ? !label || hideLabel
        ? 'rounded-md'
        : 'rounded-r-md'
      : !label || hideLabel
      ? 'rounded-md'
      : 'rounded-b-md'} dark:caret-slate-900 dark:text-slate-900"
    type="text"
  />
</div>
