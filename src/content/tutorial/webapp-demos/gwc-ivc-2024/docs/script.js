function getMovies() {
    const options = {
        headers: {
            Authorization: authorizationCode,
        },
    };

    fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27",
        options
    )
        .then(parseResponseAsJSON)
        .then(displayMovieRecommendations);

    displayMovieRecommendations(SAMPLE_RESPONSE);
}

function parseResponseAsJSON(response) {
    return response.json();
}

function displayMovieRecommendations(jsonResponse) {
    console.log("Parsed Response in JSON format:", jsonResponse);
    console.log(
        "Parsed Response in JSON format:",
        document.getElementById("movie-list")
    );

    document.getElementById("movie-list").innerHTML = "";

    let movieList = jsonResponse.results;

    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];

        document.getElementById("movie-list").innerHTML += `
            <button class="movie-list-item" id="m-${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            </button>
        `;
    }

    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];
        document
            .getElementById("m-" + movie.id)
            .addEventListener("click", function () {
                openMovieDetailPopup(movie);
            });
    }
}

function openMovieDetailPopup(movie) {
    console.log(movie);
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

    modal.showModal();
}
