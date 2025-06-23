import '../styles/Splash.css';
import Logov2 from "../components/shared/Logov2.tsx";
import {useNavigate} from "react-router";


export default function Homev2() {
    const navigate = useNavigate();

    const signupClick = () => {
        navigate('/register')
    }

    const loginClick = () => {
        navigate('/login')
    }

    return (
        <div className="page-transition relative flex flex-col h-full justify-center py-16 px-8 items-center">
            <div className="relative flex flex-col h-full justify-center w-full">
                <div className=" flex flex-col items-center gap-4 sm:gap-6">
                    <Logov2 className="w-20 h-20 sm:w-28 sm:h-28"/>
                    <div className="text-center">
                        <h1 className="font-medium text-md sm:text-2xl text-white">Welcome to</h1>
                        <h1 className="font-medium text-md sm:text-2xl text-white">Jayoma AI <span
                            className="text-primary-new-1">Chatbot</span></h1>
                    </div>
                </div>
                <div className="absolute w-full bottom-0 space-y-6 sm:space-y-12">
                    <div onClick={signupClick}
                         className="text-[10px] bg-primary-new-1 py-2.5 sm:py-3 cursor-pointer flex justify-center items-center rounded-lg text-white">Let's
                        Get Started
                    </div>
                    <h1 className="font-medium text-[10px] text-center text-white">Already have an account? <span
                        onClick={loginClick} className="text-primary-new-1 cursor-pointer">Login</span></h1>
                </div>
            </div>
        </div>
    );
};

