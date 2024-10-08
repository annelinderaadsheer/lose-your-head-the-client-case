<script>

    /** @type {import('./$types').PageData} */
    export let data;

    const dateFormat = {
        month: 'short',
        day: 'numeric',
    };

    import Footer from '$lib/Footer.svelte';
    import Header from '../../lib/Header.svelte';
</script>

<Header/>

<main>
    <h2 class="category-title">

    </h2>
  
    <form class="search-form" action="/search">
      <input class="search-input " name="q" value="" size="1" placeholder="Zoeken...">
      <button type="submit" class="search-button">
      <a href="/">
        <img src="/free-search-icon-2903-thumb.png" alt="Search" width="20" height="20" />
      </a>
      </button>
    </form>
  </main>

<style>
    
    main .search-form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }

    input {
        width: 30rem;
        height: 2.5rem;
    }

    .search-button {
        background-color: var(--text-color);
        color: var(--article-background-color);
        padding: 10px 20px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        fill: var(--article-background-color);
        transition: 0.3s;
        border: var(--border);
        cursor: pointer;
    }

    a{
        color: var(--background-color);
    }
  
    .search-input {
        width: 370px;
        padding: 0px 10px;
        margin-right: 20px;
        font-family: var(--font-alt);
        font-size: 16px;
        font-weight: 400;
    }

    @media screen and (min-width: 300px) and (max-width:900px) {
        .search-input {
        font-size: 12px;
        width: 280px;
        }
    
        .search-button {
        width: max-content;
        }
    }
  
    @media screen and (max-width:500px) {
        .search-button {
        font-size: 13px;
        padding: 5px 10px;
        }
    
        .search-input {
        padding: 10px;
        width: 100%;
        }
    }
</style>