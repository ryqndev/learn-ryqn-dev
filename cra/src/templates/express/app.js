import express from 'express';
import cors from 'cors';
import marked from 'marked';
import fs from 'fs';
import path from 'path';
import router from './routes/index.js';
import initializeAllServices from './services/index.js';

const app = express();
app.use(express.json()); // enable json formatted response
app.use(cors()); // enable CORS

// Print all server requests with timestamp and request path
app.all('/*', function(req, res, next){
    console.log(new Date().toUTCString(), req.originalUrl)
    next();
});

// Default endpoint return README.md file
app.get('/', (req, res) => {
    // Read README.md file synchronously
    const readme = fs.readFileSync(path.resolve('', 'README.md'), 'utf8'); 

    // Parse markdown into HTML and return as response
    res.send(marked(readme));    
});

app.use(router()); // All other routes initialized in /routes folder

initializeAllServices(); // initialize all services

// Start our backend server and host it on our port specified in .env file or 5000
const listener = app.listen(process.env.PORT || 5000, function(){
    console.log(`Server started and listening on port: ${listener.address().port} (Press CTRL+C to quit)
    \nYou can access the server through [http://localhost:5000/]`);
});
