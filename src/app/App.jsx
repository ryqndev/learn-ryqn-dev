import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Footer from './components/Footer';
import Toggle from 'react-toggle';
import {getTheme, setTheme as updateTheme} from './controller/theme';
import './styles/main.scss';

const App = () => {
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {updateTheme(theme)}, [theme]);

	return (
		<Router basename={process.env.PUBLIC_URL}>
            <label className="t-w">
                <Toggle checked={!!theme} icons={false} onChange={() => {setTheme(+!theme)}} />
            </label>
            <Switch>
                <Route exact strict path="/">
                    <Home />
                </Route>
                <Route path="/:lessonName">
                    <Lesson />
                </Route>
            </Switch>
            <Footer />
		</Router>
	);
}

export default App;
