import {authenticateUser, createUser} from '../services/user.js';

function userRoutes(app){
    app.post('/login', async(req, res) => {
        const loginAttemptResult = await authenticateUser(req.body);

        if(!loginAttemptResult.success) res.status(401);
        res.json(loginAttemptResult);
    });
    app.post('/signup', async(req, res) => {
        const signupAttemptResult = await createUser(req.body);

        if(!signupAttemptResult.success) res.status(401);
        res.json(signupAttemptResult);
    });
}

export default userRoutes;