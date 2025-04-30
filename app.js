import { countries } from './countries.js'

const content = document.getElementById('cardContent');

function createCard(countryCard) {
    const card = document.createElement('div')
    card.classList.add('country-card')

    const country = document.createElement('h2')
    country.textContent = countries.country

    const capital = document.createElement('p')
    capital.textContent = countries.capital

    const population = document.createElement('p')
    population.textContent = countries.population

card.appendChild(country)
card.appendChild(capital)
card.appendChild(population)

return card

}

countries.forEach(countryCard => {
    const card = createCard(countryCard);
    content.appendChild(card);
  });




console.log(countries)
