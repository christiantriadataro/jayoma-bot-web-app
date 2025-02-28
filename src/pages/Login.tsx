import '../styles/Login.css';
import {useNavigate} from "react-router";
import Back from "../components/single-components/Back.tsx";
import CustomInput from "../components/single-components/CustomInput.tsx";
import CustomButton from "../components/single-components/CustomButton.tsx";

const Login = () => {
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleWelcomeHome = () => {
        navigate("/welcome-home")
    }

    const handleSignup = () => {
        navigate('/register');
    };
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="mb-5 mt-36">
                <h1 className="font-semibold text-[38px]">Login Your Account</h1>
                <div className="mt-[48px] gap-[20px] flex flex-col">
                    <CustomInput placeholder="Enter Your Email"/>
                    <CustomInput type="password" placeholder="Enter Your Password"/>
                </div>
                <p className="cursor-pointer text-[#ACADB9] mt-[15px] font-medium text-[14px] text-right text-[#323142]"
                  onClick={handleForgotPassword}>Forgot Password?</p>
                <CustomButton text="Login" variant="black" cn="mt-3" onClick={handleWelcomeHome}/>
                <p className="cursor-pointer text-[#ACADB9] text-center mt-[11px]">Create New Account?<span
                    className="mt-[15px] text-[14px] text-right text-[#323142] font-bold" onClick={handleSignup}> Sign Up</span>
                </p>
            </div>

        </div>
    );
};

export default Login;