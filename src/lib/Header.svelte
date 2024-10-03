<script>
    export let data;
     /** @type {import('./$types').PageData} */
     const post = data.posts[0];
</script>

<header>
<section class="boven">
    <ul>
        <li>Colofon</li>
        <li>Over</li>
        <li>Meedoen</li>
        <li>Contact</li>
    </ul>
</section>
<section class="midden">
        <div class="datum">
            {#if post}
              <p>{post.date}</p> 
            {/if}
            <p>PODIUM VOOR DE JOURNALISTIEK </p>
        </div>
    <img src="/RedPers_Logo_Cmyk_Black (1).webp" alt="RedPers logo" width="250" height="60">
    <ul>
        <li>Nieuwsbrief</li>
        <li><button>DONEREN</button></li>
        <li><img src="/free-search-icon-2903-thumb.png" alt="Search" width="20" height="20"></li>
    </ul>
    
</section>
<section class="onder">
    <ul>
        <li>Voorpagina</li>
        <li>Binnenland</li>
        <li>Buitenland</li>
        <li>Colums</li>
        <li>Economie</li>
        <li>Kunst en Media</li>
        <li>Podcast</li>
        <li>Politiek</li>
        <li>Wetenschap</li>
    </ul>
</section>
</header>

<style>

    .onder ul{
        display: flex;
        align-items: center;
        padding: 15px;
        justify-content: center;
        gap: 20px;
        list-style: none;
        border-bottom: 1px solid rgb(60, 60, 60);
        border-top: 1px solid rgb(60, 60, 60);
    }
    .midden{
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
    }

    .midden ul{
        display: flex; /* Flexbox toepassen op de ul om items naast elkaar te plaatsen */
    list-style: none; /* Verwijdert de standaard bullet points */
    margin: 0;
    cursor: pointer;
    padding: 0;
    margin-left: 50px;
    gap: 20px;
    }

    .datum p{
        margin: 0;
    }

    button{
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 2px;

    }
      
    .boven{
        background-color: black;
        display: flex;
        color: white;
        justify-content: end;
    }

    .boven ul {
    display: flex; /* Flexbox toepassen op de ul om items naast elkaar te plaatsen */
    list-style: none; /* Verwijdert de standaard bullet points */
    margin: 0;
    cursor: pointer;
    padding: 0;
}

.boven ul li {
    padding: 15px;
}

@media screen and (max-width: 600px) {
    .boven ul {
        display: none;
    }
}

</style>