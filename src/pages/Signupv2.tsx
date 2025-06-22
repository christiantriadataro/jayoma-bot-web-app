import '../styles/Splash.css';
import Back from "@/components/shared/Back.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useNavigate} from "react-router";
import {toast} from "sonner";

export default function Signupv2() {
    const navigate = useNavigate();
    const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
    const handleClick = () => {
        toast.promise(loadingPromise, {
            loading: "Registering the new account...",
            success: () => {
                setTimeout(() => navigate('/login'), 1000)
                return "Setting up finished!"
            },
        });
    }

    return (
        <div className="page-transition relative flex flex-col h-full pt-16">
            <div className="flex  flex-col px-8 space-y-5 ">
                <Back/>
            <h1 className="mt-5 font-medium text-2xl text-white">
                Create a <span className="text-primary-new-1">New Account</span>
            </h1>
            <h1 className="font-medium text-sm text-text-new-1">Please put your information below to create a new account for using this app.</h1>
            </div>
            <div className="mt-10 w-full h-full bg-background-new-4/75 py-8 space-y-5 px-4 text-sm text-text-new-1 rounded-t-2xl">
                <div className="space-y-4">
                    <div>Email Address</div>
                    <input type="text" placeholder="Enter your email address" className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                 <div className="space-y-4">
                    <div>Password</div>
                    <input type="text" placeholder="Enter your password" className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div>
                  <div className="space-y-4">
                    <div>Confirm Password</div>
                    <input type="text" placeholder="Confirm your new password" className="bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"/>
                </div >
                <div className="mt-5 flex gap-4 items-start">
                    <Checkbox className="w-5 h-5 border border-text-new-1 mt-1"/>
                    <div>I agree to Jayoma AI Chatbot <span className="text-primary-new-1">License Agreement, Terms & Privacy Policy</span></div>
                </div>
                <div onClick={handleClick}  className="mt-8 bg-primary-new-1 py-3 flex font-bold justify-center items-center rounded-lg text-white">Register Now</div>
            </div>
        </div>
    );
};

