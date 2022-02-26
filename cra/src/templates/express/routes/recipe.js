import {getRecipe, getRecipes, uploadRecipe} from '../services/recipe.js';

function recipeRoutes(app){
    // get a single recipe with id
    app.get('/recipe/:id',(req, res) => {
        const recipeData = getRecipe(req.params?.id, req.query?.user, req.query?._token);

        switch(recipeData?.message){
            case 'AUTH_FAILED':
                res.status(401);
                break;
            case 'NOT_FOUND':
                res.status(404);
                break;
            // no default
        }
        res.json(recipeData);
    });

    // get a list of recipes
    app.get('/recipes', (req, res) => {
        const recipesList = getRecipes(req.query?.user, req.query?._token);

        if(recipesList?.message === 'AUTH_FAILED') res.status(401);
        res.json(recipesList);
    });

    // upload new recipe
    app.post('/upload', (req, res) => {
        const uploadRecipeResult = uploadRecipe(req.query?.user, req.query?._token, req.body);

        if(uploadRecipeResult?.message === 'AUTH_FAILED') res.status(401);
        res.json(uploadRecipeResult);
    });
}

export default recipeRoutes;