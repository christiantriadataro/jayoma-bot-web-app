import '../styles/Splash.css';
import Back from "@/components/shared/Back.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

import {useNavigate} from "react-router";
import {toast} from "sonner";
import baseInstance from "@/constants/baseInstance.ts";
import {ChangeEvent, MouseEvent, useState} from "react";

export default function Loginv2() {
    const navigate = useNavigate();
    const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
        console.log(loginData)
    }


    const handleClick = async (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        try {
            const response = await baseInstance.post("/auth/login",
                {
                    ...loginData,
                });
            console.log(response.data)

            if (response) {
                toast.promise(loadingPromise, {
                    loading: "Log in the new account...",
                    success: () => {
                        setTimeout(() => navigate('/dashboard'), 1000)
                        return "Account Signed!"
                    }
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-16">
            <div className="flex  flex-col px-8 space-y-5 ">
                <Back/>
                <h1 className="sm:mt-5 font-medium text-lg sm:text-2xl text-white">
                    Login to <span className="text-primary-new-1">your Account</span>
                </h1>
                <h1 className="font-medium text-xs sm:text-sm text-text-new-1">Enter your email and password to login.</h1>
            </div>
            <div
                className="mt-10 w-full h-full bg-background-new-4/75 py-4 sm:py-8 space-y-4 sm:space-y-5  px-4 text-[10px] sm:text-sm text-text-new-1 rounded-t-xl sm:rounded-t-2xl">
                <div className="space-y-2 sm:space-y-4">
                    <div>Email Address</div>
                    <input name="email" onChange={handleChange} type="text" placeholder="Enter your email address"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <div>Password</div>
                    <input  name="password" onChange={handleChange} type="password" placeholder="Enter your password"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="mt-5 w-full flex flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Checkbox className="h-4 w-4 sm:w-5 sm:h-5 border border-text-new-1 mt-1"/>
                        <div>Remember me</div>
                    </div>
                    <div className="text-primary-new-1 font-bold">Forgot Password</div>
                </div>
                <div onClick={handleClick}
                     className="cursor-pointer mt-8 bg-primary-new-1 py-3 flex font-bold justify-center items-center rounded-lg text-white">
                    Login
                </div>
            </div>
        </div>
    );
};

