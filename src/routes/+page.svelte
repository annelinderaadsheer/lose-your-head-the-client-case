<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    import ArtikelKlein from '$lib/Artikelklein.svelte';
    
</script>


<ArtikelKlein data={data}/>