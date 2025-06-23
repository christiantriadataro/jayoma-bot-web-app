import '../styles/Splash.css';
import {ChevronRight} from "lucide-react";
import Image from "@/assets/images/splash-image.png"
import {useNavigate} from "react-router";

export default function Intro() {
    const navigate = useNavigate();

    const nextClick = () => {
        navigate('/home')
    }

    return (
        <div className="page-transition overflow-y-auto relative flex flex-col justify-between h-full space-y-4 py-16 px-8">
            <div className="flex space-x-2">
                <div className="h-1 w-full bg-[#D9D9D9]"></div>
                <div className="h-1 w-full bg-[#4D4D4E]"></div>
                <div className="h-1 w-full bg-[#4D4D4E]"></div>
            </div>
            <div onClick={nextClick} className="flex justify-end items-center cursor-pointer">
                <div className="font-medium text-white text-xs sm:text-sm ">Next</div>
                <ChevronRight className="text-white h-4 sm:h-5"/>
            </div>
            <img src={Image} alt="" className="border object-cover sm:min-w-[350px] self-center" />
            <div className="w-full h-40 sm:h-[216px] bg-black/86 absolute top-[58%] sm:top-[60%] self-center blur-md sm:blur-xl"></div>
            <div className="flex flex-col z-10 relative items-center gap-6">
                <h1 className="font-medium text-md sm:text-2xl text-center text-white">Say Hello to Jayoma</h1>
                <h1 className="font-light text-xs sm:text-md text-center text-text-new-1">Jayoma is always ready to chat with you answer your questions. Just type your message in the chatbox. Jayoma will provide a helpful response</h1>
            </div>
        </div>
    );
};

