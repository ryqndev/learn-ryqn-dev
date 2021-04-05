import {Route, Switch, Link} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Add from './pages/Add';
import AuthUserContext from './controller/contexts/AuthUserContext.js';
import useAuth from './controller/hooks/useAuth.js';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('user')));

	useEffect(() => {
		console.log(authUser);
	}, [authUser]);

	return (
		<AuthUserContext.Provider value={[authUser, setAuthUser]}>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Route path="/" component={AuthenticatedRoutes} />
			</Switch>
		</AuthUserContext.Provider>
	);
}

function AuthenticatedRoutes() {
	const {logout} = useAuth();

	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/add">Add</Link>
                <button className="logout" onClick={logout}>LOGOUT</button>
            </nav>
			<Route exact path="/recipe/:id" component={Recipe} />
			<Route exact path="/add" component={Add} />
			<Route exact path="/" component={Home} />
		</>
	);

}

export default App;
