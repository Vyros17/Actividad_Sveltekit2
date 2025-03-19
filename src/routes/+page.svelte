<script lang="ts">
    import Datatable from "$lib/components/Datatable.svelte";
    import { data } from "../stores/store";
</script>

<Datatable data={$data} />
