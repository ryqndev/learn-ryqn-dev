import express from 'express';
import { create_short_link, get_long_link } from './business-logic';

const app = express();

app.get('/', function (req, res) {
    return "";
    // return render_template("index.html")
});

app.post('/create', function (req, res) {
    let server_url = res.host_url;
    let long_link = req.form['link'];
    let short_link = create_short_link(server_url, long_link);
    // return render_template("result.html", short_link=short_link)
    return "";
});


app.get('/:alias', function (req, res) {
    return res.redirect(get_long_link(req.params.alias));
});
// Start our backend server and host it on our port specified in .env file or 5000
const listener = app.listen(process.env.PORT || 5000, function () {
	console.log(`Server started and listening on port: ${
		listener.address().port
	} (Press CTRL+C to quit)
    \nYou can access the server through [http://localhost:5000/]`);
});
