<script lang="ts">
  import SectionHeader from '$lib/skilltree/SectionHeader.svelte';
</script>

<svelte:head>
  <title>Fate Core Skilltree</title>
  <meta name="description" content="A Fate Core Skilltree Implementation" />
</svelte:head>

<div class="skilltree flex -mx-1 flex-wrap">
  <h1 class="sr-only">Skilltree</h1>

  <div class="w-full px-1">
    <SectionHeader>Allgemeines</SectionHeader>
  </div>
  <div class="w-full lg:w-1/3 px-1">
    <SectionHeader>Aspekte</SectionHeader>
  </div>
  <div class="w-full lg:w-2/3 px-1">
    <SectionHeader>Fertigkeiten</SectionHeader>
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Extras</SectionHeader>
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Stunts</SectionHeader>
  </div>
  <div class="w-full sm:w-1/2 lg:w-1/3 flex flex-col px-1">
    <div class="w-full">
      <SectionHeader>Körperlicher Stress (Kraft)</SectionHeader>
    </div>
    <div class="w-full">
      <SectionHeader>Gestiger Stress (Wille)</SectionHeader>
    </div>
  </div>
  <div class="w-full sm:w-1/2 lg:w-2/3 px-1">
    <SectionHeader>Konsequenzen</SectionHeader>
  </div>
</div>

<style>
</style>
