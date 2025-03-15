<script>
    import Datatable from "$lib/components/Datatable.svelte";
    import { data } from "../stores/store";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<Datatable data={$data} />
