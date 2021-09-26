const url = "https://kea2021int-f4d0.restdb.io/rest/artworks";

// The API-key
const options = {
    headers: {
        "x-apikey": "614cd5acdfa7346e2f968fcd",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        //We have the data
        console.log(data);
        handleData(data);
    })
    .catch((e) => {
        //Woops, something went wrong
        console.error("An error occured:", e.message);
    });

function handleData(data) {
    data.forEach((artworks) => {
        console.log(artworks);
        // 1. make a template
        // 2. grab it 
        const template = document.querySelector(".archive_template").content;
        // 3. clone it
        const clone = template.cloneNode(true);
        // 4. populate with data
        clone.querySelector(".archive_tile_artwork").textContent = artworks.artwork_title;
        clone.querySelector(".archive_tile_artist").textContent = artworks.artist_name;
        clone.querySelector(".artwork_date").textContent = artworks.artwork_date;
        clone.querySelector(".artwork_description").textContent = artworks.description;
        clone.querySelector(".artwork_type").textContent = artworks.artwork_type;

        // 5. append it to the DOM
        const parent = document.querySelector(".archive_content");
        parent.appendChild(clone);
    });
}