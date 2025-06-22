import '../styles/Splash.css';
import Logov2 from "../components/shared/Logov2.tsx";
import {useEffect} from "react";
import {toast} from "sonner";
import {useNavigate} from "react-router";


export default function Splashv2() {
    const navigate = useNavigate();
    const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
    useEffect(() => {
        toast.promise(loadingPromise, {
            loading: "Getting Ready...",
            success: () => {
                setTimeout(() => navigate('/intro'), 1000)
                return "Setting up finished!"
            },
        });
    }, [navigate]);

    return (
        <div className="page-transition relative flex  flex-col h-full justify-center px-8 py-16 items-center">
            <div className=" flex flex-col items-center gap-6">
                <Logov2/>
                <h1 className="font-medium text-2xl text-white">Jayoma AI <span className="text-primary-new-1">Chatbot</span></h1>
            </div>

        </div>
    );
};

