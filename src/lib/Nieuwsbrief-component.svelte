<script>
    let showPopup = false;
  
    function togglePopup() {
      showPopup = !showPopup;
    }
  </script>
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  
    .popup {
      background-color: white;
      border: 1px solid;
      padding: 2rem;
      max-width: 400px;
      text-align: center;
      position: relative;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      border: none;
      background: none;
      color: black;
    }
  
    .subscribe-btn {
      background-color: black;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      margin-top: 1rem;
      font-size: 1rem;
      width: 100%;
    }
  
    .popup h2 {
      font-size: 2rem;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      text-align: left;
      font-family: Tiempos, 'Source serif 4';
    }

    .popup p {
      text-align: left;
      font-size: 1rem;
      color: #757575;
    }
  
    .open-popup-btn {
      padding: 0.75rem 0.75rem;
      cursor: pointer;
      font-size: 1rem;
      background-color: white;
      border: none;
      border-radius: 4px;
    }

  </style>
  
  <button class="open-popup-btn" on:click={togglePopup}>Nieuwsbrief</button>

  {#if showPopup}
    <div class="overlay" on:click={togglePopup}>
      <div class="popup" on:click|stopPropagation>
        <button class="close-btn" on:click={togglePopup}>&times;</button>
        <h2>Nieuwsbrief</h2>
        <p>
          Elke drie weken houden we je op de hoogte van wat we schrijven en wat we 
          lezen in de Red Pers-nieuwsbrief.
        </p>
        <button class="subscribe-btn">Schrijf je in!</button>
      </div>
    </div>
  {/if}