import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import {Footer, Navbar} from './components';

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
            <Navbar />
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
