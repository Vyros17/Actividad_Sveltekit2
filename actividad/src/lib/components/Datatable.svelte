<script>
    import { goto } from "$app/navigation";
export let data;
import { del } from "$lib/utils";
</script>

<table>
<thead>
    <tr>
        <th>
            Nombre
        </th>
        <th>
            Apellido
        </th>
    </tr>
</thead>
<tbody>
    {#each data as d}
    <tr>
        <td>
            {d['name']}
        </td>
        <td>
            {d['lastName']}
        </td>
        <td>
            <button>
                Modificar
            </button>
        </td>
        <td>
            <button on:click={() => del(d.id,data)}>
                Eliminar
            </button>
        </td>
    </tr>
    {/each}
</tbody>
</table>

<button on:click={()=>{goto("add")}}>
    Agregar
</button>