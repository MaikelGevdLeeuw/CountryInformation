import axios from "axios";

console.log('Hallo daar!');



const countryList = document.getElementById("countries");
const errorMessage = document.getElementById("error")

async function fetchCountries(){
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,flags,region");
        const countries = response.data.map(country => ({
            name: country.name.common,
            flag: country.flags.svg,
            population: country.population,
            region: country.region
        }));
        return countries;
    } catch  (e) {
        console.error(e);
        return null;
    }
}


fetchCountries().then((countries) => {
    const sortedCountries = countries.sort((a, b) => a.population - b.population);
    for (let i = 0; i < sortedCountries.length ; i++){
        let regionClass = sortedCountries[i].region.toLowerCase().replace(" ", "-");
        countryList.innerHTML += ` <li class="${regionClass}"> <img src="${sortedCountries[i].flag}"> <span class="country-name">${sortedCountries[i].name}</span> <br> Has a population of ${sortedCountries[i].population} people</li>`;
    }
});





