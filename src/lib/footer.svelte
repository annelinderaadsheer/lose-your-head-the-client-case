<script>
    import { onMount, onDestroy } from 'svelte';

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
        <li>
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

        <li>
            <h3 class="kop-4">NAVIGATIE</h3>
            <ul class="sub-list">
                <li><a href="/">Colofon</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Doneren</a></li>
                <li><a href="/">Meedoen</a></li>
                <li><a href="/">Over Red Pers</a></li>
            </ul>
        </li>

        <li>
            <h3 class="kop-4">SERVICE</h3>
            <ul class="sub-list">
                <li><a href="/">Tip de redactie</a></li>
                <li><a href="/">Meld een fout</a></li>
            </ul>
        </li>

        <li>
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
        .footer-layout {
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }

        .footer-layout li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 10px;
        }

        .kop-4 {
            margin: 0;
            padding: 10px 0;
        }

        .sub-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .sub-list li {
            margin: 5px 0;
        }

        footer {
            background-color: #f8f9fa;
            padding: 200px;
        }

        footer a{
            text-decoration: none;
            color: black;
        }
    </style>
</footer>

