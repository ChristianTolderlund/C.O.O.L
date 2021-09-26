const url = "https://kea2021int-f4d0.restdb.io/rest/exhibition";

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
    // handleData(data);
})
.catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
});