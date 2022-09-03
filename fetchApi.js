const fetchApi = () => {
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
fetchApi();