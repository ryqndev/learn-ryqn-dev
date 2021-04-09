import database from '../libs/lowdb.js';
import crypto from 'crypto';
import {hashPassword, comparePassword} from '../libs/bcrypt.js';

async function createUser({ username, password }){
	const userRef = database.get('users.' + username);
	// if username is taken
	if(userRef.value()) return {success: false, message: "USER_EXISTS"};
	
	const tokenObject = generateTokens();
	
	database.set('users.' + username, {
		hash: await hashPassword(password),
		...tokenObject
	}).write();

	return {success: true, username: username, ...tokenObject};
}

async function authenticateUser({ username, password }){
	const userRef = database.get('users.' + username);
	const user = userRef.value();

	// if user does not exist and has no hashed password
	if(!(user?.hash)) return {success: false, message: 'AUTH_FAILED'};

	const isCorrectPassword = await comparePassword(password, user.hash);

	if(!isCorrectPassword) return {success: false, message: 'AUTH_FAILED'}

	if(checkIfTokenExpired(user))
		return {success: true, username: username, ...assignNewToken(userRef)};

	return {success: true, username: username, _token: user._token, _tokenExpiration: user._tokenExpiration};
}

function verifyToken(username, token){
	if(!username || !token) return false;

	const userRef = database.get('users.' + username);
	const user = userRef.value();

	return checkIfTokenExpired(user);
}

function generateTokens(){
	return {
		_token: crypto.randomBytes(20).toString('hex'),
		_tokenExpiration: generateTokenExpiration(),
	}
}

function generateTokenExpiration(){
	const TWO_HOURS_TO_MILLISECONDS = 7200000;
	return new Date(new Date().getTime() + TWO_HOURS_TO_MILLISECONDS).getTime();
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
	createUser,
	authenticateUser,
	verifyToken
}