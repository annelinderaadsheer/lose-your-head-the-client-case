<script>
    import ArtikelInfoframe from '../../components/artikel-infoframe.svelte';
    import Header from '../lib/Header.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
    const post = data.posts[0];
</script>

<Header data={data}/>

{#if post}

    <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
    <h3>{@html post.title.rendered}</h3> 
    <p>{@html post.excerpt.rendered}</p>
    <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" width="100" height="100">

    <ArtikelInfoframe post={post}></ArtikelInfoframe>
    <!-- @html means: there is html in this string, render it -->

    <p>{@html post.content.rendered}</p>

    <div>
        <img src={post.authors[0].avatar_url} alt={post.authors[0].display_name}>
        <p>{post.authors[0].display_name}</p>
        <p>{post.authors[0].job_title}</p>
        <p>{post.authors[0].description}</p>
    </div>
{:else}
    <p>No post available</p>
{/if}




<style>
    :global(body) {
        background-color: white;

        background-image: url('/ellipse.svg');
        background-repeat: no-repeat;
        background-size: 5000px 760px;
        background-position: -2000px -220px;
    }
</style>

