<script>
    /** @type {import('./$types').PageData} */
    const dateFormat = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric'
    };
    import { categoriesData } from "$lib/index.js";
</script>

<header>
    <div class="klein-scherm">
        <section class="mobile-header">
            <nav>
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li>
                            <a href="/">Voorpagina</a>
                        </li>
                        {#each categoriesData as category}
                            <li>
                                <a href="/categorie/{category.slug}">{category.name}</a>
                            </li>
                        {/each}
                        <div class="boven-mobile">
                            <li>Colofon</li>
                            <li>Over</li>
                            <li>Meedoen</li>
                            <li>Contact</li>
                        </div>
                    </ul>
                </div>
            </nav>
            <a href="/">
                <img src="/RedPers_Logo_Cmyk_Black (1).webp" alt="RedPers logo" width="150" height="35" />
            </a>
            <a href="/search" class="mobile-search-icon">
                <img src="/free-search-icon-2903-thumb.png" alt="Search" width="25" height="25" />
            </a>
        </section>

        <section class="mobile-datum">
            <div class="datum uppercase">
                <p>{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                <p class="uppercase">podium voor de journalistiek</p>
            </div>
        </section>
    </div>

    <div class="groot-scherm">
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
                <p class="datum-bold uppercase">{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                <p class="uppercase">Podium voor de journalistiek</p>
            </div>
            <a href="/">
                <img src="/RedPers_Logo_Cmyk_Black (1).webp" alt="RedPers logo" width="160" height="40" />
            </a>
            <ul>
                <li>Nieuwsbrief</li>
                <li><button>Doneren</button></li>
                <li>
                    <a href="/search">
                        <img src="/free-search-icon-2903-thumb.png" alt="Search" width="20" height="20" />
                    </a>
                </li>
            </ul>
        </section>
        <section class="onder">
            <ul>
                <li><a href="/">Voorpagina</a></li>
                {#each categoriesData as category}
                    <li><a href="/categorie/{category.slug}">{category.name}</a></li>
                {/each}
            </ul>
        </section>
    </div>
</header>

<style>
    #menuToggle {
        display: block;
        position: relative;
        top: 5px;
        left: 10px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }

    #menuToggle input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0; 
        z-index: 2; 
        -webkit-touch-callout: none;
    }

    #menuToggle span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        border-radius: 3px;
        background-color: black;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                    opacity 0.55s ease;
    }

    #menuToggle span:first-child {
        transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
    }

    #menuToggle input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    #menuToggle input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
    }

    #menu {
        flex-direction: column;
        position: absolute;
        width: 175px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        outline: 1px solid black;
        height: 500px;
        padding-top: 125px;
        background: #F7F7F5;
        list-style-type: none;
        -webkit-font-smoothing: antialiased; 
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    }

    #menu li {
        padding: 5px ;
    }

   .boven-mobile {
        border-top: 1px solid rgba(154, 154, 154, 0.679);
        font-size: smaller;
        font-weight: bold;
   }

    #menuToggle input:checked ~ ul {
        transform: none;
    }

    .mobile-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid rgba(154, 154, 154, 0.679);
    }

    .mobile-datum {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: smaller;
        border-bottom: 1px solid rgba(154, 154, 154, 0.679);
    }

    .onder ul {
        display: flex;
        align-items: center;
        padding: 15px;
        justify-content: center;
        gap: 20px;
        list-style: none;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        font-family: var(--menu-item);
        font-size: 14px;
    }

    .midden {
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
    }

    .midden ul {
        display: flex; 
        list-style: none; 
        margin: 0;
        cursor: pointer;
        padding: 0;
        margin-left: 50px;
        gap: 20px;
        font-family: var(--menu-item);
    }

    .datum {
        display: flex;
        flex-direction: column; 
        margin-right: 20px;
    }

    .datum p {
        margin: 0;
        font-family:var(--menu-item);
        font-size: 14px;
    }

    .datum-bold {
        font-weight: bold;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 15px; 
        padding: 0;
        margin: 0;
    }

    .boven li:hover {
    color: #000000;
    background-color: #f0f0f0;
    }

    ul a:hover {
    color: #ff0000;
    background-color: #f0f0f0;
    }

    ul li {
        display: flex;
        align-items: center;
    }

    button {
        background-color: #E85340;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        width: 110px;
        height: 30px;
    }

    .boven {
        background-color: black;
        display: flex;
        color: white;
        justify-content: end;
    }
    
    .boven ul {
        display: flex;
        list-style: none;
        margin: 0;
        cursor: pointer;
        padding: 0;
    }

    .boven ul li {
        padding: 15px;
        font-family: var(--menu-item);
        font-size: 14px;
    }

    @media (max-width: 786px) {
        .groot-scherm {
            display: none;
        }

        .boven ul {
            display: none; 
        }
    }

    @media (min-width: 786px) {
        .klein-scherm {
            display: none;
        }
    }
</style>