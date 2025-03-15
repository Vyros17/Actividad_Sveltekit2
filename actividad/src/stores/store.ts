import { writable } from "svelte/store";

export let data = writable([
    {"id":1,"name":"Carlos","lastName":"Perez"},
    {"id":2,"name":"Lucas","lastName":"Sanchez"},
    {"id":3,"name":"Jenny","lastName":"Martinez"}
])