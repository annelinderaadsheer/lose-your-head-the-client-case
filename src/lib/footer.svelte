<script>
    import { onMount, onDestroy } from 'svelte';
    import { scale } from 'svelte/transition';

    let year = new Date().getFullYear();

    const updateYear = () => {
        const currentYear = new Date().getFullYear();
        if (currentYear !== year) {
            year = currentYear;
        }
    };

    let interval;

    onMount(() => {
        interval = setInterval(updateYear, 1000 * 60 * 60 * 24); // Check eens per dag
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>
<footer>
    <img src="/RedPers_Logo_Cmyk_Black.webp" alt="Red-Pers Logo" class="scaled-img">
    <ul class="footer-layout">
        <li class="kopjes">
            <h3 class="kop-4">RUBRIEKEN</h3>
            <ul class="sub-list">
                <li><a href="/">Binnenland</a></li>
                <li><a href="/">Buitenland</a></li>
                <li><a href="/">Columns</a></li>
                <li><a href="/">Economie</a></li>
                <li><a href="/">Kunst & Media</a></li>
                <li><a href="/">Podcast</a></li>
                <li><a href="/">Politiek</a></li>
                <li><a href="/">Wetenschap</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">NAVIGATIE</h3>
            <ul class="sub-list">
                <li><a href="/">Colofon</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Doneren</a></li>
                <li><a href="/">Meedoen</a></li>
                <li><a href="/">Over Red Pers</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">SERVICE</h3>
            <ul class="sub-list">
                <li><a href="/">Tip de redactie</a></li>
                <li><a href="/">Meld een fout</a></li>
            </ul>
        </li>

        <li class="kopjes">
            <h3 class="kop-4">MEER RED PERS</h3>
            <ul class="sub-list">
                <li><a href="/">Nieuwsbrief</a></li>
                <li><a href="/">LinkedIn</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">X Twitter</a></li>
            </ul>
        </li>
    </ul>
    <p>© {year} Stichting Red Pers - Alle rechten voorbehouden</p>
    <ul>
        <li>Privacystatement</li>
        <li>Cookiebeleid</li>
        <li>Copyright</li>
    </ul>

    <style>
        .scaled-img{
            padding: 0;
    margin: 0;
    width: auto;
    height: auto; 
    max-width: 100%; 
    max-height: 200px;
    transform: scale(0.5);
    transform-origin: top left;

        }
        footer {
            width:100%;
            background-color: #f5f5f5;
            padding: 20px;
        }

        .footer-layout{
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .footer-layout h3{
            padding: 0;
            margin: 0;
        }

        .sub-list {
            list-style: none;
            padding-left: 20px;
        }

        .sub-list a{
            text-decoration: none;
            color: #333;
        }

        .kopjes{
            margin-bottom: 20px;
        }

        @media (min-width: 400px) and (max-width: 767px) {
            .footer-layout{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }

        @media (min-width: 481px) and (max-width: 767px) {
}

@media (min-width: 768px) and (max-width: 1024px) {
    /* Stijlen voor tablets in portretmodus */
}

@media (min-width: 1025px) and (max-width: 1280px) {
    /* Stijlen voor tablets in landschapsmodus en kleine laptops */
}

@media (min-width: 1281px) and (max-width: 1440px) {
    /* Stijlen voor laptops en desktops */
}

@media (min-width: 1441px) {
    /* Stijlen voor grote desktops */
}

    </style>
</footer>

