<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    import ArtikelKlein from '$lib/artikel-klein.svelte';
    
</script>


<ArtikelKlein data={data}/>