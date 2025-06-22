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
        <div className="page-transition relative flex  flex-col h-full justify-end py-16 px-8 items-center">
            <div className=" w-full space-y-72">
                <div className=" flex flex-col items-center gap-6">
                    <Logov2/>
                    <h1 className="font-medium text-2xl text-white">Jayoma AI <span
                        className="text-primary-new-1">Chatbot</span></h1>
                </div>
                <div className="space-y-12">
                    <div onClick={signupClick} className="bg-primary-new-1 py-3 cursor-pointer flex justify-center items-center rounded-lg text-white">Let's Get Started</div>
                    <h1 className="font-medium text-sm text-center text-white">Already have an account? <span
                        onClick={loginClick} className="text-primary-new-1 cursor-pointer">Login</span></h1>
                </div>
            </div>
        </div>
    );
};

