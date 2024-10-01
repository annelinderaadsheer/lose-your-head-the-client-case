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
        <p class="catagory bold">{post.yoast_head_json.schema["@graph"][0].articleSection[0]}</p>
        <h1>{@html post.title.rendered}</h1>
        {@html post.excerpt.rendered}
        <div class="author-and-read-time">
            <p>Door <span class="bold">{post.authors[0].display_name}</span></p>
            <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
        </div>
    </div>
    <div class="img-container">
        <img src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
        <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
    </div>
</article>

<style>
    :global(body) {
        background-color: white;

        background-image: url('/ellipse.svg');
        background-repeat: no-repeat;
        background-size: 5000px 760px;
        background-position: -2000px -380px;
    }

    * {
        text-align: center;
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2em 0;
    }

    img {
        width: 100%;
        aspect-ratio: 85/50;
        object-fit: cover;
    }

    .bold {
        font-weight: bold;
    }

    .catagory {
        color: var(--accent-color1);
        text-transform: uppercase;
    }

    @media only screen and (min-width: 960px) {
        article {
            flex-direction: row;
            gap: 2em;
        }

        * {
            text-align: start;
        }

        .img-container {
            display: flex;
            flex-direction: column-reverse;
            align-items: end;
            width: 55%;
        }

        .summary {
            width: 45%;
        }

        .author-and-read-time {
            display: flex;
            justify-content: space-between;
        }
    }
</style>