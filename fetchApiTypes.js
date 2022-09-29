//Synchronous
const fetchSync = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    fetch(url).then((response) => {
        if(!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
        }).then((json) => {
            console.log(json);
        }).catch((error) => {
            console.error(`${error}`);
        });
    }   
fetchSync();

//Asynchronous
const fetchAsync = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    }
    catch(error) {
        console.error(`${error}`);
    }
}
fetchAsync();