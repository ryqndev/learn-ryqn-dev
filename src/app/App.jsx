import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import {Footer, Navbar} from './components';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// const Home = lazy(() => import('./pages/Home'));
// const ArticlesList = lazy(() => import('./pages/ArticlesList'));
// const TemplateRouter = lazy(() => import('./pages/Templates'));
// const Lesson = lazy(() => import('./pages/Lesson'));
import {Home, ArticlesList, TemplateRouter, Lesson} from './pages';

const App = () => {
    const location = useLocation();

	return (
        <>
            <Navbar />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fast fade" timeout={150}>
                    <div className="expandable">
                        <Switch location={location}>
                            <Route exact strict path="/" component={Home} />
                            <Route exact path="/articles" component={ArticlesList} />
                            <Route path="/template" component={TemplateRouter} />
                            <Route exact path="/:lessonName" component={Lesson} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
	);
}

export default App;
