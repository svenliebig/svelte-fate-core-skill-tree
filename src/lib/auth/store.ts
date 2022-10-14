import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

export type User = {
	picture: string;
};

export const user = writable<User | null>(null);
