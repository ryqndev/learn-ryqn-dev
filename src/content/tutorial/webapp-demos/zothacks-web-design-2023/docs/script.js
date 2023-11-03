const SPOONACULAR_API_KEY = "a2db219c418e41c88f4d4fdd14424ac9";

function getRecipe() {
    let ingredients = document.getElementById("ingredients").value;

    fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}&number=1&addRecipeInformation=true`
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

    let recipe = recipeData.results[0];
    document.getElementById("results").innerHTML = JSON.stringify(recipe);
}
