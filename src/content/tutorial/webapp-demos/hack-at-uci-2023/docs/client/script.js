function clicked() {
    let userInput = document.getElementById("user-input").value;

    console.log("User inputted: ", userInput);

    fetch("http://localhost:5000/?location=" + userInput)
        .then((response) => response.json())
        .then((response) => {
            console.log("Yelp API Response", response);

            let businesses = response.businesses;

            for (let i = 0; i < businesses.length; i++) {
                document.getElementById("display").innerHTML += `
                <div>
                    <h1>${businesses[i].name}</h1>
                    <img class="image" src="${businesses[i].image_url}" />
                </div>
                `;
            }
        });
}
