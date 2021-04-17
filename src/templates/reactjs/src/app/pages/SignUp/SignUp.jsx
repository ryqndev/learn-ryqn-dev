import {Link} from 'react-router-dom';
import useLogin from '../../controller/hooks/useLogin';
import './SignUp.css';

function SignUp(){
    const {signup} = useLogin();

    const handleSignup = (event) => {
        event.preventDefault();
        let password = document.getElementById('password').value,
            confirmPassword = document.getElementById('confirm-password').value
        if(password !== confirmPassword) return alert('password mismatch');
        signup({
            username: document.getElementById('username').value,
            password: password,
        });
    }

    return (
        <div className="login--wrapper page">
            <form className="login-form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <input placeholder="username" id="username" type="text" required/>
                <input placeholder="password" id="password" type="password" required/>
                <input placeholder="confirm password" id="confirm-password" type="password" required/>
                <div className="login-form-buttons">
                    <button className="sign-up">
                        <Link to="/login">
                            log in
                        </Link>
                    </button>
                    <button className="login">⇀</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
