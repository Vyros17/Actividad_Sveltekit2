<script lang="ts">
    //@ts-nocheck
    import { goto } from "$app/navigation";
    import { add, update } from "$lib/utils";
    import { data } from "../../stores/store";

    export let isEditable = false;
    export let id: any = null;

    let body = {
        id: -1,
        name: "",
        lastName: "",
        email: ""
    };

    if (isEditable) {
        let value = $data.find((e: any) => e.id == id);
        body.name = value.name;
        body.lastName = value.lastName;
        body.email = value.email;
    }

    function fieldsAreFull(){
        return (body.email.length>0 && body.lastName.length>0 && body.name.length>0);
    }

    function handleAdd() {
        body.id = $data[$data.length - 1].id;
        body.id++;
        if(fieldsAreFull()){
            add(body, $data);
        }
    }
    function handleUpdate() {
        if(fieldsAreFull()){
            update(id, body, $data);
        }
    }
</script>

<div class="flex items-center justify-center min-h-screen bg-pink-200">
    <form action="/" class="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <h2 class="text-xl font-bold text-center">Formulario</h2>

        <div>
            <input
                type="text"
                bind:value={body.name}
                placeholder="Nombre"
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <div>
            <input
                type="text"
                bind:value={body.lastName}
                placeholder="Apellido"
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div>
            <input
                type="email"
                bind:value={body.email}
                placeholder="Email"
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <button
            type="submit"
            on:click={isEditable ? handleUpdate : handleAdd}
            class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
            Enviar
        </button>
        <button
            type="button"
            on:click={() => {
                goto("/");
            }}
            class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
            volver
        </button>
    </form>
</div>
