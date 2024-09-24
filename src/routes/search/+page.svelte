<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
</script>

{#if data.posts}
    {#each data.posts as post}
        <h3>{@html post.title.rendered}</h3>
        <p>{@html post.excerpt.rendered}</p>
        <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
    {/each}
{:else}
    <!-- This will show if no posts are available -->
    <p>No posts available</p>
{/if}