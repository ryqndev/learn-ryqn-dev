const authorizationCode = "";

function getMovies() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: authorizationCode,
        },
    };

    fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
}
