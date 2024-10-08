<script>
    import ArtikelInfoframe from '../../components/artikel-infoframe.svelte';
    import Header from '../../lib/Header.svelte';
    import ArtikelKlein from '$lib/Artikelklein.svelte';
    import Footer from '$lib/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
    const post = data.posts[0];
</script>

<Header data={data}/>
<ArtikelInfoframe post={post}></ArtikelInfoframe>

<main>
    {#if post}
    <!-- @html means: there is html in this string, render it -->
    <article>
        <p>{@html post.content.rendered}</p>
    </article>

    <div>
        <img src={post.authors[0].avatar_url} alt={post.authors[0].display_name}>
        <p>{post.authors[0].display_name}</p>
        <p>{post.authors[0].job_title}</p>
        <p>{post.authors[0].description}</p>
    </div>
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

