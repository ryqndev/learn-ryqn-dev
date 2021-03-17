import {Router} from 'express';
const route = Router();

const userRoutes = (app) => {
    app.use('/user', route);

    route.get('/', (req, res) => {
        res.json({
            name: "John"
        });
    });
    route.post('/login', (req, res) => {
        console.log("Login Event", {
            username: req.params.username,
            password: req.params.password,
        });
        res.json({
            success: true,
            token: "randomtoken123",
        });
    });
    route.post('/create', (req, res) => {
        res.json({
            name: "John"
        });
    });
}

export default userRoutes;