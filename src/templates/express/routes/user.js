import {Router} from 'express';
import {login, signup} from '../services/user.js';

const route = Router();

const userRoutes = (app) => {
    app.use('/', route);

    route.post('/login', async(req, res) => {
        console.log((new Date()).toDateString(), (new Date()).toTimeString(), ": Login Event", req.body.username);
        const loginAttemptResult = await login(req.body);

        if(!loginAttemptResult.success) res.status(401);
        res.json(loginAttemptResult);
    });

    route.post('/signup', async(req, res) => {
        console.log((new Date()).toDateString(), (new Date()).toTimeString(), ": Signup Event", req.body.username);
        const loginAttemptResult = await signup(req.body);

        if(!loginAttemptResult.success) res.status(401);
        res.json(loginAttemptResult);
    });
}

export default userRoutes;