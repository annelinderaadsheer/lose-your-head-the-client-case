<script>
    import ArtikelInfoframe from '$lib/ArtikelInfoframe.svelte';
    import Header from '$lib/Header.svelte';
    import ArtikelKlein from '$lib/Artikelklein.svelte';
    import Footer from '$lib/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    const post = data.posts[0];
    import Makersblok from '$lib/Makersblok.svelte';
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

<ArtikelKlein data={data}/>
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
</style>