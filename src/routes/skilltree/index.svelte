<script lang="ts">
  import SectionHeader from '$lib/skilltree/SectionHeader.svelte';
</script>

<svelte:head>
  <title>Fate Core Skilltree</title>
  <meta name="description" content="A Fate Core Skilltree Implementation" />
</svelte:head>

<div class="skilltree flex">
  <h1 class="sr-only">Skilltree</h1>

  <div class="w-full mt-3">
    <SectionHeader>Allgemeines</SectionHeader>
  </div>
  <div class="w-full lg:w-1/3 mt-3 lg:pr-3">
    <SectionHeader>Aspekte</SectionHeader>
  </div>
  <div class="w-full lg:w-2/3 mt-3">
    <SectionHeader>Fertigkeiten</SectionHeader>
  </div>
  <div class="w-full lg:w-1/2 mt-3 lg:pr-3">
    <SectionHeader>Extras</SectionHeader>
  </div>
  <div class="w-full lg:w-1/2 mt-3">
    <SectionHeader>Stunts</SectionHeader>
  </div>
  <div class="w-full sm:w-1/2 lg:w-1/3 mt-3 sm:pr-3 flex flex-row">
    <div class="w-full">
      <SectionHeader>Körperlicher Stress (Kraft)</SectionHeader>
    </div>
    <div class="w-full mt-3">
      <SectionHeader>Gestiger Stress (Wille)</SectionHeader>
    </div>
  </div>
  <div class="w-full sm:w-1/2 lg:w-2/3 mt-3">
    <SectionHeader>Konsequenzen</SectionHeader>
  </div>
</div>

<style>
</style>
