import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('_token'));

  return (
    <Switch>
      <Route exact path="/login">
        <Login authToken={authToken} setAuthToken={setAuthToken}/>
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/recipe">
        <SignUp />
      </Route>
      <Route path="/">
        <Home authToken={authToken} setAuthToken={setAuthToken}/>
      </Route>
    </Switch>
  );
}

export default App;
