import { countries } from './countries.js'

const content = document.getElementById('cardContent');

countries.forEach((card) => {
    const div = document.createElement("div")
    div.classList.add("country-card")
    div.innerHTML = `
            
        <h2>${card.country}</h2>
        <p>Capital: ${card.capital}</p>
        <p>Poblacion: ${card.population}</p>`;
        
    content.appendChild(div)
});



console.log(countries)
