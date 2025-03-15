<script lang="ts">
    import { add,update } from "$lib/utils";
    import { data } from "../../stores/store";
    export let isEditable = false;
    let body = {
        "id":-1,
        "name":'',
        "lastName":''
    }
    function handleAdd(){
        body.id = $data[$data.length - 1].id;
        body.id++;
        add(body,$data);
    }
    function handleUpdate(){
        update(1,body,$data)
    }
</script>


<form action="/">
<input type="text" bind:value={body.name}>
<input type="text" bind:value={body.lastName}>
<button on:click={isEditable ? handleUpdate:handleAdd}>Enviar</button>
</form>