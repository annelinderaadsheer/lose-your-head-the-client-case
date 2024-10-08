<script>
    export let post

    const dateFormat = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
</script>

<header>
    <div class="container">
        <article class="summary">
            <p class="catagory bold">{@html post.yoast_head_json.schema["@graph"][0].articleSection[0]}</p>
            <h1 class="artikel-kop">{@html post.title.rendered}</h1>
            {@html post.excerpt.rendered}
            <div class="author-and-read-time">
                <p>Door <span class="bold">{post.authors[0].display_name}</span></p>
                <p>{post.yoast_head_json.twitter_misc["Geschatte leestijd"]}</p>
            </div>
        </article>
        <article class="img-container">
            <img width="850" height="400" src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding">
            <p>{(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}</p>
        </article>
    </div>
</header>

<style>
    * {
        text-align: center;
    }

    header {
        width: 100vw;
        
        background-image: url('/ellipse.svg');
        background-repeat: no-repeat;
        background-size: 5000px 760px;
        background-position: -2000px -220px;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--main-width);
        margin: var(--margin-center);
    }

    .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2em 0;
    }

    img {
    max-width: 100%;
    height: auto;
}

    .bold {
        font-weight: bold;
    }

    .catagory {
        color: var(--accent-color1);
        text-transform: uppercase;
        font-size: small;
    }

    @media only screen and (min-width: 960px) {
        .container {
            flex-direction: row;
            justify-content: center;
            gap: 2em;
            padding-top: 4em;
            max-width: var(--main-width);
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