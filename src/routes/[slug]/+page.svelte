<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
    const post = data.posts[0];
    import Makersblok from '../components/Makersblok.svelte';
</script>

{#if post}
    <!-- @html means: there is html in this string, render it -->
    <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
    <h3>{@html post.title.rendered}</h3> 
    <p>{@html post.excerpt.rendered}</p>
    <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
    <p>{@html post.content.rendered}</p>
    <Makersblok author={post.authors[0]}></Makersblok>

{:else}
    <!-- This will show if no posts are available -->
    <p>No post available</p>
{/if}