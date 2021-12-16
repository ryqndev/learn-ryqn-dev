import express from 'express';

const app = express();

app.get('/', function(req, res){
    
});


// Start our backend server and host it on our port specified in .env file or 5000
const listener = app.listen(process.env.PORT || 5000, function(){
    console.log(`Server started and listening on port: ${listener.address().port} (Press CTRL+C to quit)
    \nYou can access the server through [http://localhost:5000/]`);
});
