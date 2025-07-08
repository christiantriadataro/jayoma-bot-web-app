import '../styles/Splash.css';
import Back from "@/components/shared/Back.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useNavigate} from "react-router";
import {toast} from "sonner";
import {ChangeEvent, MouseEvent, useState} from "react";
import baseInstance from "@/constants/baseInstance.ts";

export default function Signupv2() {
    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        password: ""
    })

    const navigate = useNavigate();
    const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
        console.log(registerData)
    }

    const handleClick = async (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        try {
            const response = await baseInstance.post("/auth/register",
                {
                    ...registerData,
                    role: "user",
                    status: "active"
                });
            console.log(response.data)

           if (response != null) {
               toast.promise(loadingPromise, {
                    loading: "Registering new account...",
                    success: () => {
                        setTimeout(() => navigate('/login'), 1000)
                        return "Account Registered!"
                    }
                })
           }
        } catch (error) {
            console.log(error);
            // const axiosError = error as AxiosError;
            // console.log((axiosError.response?.data as { message?: string })?.message);
        }

    }

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-16">
            <div className="flex  flex-col px-8 space-y-5 ">
                <Back/>
                <h1 className="sm:mt-5 font-medium text-lg sm:text-2xl text-white">
                    Create a <span className="text-primary-new-1">New Account</span>
                </h1>
                <h1 className="font-medium text-xs sm:text-sm text-text-new-1">Please put your information below to
                    create a new account for using this app.</h1>
            </div>
            <div
                className="mt-10 w-full h-full bg-background-new-4/75 py-4 sm:py-8 space-y-4 sm:space-y-5 px-4 text-[10px] sm:text-sm text-text-new-1 rounded-t-xl sm:rounded-t-2xl">
                 <div className="space-y-2 sm:space-y-4">
                    <div>Name</div>
                    <input name="name" onChange={handleChange} type="text" placeholder="Enter your Name"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <div>Email Address</div>
                    <input name="email" onChange={handleChange} type="text" placeholder="Enter your email address"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <div>Password</div>
                    <input name="password" onChange={handleChange} type="password" placeholder="Enter your password"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <div>Confirm Password</div>
                    <input name="confirmPassword" onChange={handleChange} type="password" placeholder="Confirm your new password"
                           className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                <div className="mt-5 flex gap-4 items-start">
                    <Checkbox className="h-4 w-4 sm:w-5 sm:h-5 border border-text-new-1 mt-1"/>
                    <div>I agree to Jayoma AI Chatbot <span className="text-primary-new-1">License Agreement, Terms & Privacy Policy</span>
                    </div>
                </div>
                <div onClick={handleClick}
                        className="cursor-pointer mt-8 bg-primary-new-1 py-3 w-full flex font-bold justify-center items-center rounded-lg text-white">Register
                    Now
                </div>
            </div>
        </div>
    );
};

