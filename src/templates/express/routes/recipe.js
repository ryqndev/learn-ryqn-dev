import {Router} from 'express';
import {getRecipe, getRecipes} from '../services/recipe.js';

const route = Router();

const recipeRoutes = (app) => {
    app.use('/', route);

    route.get('/recipe/:id',(req, res) => {
        console.log((new Date()).toDateString(), (new Date()).toTimeString(), ": Get recipe -",  req.params.id, req.query?.user);
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

    route.get('/recipes', (req, res) => {
        console.log((new Date()).toDateString(), (new Date()).toTimeString(), ": Get recipe list", req.query.user);
        const recipesList = getRecipes(req.query?.user, req.query?._token);

        switch(recipesList?.message){
            case 'AUTH_FAILED':
                res.status(401);
                break;
            case 'NOT_FOUND':
                res.status(404);
                break;
            // no default
        }

        res.json(recipesList);
    });
}

export default recipeRoutes;