<style>
    .open-popup-btn {
        cursor: pointer;
        display: block;
        margin: 2rem auto;
        z-index: 1000;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: none;
        align-items: center;
        justify-content: center;
    }

    article.popup {
        background-color: white;
        border: 2px solid black;
        padding: 4rem;
        max-width: 500px;
        position: relative;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        /* display: container; */
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
    }

    .popup h2 {
        font-size: 3.2rem;
        margin: 0.2rem 0.2rem;
        text-align: left;
        margin-bottom: 2rem;
        font-family: 'Source serif 4';
    }

    .popup p {
        margin-bottom: 1rem;
        color: #757575;
        font-size: 1rem;
        line-height: 1.2;
        letter-spacing: 0.02em;
    }

    .subscribe-btn {
        background-color: black;
        color: white;
        padding: 1rem 1.5rem;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 1.2rem;
        width: 100%;
        border-radius: 2px;
    }

    .subscribe-btn:hover {
        background-color: #D5302D;
        transition: background-color 0.3s ease;
    }

    #popup-toggle:checked ~ .overlay {
        display: flex;
    }

    #popup-toggle {
        display: none;
    }
</style>

<input type="checkbox" id="popup-toggle">

<label class="open-popup-btn" for="popup-toggle">Nieuwsbrief</label>

<section class="overlay">
    <article class="popup">
        <label class="close-btn" for="popup-toggle">&times;</label>
        <h2>Nieuwsbrief</h2>
        <p>
            Elke drie weken houden we je op de hoogte van wat we schreven en wat we 
            lazen in de Red Pers-nieuwsbrief.
        </p>
        <button class="subscribe-btn">Schrijf je hier in!</button>
    </article>
</section>
