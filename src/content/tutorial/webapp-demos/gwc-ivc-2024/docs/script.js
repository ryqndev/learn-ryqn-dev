/**
 * This function will make an API call to the TMDB api and return
 * a list of movies for us. After we get the data, we will call the
 * displayMovieRecommendations function and pass in the returned
 * movie data
 */
function getMovies() {
    const options = {
        headers: {
            Authorization: authorizationCode,
        },
    };

    // fetch is a function built into javascript that allows us to
    // "fetch" a resource from somewhere else online. In this case,
    // we're hitting the TMDB (themoviedb.org) API to get a list
    // of horror movies
    fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27",
        options
    )
        .then(parseResponseAsJSON)
        .then(displayMovieRecommendations);

    displayMovieRecommendations(SAMPLE_RESPONSE);
}

/**
 * this just converts the data from string into a json format
 */
function parseResponseAsJSON(response) {
    return response.json();
}

/**
 * this takes the returned movie data and loops through the movies
 * and injects html code into our website
 */
function displayMovieRecommendations(jsonResponse) {
    // The API returned data is formatted where our movie data array can be
    // found in the results portion of the object
    let movieList = jsonResponse.results;

    // For loop that will loop through the movies in our movie list that we
    // get from the movie api
    for (let i = 0; i < movieList.length; i++) {
        // create an object referencing each movie object
        let movie = movieList[i];

        // We can create HTML in multiple ways and we'll see two of them here.
        // The first way is to use JS functions like document.createElement
        let movieButton = document.createElement("button");
        movieButton.className = "movie-list-item";
        movieButton.id = `m-${movie.id}`;

        // the other way is to just set the innerHTML value and set it equal to the HTML code
        // we want it to be. there are tradeoffs to each
        movieButton.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">`;

        // when someone clicks the movie
        movieButton.addEventListener("click", function () {
            openMovieDetailPopup(movie);
        });

        // finally add the generated DOM element (a.k.a. HTML element) into our website
        document.getElementById("movie-list").appendChild(movieButton);
    }
}

/**
 * This is the function that actually generates the popup by using the same
 * methods as above with appending html elements to our DOM (website). We style
 * the dialog to be as big as the screen using CSS
 */
function openMovieDetailPopup(movie) {
    let modal = document.createElement("dialog");
    modal.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`;
    modal.innerHTML = `
        <div class="modal">
            <div class="description">
                <h1>${movie.title} (${movie.release_date.substring(0, 4)})</h1>
                <p>${movie.overview}</p>
            </div>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <div>
    `;
    modal.addEventListener("click", function () {
        modal.close();
    });
    document.body.appendChild(modal);

    // showModal() and .close() are functions built into the
    // HTML dialog component.
    // documentation here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    modal.showModal();
}
