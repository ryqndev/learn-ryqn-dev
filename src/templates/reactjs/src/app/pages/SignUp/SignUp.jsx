import {Link} from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const signIn = () => {}

    return (
        <div className="login--wrapper page">
            <div className="login-form">
                <h2>Sign Up</h2>
                <input placeholder="username" type="text" />
                <input placeholder="password" type="password" />
                <input placeholder="confirm password" type="password" />
                <div className="login-form-buttons">
                    <button className="sign-up">
                        <Link to="/login">
                            log in
                        </Link>
                    </button>
                    <button className="login" onClick={signIn}>⇀</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
