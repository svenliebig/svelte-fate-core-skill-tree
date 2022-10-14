import { derived, writable } from 'svelte/store';
import type { SkilltreeForm } from '../../routes/skilltree/model';

export let formStore = writable<SkilltreeForm>({
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
});

export const getForm = derived(formStore, (v) => v);
