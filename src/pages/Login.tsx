import '../styles/Login.css';
import {useNavigate} from "react-router";
import Back from "../components/shared/Back.tsx";
import CustomInput from "../components/shared/CustomInput.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import baseInstance from "../constants/baseInstance.ts";
import {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import {AxiosError} from "axios";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleWelcomeHome = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const response = await baseInstance.post("/auth/login", loginData);
            console.log(loginData)
            const {accessToken} = response.data;

            localStorage.setItem("token", accessToken);


            if (localStorage.getItem("token")) {
                navigate("/welcome-home")
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log((axiosError.response?.data as { message?: string })?.message);
        }
    }

    useEffect(() => {
        console.log(loginData);
    }, [loginData]);

    const handleSignup = () => {
        navigate('/register');
    };
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="mb-5 mt-36">
                <h1 className="font-semibold text-[38px]">Login Your Account</h1>
                <div className="mt-[48px] gap-[20px] flex flex-col">
                    <CustomInput name="email" onChange={handleChange} placeholder="Enter Your Email"/>
                    <CustomInput name="password" type="password" onChange={handleChange} placeholder="Enter Your Password"/>
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