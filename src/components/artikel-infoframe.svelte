<script>
    export let post

    const dateFormat = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
</script>

<article>
    <div class="summary">
        <p class="catagory">{post.yoast_head_json.schema["@graph"][0].articleSection[0]}</p>
        <h1>{@html post.title.rendered}</h1>
        <p>{@html post.excerpt.rendered}</p>
        <div class="author-and-read-time">
            <p>Door <span class="bold">{post.authors[0].display_name}</span></p>
            <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
        </div>
    </div>
    <div class="img-container">
        <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
        <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
    </div>
</article>

<style>
    article {
        display: flex;
        gap: 3em;
        width: 100%;
    }

    .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
    }

    .img-container {
        width: 55%;
    }

    .author-and-read-time {
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 100%;
        aspect-ratio: 85/50;
        object-fit: cover;
    }

    .bold {
        font-weight: bold;
    }
</style>