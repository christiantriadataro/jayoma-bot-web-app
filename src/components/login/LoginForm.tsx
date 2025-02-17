import '../../styles/Login.css';
import {useNavigate} from "react-router";


const LoginForm = () => {
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="login-form">
            <h2>Login to Jayoma</h2>
            <form action="/authenticate" method="post">
                <label htmlFor="username"><b>Username:</b></label>
                <input type="text" id="username" placeholder="Enter your Username" name="username" required/>
                <label htmlFor="password"><b>Password:</b></label>

                <input type="password" id="password" placeholder="Enter your Password" name="password" required/>
                <div className="forgot-password">
                    <a href="/forgot password" onClick={handleForgotPassword}>
                        Forgot password?
                    </a>
                </div>
                <button type="submit" className="login">Log in</button>

            </form>
            <div className="horizontal-line">
                <hr/>

            </div>

            <div className="signup-prompt">
                <p>
                    Don't have an account?{' '}
                    <span className="signup-link" onClick={handleSignup}>
        Sign up
        </span>
                </p>
            </div>
        </div>


    );

};

export default LoginForm;