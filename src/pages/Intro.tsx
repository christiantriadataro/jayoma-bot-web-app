import '../styles/Splash.css';
import {ChevronRight} from "lucide-react";
import Image from "@/assets/images/splash-image.png"
import {useNavigate} from "react-router";

export default function Intro() {
    const navigate = useNavigate();
    // useEffect(() => {
    //
    //     const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 1000))
    //
    //     toast.promise(loadingPromise, {
    //         loading: "Getting Ready...",
    //         success: () => {
    //             setTimeout(() => navigate('/home'), 3000)
    //             return "Setting up finished!"
    //         },
    //
    //     });
    // }, [navigate]);

    const nextClick = () => {
        navigate('/home')
    }

    return (
        <div className="page-transition relative flex flex-col h-full space-y-4 py-16 px-8">
            <div className="flex space-x-2">
                <div className="h-1 w-full bg-[#D9D9D9]"></div>
                <div className="h-1 w-full bg-[#4D4D4E]"></div>
                <div className="h-1 w-full bg-[#4D4D4E]"></div>
            </div>
            <div onClick={nextClick} className="flex justify-end items-center cursor-pointer">
                <div className="font-medium text-white text-sm ">Next</div>
                <ChevronRight className="text-white h-5"/>
            </div>
            <img src={Image} alt="" className="mt-24 min-w-(--width-default) self-center" />
            <div className=" w-full h-[216px] bg-black/86 absolute top-[43%] self-center blur-xl"></div>
            <div className="flex flex-col z-10 relative items-center gap-6">
                <h1 className="font-medium text-2xl text-white">Say Hello to Jayoma</h1>
                <h1 className="font-light text-md text-center text-text-new-1">Jayoma is always ready to chat with you answer your questions. Just type your message in the chatbox. Jayoma will provide a helpful response</h1>
            </div>

        </div>
    );
};

