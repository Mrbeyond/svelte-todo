import { writable } from "svelte/store"


export const todos = writable([]);
export const user = writable(localStorage.user? JSON.parse(localStorage.user):null);
export const open = writable(false);
