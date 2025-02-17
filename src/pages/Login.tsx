import '../styles/Login.css';
import Header from "../components/layout/Header.tsx";
import LoginForm from "../components/login/LoginForm.tsx";

const Login = () => {
    return (
        <div className="login-container">
            <Header/>
            <div className="login-content">
                <LoginForm/>
            </div>

        </div>
    );
};

export default Login;