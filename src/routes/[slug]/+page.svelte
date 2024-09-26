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
</script>

{#if post}
    <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
    <h3>{@html post.title.rendered}</h3> 
    <p>{@html post.excerpt.rendered}</p>
    <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
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


