import {Router} from 'express';
import user from './user.js';

const router = () => {
	const router = Router();
	user(router);
	return router;
}

export default router;