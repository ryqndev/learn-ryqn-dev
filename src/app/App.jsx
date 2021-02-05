import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import './styles/main.scss';

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact strict path="/">
                    <Home />
                </Route>
                <Route path="/:lessonName">
                    <Lesson />
                </Route>
            </Switch>
		</Router>
	);
}

export default App;
