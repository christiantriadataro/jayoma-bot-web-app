import "../styles/Signup.css"
import Back from "../components/shared/Back.tsx";
import CustomInput from "../components/shared/CustomInput.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import {useNavigate} from "react-router";

const Signup = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/home');
    };
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="mb-5 mt-36">
                <h1 className="font-semibold text-[38px]">Create Your Account</h1>
                <div className="mt-[48px] gap-[20px] flex flex-col">
                    <CustomInput placeholder="Enter Full Name"/>
                    <CustomInput placeholder="Enter Email"/>
                    <CustomInput type="password" placeholder="Enter Password"/>
                </div>
                <CustomButton text="Register" variant="black" cn="mt-3" onClick={handleHome}/>
                <p className="cursor-pointer text-[#ACADB9] text-center mt-[11px]" onClick={handleLogin}>Already have an
                    account?<span
                        className="mt-[15px] text-[14px] text-right text-[#323142] font-bold"
                    > Login</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;