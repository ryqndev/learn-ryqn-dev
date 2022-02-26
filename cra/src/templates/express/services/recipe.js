import db from '../libs/lowdb.js';
import crypto from 'crypto';
import {verifyToken} from './user.js';

function getRecipe(recipeId, username, authToken){
    if(!verifyToken(username, authToken))
        return {success: false, message: 'AUTH_FAILED'};

	const recipeData = db.get('recipes').find({ id: recipeId }).value();

    if(!recipeData)
        return {success: false, message: 'NOT_FOUND'};

	return {success: true, data: recipeData};
}

function getRecipes(username, authToken, limit=10){
    if(!verifyToken(username, authToken))
        return {success: false, message: 'AUTH_FAILED'};

    const recipeData = db.get('recipes').sortBy('uploaded').take(limit).value();

	return {success:true, data: recipeData};
}

function uploadRecipe(username, authToken, recipeData){
    if(!verifyToken(username, authToken)) return {success: false, message: 'AUTH_FAILED'};
    let recipeID = generateUniqueID(recipeData.name)
    db.get('recipes').push({id: recipeID, uploaded: new Date().getTime(), ...recipeData}).write();
	return {success:true, id: recipeID};
}

function generateUniqueID(name){
    let path = name.toLowerCase().split(' ').join('-');
    let pathUniqueIdentifier = '';
    let generatedPath = path;
    while(db.get('recipes').find({id: generatedPath}).value()){
        pathUniqueIdentifier = generateRandomString();
        generatedPath = path + '-' + pathUniqueIdentifier;
    }
    return generatedPath;
}

function generateRandomString(){
	return crypto.randomBytes(3).toString('hex');
}

export {
	getRecipe,
    getRecipes,
    uploadRecipe
}