<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };
    
    import Footer from '$lib/Organism/Footer.svelte';
    import Header from '$lib/Organism/Header.svelte';
    import Artikel from '$lib/Organism/Artikel.svelte';

</script>

<Header/>

<main>
    {#if data.posts}
        {#each data.posts as post}
            <!-- @html means: there is html in this string, render it -->
            <Artikel post={post} />
        {/each}
    {:else}
        <!-- This will show if no posts are available -->
        <p>No posts available</p>
    {/if}
</main>

<Footer />

<style>
    main {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 1em;
        justify-content: center;
    }
</style>