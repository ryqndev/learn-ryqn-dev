import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as Page from './pages';
import {Footer, Navbar} from './components';

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
                <Route exact strict path="/" component={Page.Home} />
                <Route exact path="/articles" component={Page.ArticlesList} />
                <Route exact path="/:lessonName" component={Page.Lesson} />
            </Switch>
            <Footer />
		</Router>
	);
}

export default App;
