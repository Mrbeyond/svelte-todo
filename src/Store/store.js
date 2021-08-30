import { writable } from "svelte/store"


export const todos = writable([]);
export const user = writable(null);
export const open = writable(false);
