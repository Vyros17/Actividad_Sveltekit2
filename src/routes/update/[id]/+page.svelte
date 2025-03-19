<script lang="ts">
    import { page } from '$app/stores';
    import FormFields from '$lib/components/FormFields.svelte';
    let id = $page.params.id
</script>

<FormFields isEditable={true} id={id}/>