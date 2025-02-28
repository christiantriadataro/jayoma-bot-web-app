import '../styles/Login.css';
import { useNavigate } from "react-router";
import Back from "../components/single-components/Back.tsx";
import CustomButton from "../components/single-components/CustomButton.tsx";
import Logo from "../components/single-components/Logo.tsx";
import Navbar from "../components/single-components/Navbar.tsx";

const Login = () => {
    const navigate = useNavigate();

    const handleChatBot = () => {
        navigate("/chatbot");
    }

    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center justify-center">
            <Back cn="absolute top-15 left-10"/>
            
            <div className="flex flex-col items-center gap-10">
                <Logo/>
                <div className="text-center">
                    <h1 className="font-urbanist font-bold text-[40px]">Welcome to Jayoma Bot</h1>
                    <p className="mt-[15px] text-[14px] text-[#616161]">Start chatting with Jayoma now. You can ask me anything.</p>
                </div>
                <CustomButton text="Get Started" variant="black"  cn="mt-10"  onClick={handleChatBot}/>
            </div>
            
            
                <Navbar />
            </div>
        
    );
};

export default Login;