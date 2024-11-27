<script>
    import ArtikelInfoframe from '$lib/Organism/ArtikelInfoframe.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import ArtikelKlein from '$lib/Molecules/Artikelklein.svelte';
    import Footer from '$lib/Organism/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    const post = data.posts[0];
    import Makersblok from '$lib/Molecules/Makersblok.svelte';
    import Donatiebox from '$lib/Molecules/Donatiebox.svelte';
</script>

<Header/>
<ArtikelInfoframe post={post}></ArtikelInfoframe>

<main>
    {#if post}
    <!-- @html means: there is html in this string, render it -->
    <article>
        <p>{@html post.content.rendered} </p>
        <Makersblok author={post.authors[0]}></Makersblok>
    </article>
  
{:else}
    <p>No post available</p>
{/if}

<Donatiebox />

<!-- <ArtikelKlein data={data}/> -->


</main>

<Footer/>

<style>

    main {
        max-width: var(--article-width);
        padding: 0 1em;
    }

    article {
        margin-top: 2em;
    }

    :global(.wp-block-gallery, .wp-block-image) {
        margin: 0;
        margin-bottom: 1em;
    }
    
    :global(article img) {
        width: 100%;
        height: auto;
    }
</style>