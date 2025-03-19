<script lang="ts">
    import { goto } from "$app/navigation";
    export let data;
    import { del } from "$lib/utils";
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-pink-200">
    <h1 class="text-4xl">
        Actividad de
        <span class="text-orange-500 text-5xl">SvelteKit</span>
    </h1>
    <div class="w-full flex ml-[112rem] p-4">
        <button
            on:click={() => {
                goto("add");
            }}
            class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition cursor-pointer"
        >
            Agregar
        </button>
    </div>
    <table
        class="table-auto border border-gray-300 w-1/2 mx-auto bg-white shadow-lg rounded-lg"
    >
        <thead class="bg-gray-200">
            <tr>
                <th class="px-4 py-2">Nombre</th>
                <th class="px-4 py-2">Apellido</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Modificar</th>
                <th class="px-4 py-2">Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {#each data as d}
                <tr class="odd:bg-white even:bg-gray-100">
                    <td class="px-4 py-2 text-center"
                        >{d["name"] ?? "No definido"}</td
                    >
                    <td class="px-4 py-2 text-center"
                        >{d["lastName"] ?? "No definido"}</td
                    >
                    <td class="px-4 py-2 text-center"
                        >{d["email"] ?? "No definido"}</td
                    >
                    <td class="px-4 py-2 text-center">
                        <button
                            on:click={() => {
                                goto(`update/${d.id}`);
                            }}
                            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition cursor-pointer"
                        >
                            Modificar
                        </button>
                    </td>
                    <td class="px-4 py-2 text-center">
                        <button
                            on:click={() => del(d.id, data)}
                            class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition cursor-pointer"
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
