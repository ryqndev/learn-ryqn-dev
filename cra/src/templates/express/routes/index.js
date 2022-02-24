import {Router} from 'express';
import user from './user.js';
import recipe from './recipe.js';

function router(){
	const router = Router();
	user(router);
	recipe(router);
	return router;
}

export default router;