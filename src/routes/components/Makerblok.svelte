<script>
    export let post
</script>

<div class="makersblok">
    <div class="profile">
        <img src={post.authors[0].avatar_url} alt={post.authors[0].display_name}>
        <button>Bekijk profiel</button>
    </div>
    <article>
        <h1><p>{post.authors[0].display_name}</p></h1>
        <p>{post.authors[0].job_title}</p>
        <p>{post.authors[0].description}</p>
    </article>

</div>

<style>
    .makersblok {
        display: flex;
        border: 1px solid black;
        width: 50em;
        padding: 1em;
    }

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em;
    }

    button {
        border: none;
        background-color: lightgray;
        color: gray;
        padding: 5px;
    }
</style>