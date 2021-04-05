import db from '../libs/lowdb.js';
import crypto from 'crypto';
import {verifyToken} from './user.js';

function getRecipe(recipeId, username, authToken){
    if(!verifyToken(username, authToken))
        return {success: false, message: 'AUTH_FAILED'};

	const recipeData = db.get('recipes').find({ id: recipeId }).value();

    if(!recipeData)
        return {success: false, message: 'NOT_FOUND'};

	return {success: true, ...recipeData};
}

function getRecipes(username, authToken){
    if(!verifyToken(username, authToken))
        return {success: false, message: 'AUTH_FAILED'};

    const recipeData = db.get('recipes').sortBy('uploaded').take(10).value();

	return {success:true, recipes: recipeData};
}

function generateRandomString(){
	return crypto.randomBytes(20).toString('hex');
}



export {
	getRecipe,
    getRecipes
}