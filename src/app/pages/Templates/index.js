import {lazy, Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation, useRouteMatch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Spinner} from '../../components';
import './Templates.scss';
import About from './About';
import Generator from './Generator';
// const About = lazy(() => import('./About'));
// const Generator = lazy(() => import('./Generator'));
const Documentation = lazy(() => import('./Documentation'));


const TemplateRouter = () => {
    const location = useLocation();
    let { path } = useRouteMatch();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [location]);

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={350}>
                <div className="expandable">
                    <Switch location={location}>
                        <Route exact path={`${path}`} component={About} />
                        <Route exact path={`${path}/create`} component={Generator} />
                        <Route exact path={`${path}/:stack`} component={Documentation} />
                    </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default TemplateRouter;