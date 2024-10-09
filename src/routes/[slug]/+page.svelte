<script>
    import ArtikelInfoframe from '../../components/artikel-infoframe.svelte';
    import Header from '../../lib/Header.svelte';
    import ArtikelKlein from '$lib/Artikelklein.svelte';
    import Footer from '$lib/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    const post = data.posts[0];
    import Makersblok from '../components/Makersblok.svelte';
</script>

<Header/>
<ArtikelInfoframe post={post}></ArtikelInfoframe>

<main>
    {#if post}
    <!-- @html means: there is html in this string, render it -->

    <article>
        <p>{@html post.content.rendered}</p>
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

    .meta {
        font-family: var(--font-main);
        font-style: var(--font-style);
        font-size: 11px;
        line-height: 140%;
        letter-spacing: 10%;
    }

    .tussenkop{
        font-family: var(--font-main);
        font-style: black;
        font-size: 18px;
        line-height: 150%;
    }

    .broodtekst{
        font-family: var(--font-alt);
        font-style: var(--font-style);
        font-size: var(--font-size);
        line-height: 170%;
    }

    .broodtekst-italic {
        font-family: var(--font-alt);
        font-style: var(--font-style-italic);
        font-size: var(--font-size);
        line-height: 170%;
    }

    .uitgelicht{
        font-family: var(--font-alt);
        font-style: var(--font-style-bold);
        font-size: 38px;
        line-height: 100%;
    }

</style>

