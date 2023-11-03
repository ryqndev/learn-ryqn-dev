const SPOONACULAR_API_KEY = "a2db219c418e41c88f4d4fdd14424ac9";

function getRecipe() {
    let ingredients = document.getElementById("ingredients").value;

    fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}&number=10&addRecipeInformation=true`
    )
        .then((res) => res.json())
        .then(renderRecipe);
}

function renderRecipe(recipeData) {
    console.log(recipeData);
    if (recipeData.totalResults < 1) {
        document.getElementById("results").innerHTML =
            "No recipes found for these ingredients";
        return;
    }

    // clear existing html in results sections
    document.getElementById("results").innerHTML = "";

    for (let idx = 0; idx < recipeData.results.length; idx++) {
        let recipe = recipeData.results[idx];

        document.getElementById("results").innerHTML += `
            <div class="result" id="result-${idx}">
                <h2>
                ${recipe.title}
                </h2>
                ${recipe.readyInMinutes} mins
                <br />
                ${recipe.diets}
            </div>
        `;
    }
    // Why not put into 1 for loop? because the way addEventListener works with .innterHTML
    // i need to generate all the HTML first, and then attach the onclicks so that when I += the innterHTML, it
    // won't rewrite it and remove the listeners
    for (let idx = 0; idx < recipeData.results.length; idx++) {
        let recipe = recipeData.results[idx];

        document
            .getElementById("result-" + idx)
            .addEventListener("click", function () {
                showRecipe(recipe);
            });
    }
}

function showRecipe(recipe) {
    console.log(recipe);
    let popup = new Popup({
        title: recipe.title,
        content: `
            An example popup.
            Supports multiple lines.${recipe}`,
        showImmediately: true,
    });
}
