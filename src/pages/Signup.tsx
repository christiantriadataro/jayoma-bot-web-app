import "../styles/Signup.css"
import Back from "../components/shared/Back.tsx";
import CustomInput from "../components/shared/CustomInput.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import {useNavigate} from "react-router";
import {ChangeEvent, MouseEvent, useState} from "react";
import baseInstance from "../constants/baseInstance.ts";
import {AxiosError} from "axios";

const Signup = () => {
     const [registerData, setRegisterData] = useState({
        email: "",
         name: "",
        password: ""
    })

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const switchLogin = () => {
         navigate('/login')
    }

    const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const response = await baseInstance.post("/auth/register", registerData);
            console.log(response.data)

            if (response.data) {
                navigate('/login');
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log((axiosError.response?.data as { message?: string })?.message);
        }

    };

    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="mb-5 mt-36">
                <h1 className="font-semibold text-[38px]">Create Your Account</h1>
                <div className="mt-[48px] gap-[20px] flex flex-col">
                    <CustomInput name="name" onChange={handleChange} placeholder="Enter Full Name"/>
                    <CustomInput name="email" onChange={handleChange} placeholder="Enter Email"/>
                    <CustomInput name="password" onChange={handleChange} type="password" placeholder="Enter Password"/>
                </div>
                <CustomButton text="Register" variant="black" cn="mt-3" onClick={handleLogin}/>
                <p className="cursor-pointer text-[#ACADB9] text-center mt-[11px]" onClick={switchLogin}>Already have an
                    account?<span
                        className="mt-[15px] text-[14px] text-right text-[#323142] font-bold"
                    > Login</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;