import { writable } from "svelte/store";

export let data = writable([
    {"id":1,"name":"Carlos","lastName":"Perez","email":"C@gmail.com"},
    {"id":2,"name":"Lucas","lastName":"Sanchez","email":"L@gmail.com"},
    {"id":3,"name":"Jenny","lastName":"Martinez","email":"J@gmail.com"}
])