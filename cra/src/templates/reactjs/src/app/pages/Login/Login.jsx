import {Link} from 'react-router-dom';
import useLogin from '../../controller/hooks/useLogin';
import './Login.css';

function Login(){
    const {login} = useLogin();

    const handleLogin = (event) => {
        event.preventDefault();
        login({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        });
    }

    return (
        <div className="login--wrapper page">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>LOG IN</h2>
                <input placeholder="username" id="username" type="text" required/>
                <input placeholder="password" id="password" type="password" required/>
                <div className="login-form-buttons">
                    <button className="sign-up">
                        <Link to="/signup">
                            sign up
                        </Link>
                    </button>
                    <button className="login">⇀</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
