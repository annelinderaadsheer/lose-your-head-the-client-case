<script>
    export let author
</script>

<div class="makersblok">
    <div class="profile">
        <img src={author.avatar_url} alt={author.display_name}>
        <a href="/author/{author.slug}" class="hidden-on-mobile">Bekijk profiel</a>
    </div>
    <article>
        <div>
            <h1><p>{author.display_name}</p></h1>
            <p>{author.job_title}</p>
            <p class="hidden-on-mobile">{author.description}</p>
        </div>
        <a href="/author/{author.slug}"  class="hidden-on-desktop">&gt;</a>
    </article>

</div>

<style>
    .makersblok {
        display: flex;
        align-items: center;
        border: 1px solid black;
        max-width: 50em;
        padding: 1em;
    }

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em;
        height: 100%;
        max-width: 10em;
    }

    article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: gray;
        background-color: lightgray;
        padding: 5px;
    }

    .hidden-on-mobile {
        display: none;
    }

    @media only screen and (min-width: 600px) {
        .hidden-on-mobile {
            display: unset;
        }
        .hidden-on-desktop {
            display: none;
        }
    } 
</style>