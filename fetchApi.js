const fetchApi = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    fetch(url).then((response) => {
        if(!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
        }).then((json) => {
            const div = document.getElementById('nasa-photo');
            if(`${json.media_type} === image`) {
                div.innerHTML = `
                    <img src="${json.url}" alt="${json.title}">
                    <h2>${json.title}</h2>
                    <small>${json.date}</small>
                    <p>${json.explanation}</p>
                `;
            }else {
                div.innerHTML = `
                    <video>
                        <source src="https:${json.url}" type="video/mp4">
                    </video>
                    <a href="https:${json.url}">Watch HERE</a>
                    <h2>${json.title}</h2>
                    <small>${json.date}</small>
                    <p>${json.explanation}</p>
                `;
            }
        }).catch((error) => {
            console.error(`${error}`);
        });
    }
fetchApi();