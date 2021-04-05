import db from '../libs/lowdb.js';
import crypto from 'crypto';
import {hashPassword, comparePassword} from '../libs/bcrypt.js';

// token expiration set for 2 hours (7.2 million milliseconds)
const TOKEN_EXPIRATION_TIME = 7200000;

async function signup({ username, password }){
	const userRef = db.get('users.' + username);

	// if username is taken
	if(userRef.value()) 
		return {success: false, message: "USER_EXISTS"};
	
	const tokenObject = generateTokens();
	
	db.set('users.' + username, {
		hash: await hashPassword(password),
		...tokenObject
	}).write();

	return {success: true, username: username, ...tokenObject};
}
async function login({ username, password }){
	const userRef = db.get('users.' + username);
	const user = userRef.value();

	// if user does not exist and has no hashed password
	if(!(user?.hash))
		return {success: false, message: 'AUTH_FAILED'};

	const isCorrectPassword = await comparePassword(password, user.hash);

	if(!isCorrectPassword)
		return {success: false, message: 'AUTH_FAILED'}

	if(checkIfTokenExpired(user))
		return {success: true, username: username, ...assignNewToken(userRef)};

	return {success: true, username: username, _token: user._token, _tokenExpiration: user._tokenExpiration};
}

function verifyToken(username, token){
	if(username === undefined || token === null) 
		return false;

	const userRef = db.get('users.' + username);
	const user = userRef.value();

	if(checkIfTokenExpired(user))
		return false;

	return true;
}

function generateTokens(){
	return {
		_token: generateAuthToken(),
		_tokenExpiration: generateTokenExpiration(),
	}
}

function generateAuthToken(){
	return crypto.randomBytes(20).toString('hex');
}

function generateTokenExpiration(){
	return new Date(new Date().getTime() + TOKEN_EXPIRATION_TIME).getTime();
}

function checkIfTokenExpired(user){
	return new Date().getTime() > user._tokenExpiration;
}

function assignNewToken(userRef){
	const tokenObject = generateTokens();
	userRef.assign(tokenObject).write();
	return tokenObject;
}

export {
	signup,
	login,
	verifyToken
}