window.addEventListener('load', async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    let title = 'NASA Photo of the Day';
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        const div = document.getElementById('nasa-photo');
        if(`${json.media_type}` === 'image') {
            document.querySelector('h1').textContent = title;
            div.innerHTML = `
                <img src="${json.url}" alt="${json.title}">
                <h2>${json.title}</h2>
                <small>${json.date}</small>
                <p>${json.explanation}</p>
            `;
        }else {
            const titleForVideo = title.replace(/Photo/, 'Video');
            document.querySelector('h1').textContent = titleForVideo;
            div.innerHTML = `
                <iframe src="${json.url}"></iframe>
                <a href="${json.url}">Watch HERE</a>
                <h2>${json.title}</h2>
                <small>${json.date}</small>
                <p>${json.explanation}</p>
            `;
        }
    }catch (error) {
        console.error(`${error}`);
    }
});