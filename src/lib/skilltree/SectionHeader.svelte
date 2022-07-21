<script lang="ts">
  let clazz: string = '';
  export { clazz as class };
</script>

<h2
  class="{clazz} border-sky-100 text-sky-100 shadow-md rounded-md p-1 mt-2 text-xs shadow-sky-700 border-2 bg-sky-600 uppercase"
>
  <slot />
</h2>
