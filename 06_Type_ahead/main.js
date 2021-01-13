const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches (word, cities) {
    const regex = new RegExp(word, 'gi');
    return cities.filter(ct => ct.city.match(regex) || ct.state.match(regex));
}

function displayMatches () {
    const displayArray =  findMatches(this.value, cities);
    const html = displayArray.map(pl => {
        const regex = new RegExp(this.value, 'gi');
        const cName = pl.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const eName = pl.city.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cName}, ${eName}</span>
                <span class="population">${pl.population}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);