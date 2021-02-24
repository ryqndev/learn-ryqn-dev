import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Footer, Navbar, Spinner} from './components';

const Home = lazy(() => import('./pages/Home'));
const ArticlesList = lazy(() => import('./pages/ArticlesList'));
const TemplateGenerator = lazy(() => import('./pages/TemplateGenerator'));
const Lesson = lazy(() => import('./pages/Lesson'));
const TemplateDocumentation = lazy(() => import('./pages/TemplateDocumentation'));

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route exact path="/articles" component={ArticlesList} />
                    <Route exact path="/templates" component={TemplateGenerator} />
                    <Route exact path="/docs/:stack" component={TemplateDocumentation} />
                    <Route exact path="/:lessonName" component={Lesson} />
                </Switch>
            </Suspense>
            <Footer />
		</Router>
	);
}

export default App;
