import { countries } from './countries.js';

const content = document.getElementById('cardContent');
const searchInput = document.getElementById('search-input');

// Función para crear una tarjeta de país
function createCard({ country, capital, population }) {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const countryElement = document.createElement('h2');
    countryElement.textContent = country;

    const capitalElement = document.createElement('p');
    capitalElement.textContent = `Capital: ${capital}`;

    const populationElement = document.createElement('p');
    populationElement.textContent = `Población: ${population}`;

    card.append(countryElement, capitalElement, populationElement);
    return card;
}

// Función para mostrar los países en el contenedor
function displayCountries(countriesToDisplay) {
    const countryCards = countriesToDisplay.map(createCard);
    content.replaceChildren(...countryCards);
}

// Función para filtrar países según el término de búsqueda
function filterCountries(searchTerm) {
    return countries.filter(({ country, capital }) =>
        country.toLowerCase().includes(searchTerm) ||
        capital.toLowerCase().includes(searchTerm)
    );
}

// Inicializar la lista de países al cargar la página
displayCountries(countries);

// Agregar evento para filtrar mientras se escribe en el input
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCountries = filterCountries(searchTerm);
    displayCountries(filteredCountries);
});

