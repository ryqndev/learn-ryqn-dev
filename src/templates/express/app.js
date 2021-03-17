import express from 'express';
import cors from 'cors';
import marked from 'marked';
import fs from 'fs';
import path from 'path';
import router from './routes/index.js';

const app = express();
app.use(cors()); // enable CORS

// Default endpoint return README.md file
app.get('/', (req, res) => {
    const readme = fs.readFileSync(path.resolve('', 'README.md'), 'utf8');  // Read README.md file synchronously
    res.send(marked(readme));    // Parse markdown into HTML and return as response
});

// All other routes initialized in /routes folder
app.use(router());

// Start our backend server and host it on our port specified in .env file or 5000
const listener = app.listen(process.env.PORT || 5000, function(){
    console.log(`Server started and listening on port: ${listener.address().port} (Press CTRL+C to quit)
    \nYou can access the server through [http://localhost:5000/]`);
});
