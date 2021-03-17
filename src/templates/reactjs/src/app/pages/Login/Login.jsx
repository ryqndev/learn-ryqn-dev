import {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';

const Login = ({authToken, setAuthToken}) => {
    const history = useHistory();

    useEffect(() => {
        if(authToken) history.push('/');
    }, [authToken, history]);

    const signIn = (event) => {
        event.preventDefault();
        const url = `http://localhost:5000/user/login`;
        fetch(url, {
            method: 'POST', 
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            })
        }).then(function(response){
            return response.json();
        }).then(function(parsedResponse){
            if(parsedResponse?.success){
                localStorage.setItem('_token', parsedResponse.token);
                setAuthToken(parsedResponse.token);
            }
        });
    }

    return (
        <div className="login--wrapper page">
            <form className="login-form" onSubmit={signIn}>
                <h2>LOG IN</h2>
                <input placeholder="username" id="username" type="text" />
                <input placeholder="password" id="password" type="password" />
                <div className="login-form-buttons">
                    <button className="sign-up">
                        <Link to="/signup">
                            sign up
                        </Link>
                    </button>
                    <button className="login" onClick={signIn}>⇀</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
