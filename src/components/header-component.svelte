<script>
let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen;
};
</script>

<!-- Header desktop -->
<header>
    <div class="top-bar">
      <nav class="top-nav">
        <a href="/">Colofon</a>
        <a href="/">Over</a>
        <a href="/">Meedoen</a>
        <a href="/">Contact</a>
      </nav>
    </div>
  
    <div class="main-header">
      <div class="header-left">
        <time class="current-date">Datum</time>
        <span class="tagline">Podium voor de Journalistiek</span>
      </div>
  
      <div class="header-center">
        <a href="/" class="logo">
          <img src="Redpers-logo.webp" alt="REDPERS">
        </a>
      </div>
  
      <div class="header-right">
        <a href="https://redpers.substack.com/" class="newsletter-button">Nieuwsbrief</a>
        <a href="/" class="donate-button">Doneren</a>
        <a href="/" class="search-icon"><svg width="20px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_152)">
            <rect width="24" height="24" fill="white"/>
            <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"/>
            <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"/>
            </g>
            <defs>
            <clipPath id="clip0_15_152">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg></a>
      </div>
    </div>
  
    <nav class="main-nav">
      <ul>
        <li><a href="/">Voorpagina</a></li>
        <li><a href="/binnenland">Binnenland</a></li>
        <li><a href="/buitenland">Buitenland</a></li>
        <li><a href="/column">Columns</a></li>
        <li><a href="/economie">Economie</a></li>
        <li><a href="/kunst-media">Kunst & Media</a></li>
        <li><a href="/podcast">Podcasts</a></li>
        <li><a href="/politiek">Politiek</a></li>
        <li><a href="/wetenschap">Wetenschap</a></li>
      </ul>
    </nav>
  </header>

<style>

/* Algemene styling */
header {
background-color: #f7f7f5;
width: 100%;
}

/* Top navigatie */
.top-bar {
  background-color: black;
  padding: 0.5rem; 
  text-align: right;
}

.top-nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  font-size: 0.6rem; 
  font-family: 'Roboto', sans-serif;
  position: relative;
  left: -20px; 
}

.top-nav a:hover {
  text-decoration: underline;
}

/* Main header */
.main-header {
  display: flex;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
}

.header-left {
  font-size: 0.6rem;
  text-transform: uppercase;
}

.header-left time {
  font-weight: bold;
}

.header-left .tagline {
  display: block;
  
}

.header-center .logo img {
  height: 20px;
}

.header-right {
  display: flex;
  gap: 1rem;
}

.newsletter-button {
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.6rem;
  font-family: 'Roboto', sans-serif;
}

.donate-button {
  padding: 0.5rem 1.5rem;
  background-color: #E85340;
  color: white;
  text-decoration: none;
  font-size: 0.6rem; 
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
}

.search-icon {
  margin-top: 5px;
}

/* Main navigatie */
.main-nav {
  text-align: center;
  padding: 0.25rem 0;
  font-family: 'Roboto', sans-serif;
  justify-content: center; 
  align-items: center; 
  padding: 0 10px;
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
}

.main-nav ul {
  list-style-type: none;
  margin: 0;
  display: flex; 
  justify-content: center; 
}

.main-nav ul li {
  margin-right: 1rem; 
}

.main-nav ul li:last-child {
  margin-right: 0; 
}

.main-nav ul li a {
  text-decoration: none;
  font-size: 0.6rem;
}

.main-nav ul li a:hover {
  text-decoration: underline;
}

/* Responsive Design */

/* Mobile (max-width: 600px) */
@media (max-width: 600px) {
  .main-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-center .logo img {
    height: 40px;
  }

  .header-right {
    width: 100%;
    justify-content: space-between;
  }

  .main-nav ul li {
    display: block;
    margin: 0.5rem 0;
  }

  .main-nav ul {
    text-align: left;
  }
}

/* Tablet (max-width: 1024px) */
@media (max-width: 1024px) {
  .main-header {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .header-center .logo img {
    height: 25px;
  }

  .header-right {
    flex-direction: column;
    gap: 0.5rem;
  }

  .main-nav ul li {
    margin-right: 1rem;
  }

  .main-nav ul {
    text-align: center;
  }
}

/* Desktop (min-width: 1025px) */
@media (min-width: 1025px) {
  .main-header {
    flex-direction: row;
    justify-content: space-between;
  }

  .header-center .logo img {
    height: 25px;
  }

  .main-nav ul li {
    display: inline;
    margin-right: 1.5rem;
  }
}
</style>