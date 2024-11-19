<script>
    export let placeholder;
    export let name = 'q'; // optional custom parameter with default value 'q'
    export let resultsPage;
    export let alwaysOpen = false;
    export let value = '';

    let searchBar;
    let searchButton;

    function handleClick(event) {
        if (searchBar.classList.contains('closed')) {
            // If the search bar is closed, open it and don't search
            event.preventDefault();
            searchBar.focus();
            searchBar.classList.remove('closed');
        }
    }

    function handleBlur(event) {
        // If the user clicks anywhere other than the search button, close the search bar
        if (event.relatedTarget !== searchButton) {
            searchBar.classList.add('closed');
        }
    }
</script>

<form action={resultsPage}>
    {#if alwaysOpen}
        <input class="search-bar" placeholder={placeholder} name={name} value={value}>
        <button type="submit" class="search-button">
            <img src="/search-svgrepo-com.svg" alt="search icon">
        </button>
    {:else}
        <input on:blur={handleBlur} on:focus={handleClick} bind:this={searchBar} class="search-bar closed" placeholder={placeholder} name={name} value={value}>
        <button on:click={handleClick} bind:this={searchButton} type="submit" class="search-button">
            <img src="/search-svgrepo-com.svg" alt="search icon">
        </button>
    {/if}
</form>

<style>
    form {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
    }

    .search-bar {
        width: 100%;
        height: 2em;
        transition: width 500ms;
    }

    .closed {
        border: none;
        width: 0;
    }

    button {
        filter: invert(1);
    }

    .closed + button {
        filter: none;
    }

    img {
        width: auto;
        height: 2.3em;
    }
</style>