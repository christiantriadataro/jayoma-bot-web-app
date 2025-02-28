import '../styles/Login.css';
import {useNavigate} from "react-router";
import Back from "../components/shared/Back.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import Logo from "../components/shared/Logo.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

const WelcomeHome = () => {
    const navigate = useNavigate();


    const handleChatBot = () => {
        navigate("/chatbot")
    }


    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <Navbar/>
            <div className="mb-5 mt-36 gap-10 flex flex-col justify-between items-center">
                <Logo/>
                <div>
                    <h1 className="font-urbanist font-bold text-[40px] w-full text-center">Welcome to Jayoma Bot</h1>

                    <p className="mt-[15px]  text-[14px] text-center text-[#616161]">Start chatting with Jayoma
                        now.
                        You can ask me anything.</p>
                </div>
                <CustomButton text="Get Started" variant="black" cn="mt-36" onClick={handleChatBot}/>

            </div>


        </div>
    );
};

export default WelcomeHome;