const fetchAsync = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        const div = document.getElementById('nasa-photo');
            div.innerHTML = `
                <img src="${json.url}" alt="${json.title}">
                <h2>${json.title}</h2>
                <small>${json.date}</small>
                <p>${json.explanation}</p>
            `;
    }catch (error) {
        console.error(`${error}`);
    }
}
fetchAsync();