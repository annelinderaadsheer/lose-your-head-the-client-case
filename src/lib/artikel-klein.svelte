<script>
    export let data;
    export let numberOfPosts = 1;
</script>

{#if data.posts}
    {#each data.posts.slice(0, numberOfPosts) as post}
    <a href="/" class="article-link" aria-label="">
        <article>
            <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
            <h3>{@html post.title.rendered}</h3>
            <p>door <strong>{@html post.yoast_head_json.author}</strong></p>
        </article>
    </a>
    {/each}
    
{:else}
    <p>No posts available</p>
{/if}

<style>
    .article-link {
        text-decoration: none; 
    }

    article {
        max-width: 260px;
        margin: 10px;
        height: 350px;
        border: 1.6px solid #7B7B7A;
        cursor: pointer;
    }

    article img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    article h3 {
        padding: 10px;
        margin-bottom: 50px;
        margin-top: 0;
        color: black;
    }

    article p {
        padding: 10px;
        color: #7B7B7A;
    }
</style>
