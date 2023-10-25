function getStats() {
    fetch("https://disease.sh/v3/covid-19/states/California")
        .then(parseJSON)
        .then(renderResult);
}

function parseJSON(response) {
    return response.json();
}

function renderResult(result) {
    console.log(result);
    document.getElementById("result").innerHTML = `
        <div class="count">
            ${result.active} cases
            <br />
            <span>Last Updated: ${new Date(result.updated).toLocaleTimeString(
                "en-US"
            )}</span>
        </div>
        `;
}
