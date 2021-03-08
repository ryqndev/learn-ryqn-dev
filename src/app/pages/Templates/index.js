import {useEffect} from 'react';
import {Switch, Route, useLocation, useRouteMatch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import About from './About';
import Generator from './Generator';
import Documentation from './Documentation';
import './Templates.scss';

const TemplateRouter = () => {
    const location = useLocation();
    let { path } = useRouteMatch();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [location]);

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={350}>
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