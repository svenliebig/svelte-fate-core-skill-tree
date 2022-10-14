<script lang="ts">
  import Checkbox from '$lib/skilltree/Checkbox.svelte';
  import FertigkeitenRow from '$lib/skilltree/FertigkeitenRow.svelte';
  import Input from '$lib/skilltree/Input.svelte';
  import SectionHeader from '$lib/skilltree/SectionHeader.svelte';
  import Textarea from '$lib/skilltree/Textarea.svelte';
  import type { SkilltreeForm } from './model';
  import { formStore, getForm } from '../../lib/skilltree/store';
  import { onMount } from 'svelte';

  let objForm: any;

  const unsubscribe = formStore.subscribe((value) => {
    objForm = value;
  });

  let form: SkilltreeForm = {
    name: '',
    beschreibung: '',
    erhohlungsrate: '',
    konzept: '',
    dilemma: '',
    aspekte: ['', '', ''],
    fertigkeiten: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    extras: '',
    stunts: '',
    level: 0,
    konsequenzen: {
      leicht: ['', ''],
      mittel: '',
      schwer: ''
    }
  };

  onMount(() => {
    const search = (() => new URLSearchParams(window.location.search))();
    const treeQuery = search.get('tree');

    if (treeQuery) {
      try {
        const tree = JSON.parse(decodeURIComponent(treeQuery));
        $formStore = tree;
      } catch (e) {
        console.error(e);
      }
    }
  });

  $formStore = form;

  $: {
    // console.log('objForm:');
    // console.log(objForm);
  }
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
      <div class="w-4/6 sm:w-3/4 lg:w-5/6 ">
        <Input label="Name" bind:value={$formStore.name} inline />
        <Textarea label="Beschreibung" bind:value={$formStore.beschreibung} class="h-20" />
      </div>
      <div class="w-2/6 sm:w-1/4 lg:w-1/6 pl-2 pb-2">
        <Input
          label="Erhohlungsrate"
          class="h-full"
          inputClass="text-6xl text-center"
          bind:value={$formStore.erhohlungsrate}
        />
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/3 px-1">
    <SectionHeader>Aspekte</SectionHeader>
    <Input label="Konzept" bind:value={$formStore.konzept} inline />
    <Input label="Dilemma" bind:value={$formStore.dilemma} inline />
    <Input inline bind:value={$formStore.aspekte[0]} />
    <Input inline bind:value={$formStore.aspekte[1]} />
    <Input inline bind:value={$formStore.aspekte[2]} />
  </div>
  <div class="w-full lg:w-2/3 px-1">
    <SectionHeader class="flex justify-between">
      <span>
        Fertigkeiten (Level {$formStore.level})
      </span>
      <span class="block">
        <button on:click={() => $formStore.level++}>Level +</button><span class="mx-2">|</span>
        <button on:click={() => ($formStore.level <= 0 ? undefined : $formStore.level--)}
          >Level -</button
        >
      </span>
    </SectionHeader>
    <FertigkeitenRow
      label="Hervorragen (+5)"
      values={[
        { disabled: $formStore.level < 5, row: 0 },
        { disabled: $formStore.level < 9, row: 0 },
        { disabled: $formStore.level < 11, row: 0 },
        { disabled: $formStore.level < 14, row: 0 },
        { disabled: $formStore.level < 15, row: 0 }
      ]}
    />
    <FertigkeitenRow
      label="Großartig (+4)"
      values={[
        { disabled: false, row: 1 },
        { disabled: $formStore.level < 4, row: 1 },
        { disabled: $formStore.level < 8, row: 1 },
        { disabled: $formStore.level < 11, row: 1 },
        { disabled: $formStore.level < 13, row: 1 }
      ]}
    />
    <FertigkeitenRow
      label="Gut (+3)"
      values={[
        { disabled: false, row: 2 },
        { disabled: false, row: 2 },
        { disabled: $formStore.level < 3, row: 2 },
        { disabled: $formStore.level < 7, row: 2 },
        { disabled: $formStore.level < 10, row: 2 }
      ]}
    />
    <FertigkeitenRow
      label="Ordentlich (+2)"
      values={[
        { disabled: false, row: 3 },
        { disabled: false, row: 3 },
        { disabled: false, row: 3 },
        { disabled: $formStore.level < 2, row: 3 },
        { disabled: $formStore.level < 6, row: 3 }
      ]}
    />
    <FertigkeitenRow
      label="Durchschnittlich (+1)"
      values={[
        { disabled: false, row: 4 },
        { disabled: false, row: 4 },
        { disabled: false, row: 4 },
        { disabled: false, row: 4 },
        { disabled: $formStore.level < 1, row: 4 }
      ]}
    />
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Extras</SectionHeader>
    <Textarea label="Extras" bind:value={$formStore.extras} class="h-36" hideLabel />
  </div>
  <div class="w-full lg:w-1/2 px-1">
    <SectionHeader>Stunts</SectionHeader>
    <Textarea label="Stunts" bind:value={$formStore.stunts} class="h-36" hideLabel />
  </div>
  <div class="w-full sm:w-1/3 lg:w-1/4 flex flex-col px-1">
    <div class="w-full">
      <SectionHeader>Körperlicher Stress (Kraft)</SectionHeader>
      <div class="w-full flex justify-between">
        <Checkbox label="1" />
        <Checkbox label="2" />
        <Checkbox label="3" />
        <Checkbox label="4" />
        <Checkbox label="5" />
        <Checkbox label="6" />
      </div>
    </div>
    <div class="w-full">
      <SectionHeader>Gestiger Stress (Wille)</SectionHeader>
      <div class="w-full flex justify-between">
        <Checkbox label="1" />
        <Checkbox label="2" />
        <Checkbox label="3" />
        <Checkbox label="4" />
        <Checkbox label="5" />
        <Checkbox label="6" />
      </div>
    </div>
  </div>
  <div class="w-full sm:w-2/3 lg:w-3/4 px-1">
    <SectionHeader>Konsequenzen</SectionHeader>
    <div class="w-full flex flex-col sm:flex-row">
      <div class="w-full sm:w-1/2">
        <Input label="Leicht" inline bind:value={$formStore.konsequenzen.leicht[0]} />
        <Input label="Mittel" inline bind:value={$formStore.konsequenzen.mittel} />
        <Input label="Schwer" inline bind:value={$formStore.konsequenzen.schwer} />
      </div>
      <div class="w-full sm:w-1/2 sm:pl-2">
        <Input label="Leicht" inline bind:value={$formStore.konsequenzen.leicht[1]} />
      </div>
    </div>
  </div>
  <div class="w-full flex justify-end mt-5 px-1 items-end">
    <button
      class="border-2 bg-white text-sky-700 rounded-md px-2 py-0.5 border-sky-700"
      on:click={() => {
        const json = JSON.stringify($getForm);
        const uriValue = encodeURIComponent(json);
        window.location.assign(`${location.origin}${location.pathname}?tree=${uriValue}`);
      }}>Save</button
    >
  </div>
</div>

<style>
</style>
