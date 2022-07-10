<script lang="ts">
  const activateDark = () => {
    document.querySelector('html')!.classList.add('dark');
  };

  const activateLight = () => {
    document.querySelector('html')!.classList.remove('dark');
  };
</script>

<button
  class="dark:hidden text-gray-900 whitespace-nowrap uppercase text-xs font-bold"
  on:click={activateDark}>Dark Side</button
>
<button
  class="hidden dark:flex text-sky-100 whitespace-nowrap uppercase text-xs font-bold"
  on:click={activateLight}>Light Side</button
>
