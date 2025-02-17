import "../styles/Signup.css"
import SignupForm from "../components/signup/SignupForm.tsx";
import Header from "../components/layout/Header.tsx";

const Signup = () => {
    return (
        <div className="signup-container">
            <Header/>
            <div className="signup-content">
                <SignupForm/>
            </div>

        </div>
    );
};

export default Signup;