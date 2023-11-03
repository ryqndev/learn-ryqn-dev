// To use the spoonacular API, you need to register for a free API key.
// You can do that here: https://spoonacular.com/food-api/console#Dashboard
// and then paste it below. It should be some random string of characters
const SPOONACULAR_API_KEY = "a2db219c418e41c88f4d4fdd14424ac9";

// This function will pull values from the website, and then pass them
// into an API call, and then call another function with the result
function getRecipe() {
    let ingredients = document.getElementById("ingredients").value;
    let equipment = document.getElementById("equipment").value;

    // API call using the fetch method
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // The code below is pretty standard and you can copy paste it as needed.
    fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}&equipment=${equipment}&number=10&addRecipeInformation=true`
    )
        .then((res) => res.json())
        // This line of code below calls the function we define on line 25
        // When the API call finishes, it will *then* call renderRecipe function
        // and pass in the result from the API to the function as a parameter
        .then(renderRecipe);
}

function renderRecipe(recipeData) {
    console.log("Printing out result from the API:", recipeData);

    // If there are no results, then just render an error state and early return.
    if (recipeData.results.length <= 0) {
        document.getElementById("results").innerHTML =
            "No recipes found for these ingredients";
        return;
    }

    // Clear existing html in results section before we generate new HTML
    document.getElementById("main").innerHTML = "<h1>Suggested Recipes</h1>";

    // We just loop through the contents of the api. To access properties
    // of an object, we use the "." dot notation. The "results" property
    // is of array type so it automatically has a .length property we use
    // to loop through
    for (let idx = 0; idx < recipeData.results.length; idx++) {
        let recipe = recipeData.results[idx];
        let generatedId = "result-" + idx;

        // We dynamically generate the website by writing HTML as a string
        // and then setting the innerHTML property to the template string
        // DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        document.getElementById("main").innerHTML += `
            <div class="result" id="${generatedId}">
                <img src="${recipe.image}" />
                <div class="list">
                    <h2>${recipe.title}</h2>
                    <div class="tag">⏰ ${recipe.readyInMinutes} mins</div>
                </div>
            </div>
        `;
    }

    // Why not merge the above loop and below into 1 for loop? because editing the
    // innerHTML will erase the eventListeners that are attached to them, so I
    // generate all the HTML in one go, and then attach listeners to them
    for (let idx = 0; idx < recipeData.results.length; idx++) {
        let recipe = recipeData.results[idx];
        let generatedId = "result-" + idx;

        document
            .getElementById(generatedId)
            // function below is an "anonymous function" and has no name. It's defined
            // and used immediately so it doesn't need a name (since it's not called elsewhere)
            .addEventListener("click", function () {
                showRecipe(recipe);
            });
    }
}

function showRecipe(recipe) {
    // There are many ways of dynamically creating HTML elements. I showed
    // the one above by editing the .innerHTML but there's another way to
    // do it with just pure javascript using a combination of
    // document.createElement and .appendChild
    // DOCS: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

    // Dialog is the basic HTML tag for a popup but know that you can easily
    // write your own by using a combination of Javascript and HTML divs
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
    let dialog = document.createElement("dialog");

    // The two below lines create <div class="content"></div>
    let dialogContent = document.createElement("div");
    dialogContent.classList = "content";

    // This creates <ol></ol>
    let instructions = document.createElement("ol");

    // Now, we loop through the instructions portion of the recipe
    for (
        let idx = 0;
        idx < recipe.analyzedInstructions[0].steps.length;
        idx++
    ) {
        instructions.innerHTML += `<li>${recipe.analyzedInstructions[0].steps[idx].step}</li>`;
    }

    // This is how you can close a dialog component
    dialogContent.innerHTML = `
        <form method="dialog">
            <button id="confirmBtn" class="close">✖</button>
        </form>
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" />
        <p>${recipe.summary}</p>
        <h2>📖 Recipe</h2>
    `;

    dialogContent.appendChild(instructions);
    dialog.appendChild(dialogContent);

    document.body.appendChild(dialog);

    // I use the Javscript to trigger some default attributes of the
    // HTML element
    dialog.showModal();
}
