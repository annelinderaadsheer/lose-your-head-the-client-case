<script>
    export let data:
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
    <div class="datum"></div>
    <img src="" alt="">
    <ul>
        <li>Nieuwsbrief</li>
        <li><button></button></li>
        <li><img src="" alt=""></li>
    </ul>
    
</section>
<section class="onder"></section>
</header>

<style>
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
</style>