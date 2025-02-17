import '../styles/Login.css';
import {useNavigate} from "react-router";
import Back from "../components/single-components/Back.tsx";
import CustomButton from "../components/single-components/CustomButton.tsx";
import HomeActiveIcon from "../assets/svg/HomeActiveIcon.svg"
import CategoryIcon from '../assets/svg/CategoryIcon.svg'
import UserProfile from "../assets/svg/UserProfile.svg"
import UserPromptIcon from "../assets/svg/UserPromptIcon.svg"
import Logo from "../components/single-components/Logo.tsx";

const Login = () => {
    const navigate = useNavigate();


    const handleChatBot = () => {
        navigate("/chatbot")
    }

    
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="absolute bottom-0 flex flex-row h-[87px] w-full border border-[#DADADA]">
                <div className="w-full h-full flex justify-center items-center">
                    <img src={HomeActiveIcon} alt=""/>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img src={CategoryIcon} alt=""/>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img src={UserProfile} alt=""/>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img src={UserPromptIcon} alt=""/>
                </div>
            </div>
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

export default Login;