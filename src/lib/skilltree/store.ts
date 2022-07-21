import { derived, writable } from 'svelte/store';
import type { SkilltreeForm } from '../../routes/skilltree/model';

export let formStore = writable<SkilltreeForm>({
	name: "",
	beschreibung: "",
	konzept: "",
	dilemma: "",
	aspekte: ["", "", ""],
	fertigkeiten: [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	],
	extras: "",
	stunts: "",
	level: 0
})

export const getForm = derived(formStore, (v) => v)