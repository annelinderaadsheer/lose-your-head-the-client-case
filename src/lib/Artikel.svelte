<script>
    export let post

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
</script>

<a href="/{post.slug}">
    <article>
        <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" width="25em" height="15em">
        <div class="title">
            <h1 class="artikel-kop">{@html post.title.rendered}</h1>
        </div>
        <div class="info-text">
            <p>{post.yoast_head_json.author}</p>
            <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
            <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
        </div>
    </article>
</a>

<style>
    article {
        border: var(--border);
        width: 25em;
        height: 30em;
    }

    img {
        width: 25em;
        height: 15em;
        border-bottom: var(--border);
    }

    h1 {
        font-family: var(--font-alt);
        font-weight: var(--font-style-bold);
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.25px;
    }

    .title {
        width: 25em;
        height: 11em;
        padding: 0.5em;
        overflow: hidden;
    }

    .info-text {
        display: flex;
        height: 2em;
        border-top: var(--border);
    }
</style>
