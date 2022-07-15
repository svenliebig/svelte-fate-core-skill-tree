<script lang="ts">
  import Checkbox from '$lib/skilltree/Checkbox.svelte';
  import FertigkeitenRow from '$lib/skilltree/FertigkeitenRow.svelte';
  import Input from '$lib/skilltree/Input.svelte';
  import SectionHeader from '$lib/skilltree/SectionHeader.svelte';
  import Textarea from '$lib/skilltree/Textarea.svelte';
</script>

<svelte:head>
  <title>Fate Core Skilltree</title>
  <meta name="description" content="A Fate Core Skilltree Implementation" />
</svelte:head>

<div class="skilltree flex -mx-1 flex-wrap">
  <h1 class="sr-only">Skilltree</h1>

  <div class="w-full px-1">
    <SectionHeader>Allgemeines</SectionHeader>
    <div class="w-full flex">
      <div class="w-3/4 lg:w-5/6 ">
        <Input label="Name" inline />
        <Textarea label="Beschreibung" class="h-20" />
      </div>
      <div class="w-1/4 lg:w-1/6 pl-2 pb-2">
        <Textarea label="Erhohlungsrate" class="h-full" />
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/3 px-1">
    <SectionHeader>Aspekte</SectionHeader>
    <Input label="Konzept" inline />
    <Input label="Dilemma" inline />
    <Input inline />
    <Input inline />
    <Input inline />
  </div>
  <div class="w-full lg:w-2/3 px-1">
    <SectionHeader>Fertigkeiten</SectionHeader>
    <FertigkeitenRow
      label="Hervorragen (+5)"
      values={[
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' }
      ]}
    />
    <FertigkeitenRow
      label="Großartig (+4)"
      values={[
        { disabled: false, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' }
      ]}
    />
    <FertigkeitenRow
      label="Gut (+3)"
      values={[
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' }
      ]}
    />
    <FertigkeitenRow
      label="Ordentlich (+2)"
      values={[
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: true, value: '' },
        { disabled: true, value: '' }
      ]}
    />
    <FertigkeitenRow
      label="Durchschnittlich (+1)"
      values={[
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: false, value: '' },
        { disabled: true, value: '' }
      ]}
    />
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Extras</SectionHeader>
    <Textarea label="Extras" class="h-36" hideLabel />
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Stunts</SectionHeader>
    <Textarea label="Stunts" class="h-36" hideLabel />
  </div>
  <div class="w-full sm:w-1/2 lg:w-1/3 flex flex-col px-1">
    <div class="w-full">
      <SectionHeader>Körperlicher Stress (Kraft)</SectionHeader>
      <div class="w-full flex">
        <Checkbox label="1" class="mr-3" />
        <Checkbox label="2" class="mr-3" />
        <Checkbox label="3" class="mr-3" disabled />
        <Checkbox label="4" class="mr-3" disabled />
      </div>
    </div>
    <div class="w-full">
      <SectionHeader>Gestiger Stress (Wille)</SectionHeader>
      <div class="w-full flex">
        <Checkbox label="1" class="mr-3" />
        <Checkbox label="2" class="mr-3" />
        <Checkbox label="3" class="mr-3" disabled />
        <Checkbox label="4" class="mr-3" disabled />
      </div>
    </div>
  </div>
  <div class="w-full sm:w-1/2 lg:w-2/3 px-1">
    <SectionHeader>Konsequenzen</SectionHeader>
    <div class="w-full flex">
      <div class="w-full sm:w-1/2">
        <Input label="Leicht" inline />
        <Input label="Mittel" inline />
        <Input label="Schwer" inline />
      </div>
      <div class="w-full sm:w-1/2 pl-2">
        <Input label="Leicht" inline disabled />
        <Input label="Mittel" inline disabled />
        <Input label="Schwer" inline disabled />
      </div>
    </div>
  </div>
</div>

<style>
</style>
