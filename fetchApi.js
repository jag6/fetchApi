const fetchNasa = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    const fetchJson = fetch(url);
    fetchJson.then((response) => {
        if(!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
        }).then((json) => {
            const div = document.getElementById('nasa-photo');
            div.innerHTML = `
                <img src="${json.url}" alt="${json.title}">
                <h2>${json.title}</h2>
                <small>${json.date}</small>
                <p>${json.explanation}</p>
            `;
        }).catch((error) => {
            console.error(`${error}`);
        });
    }
fetchNasa();

const fetchWeather = () => {
    const url = 'https://handlers.education.launchcode.org/static/weather.json';
    const fetchJson = fetch(url);
    fetchJson.then((response) => {
        if(!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
        }).then((json) => {
            const div = document.getElementById('weather-conditions');
            div.innerHTML = `
                <ul>
                    <li>Temperature: ${json.temp}</li>
                    <li>Wind Speed: ${json.windSpeed}</li>
                    <li>Status: ${json.status}</li>
                    <li>Chance of Precipitation: ${json.chanceOfPrecipitation}</li>
                </ul>
            `;
        }).catch((error) => {
            console.error(`${error}`);
        });
    }
fetchWeather();