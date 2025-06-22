import '../styles/Splash.css';
import Logov2 from "../components/shared/Logov2.tsx";
import {useEffect} from "react";
import {toast} from "sonner";
import {useNavigate} from "react-router";


export default function Splashv2() {
    const navigate = useNavigate();
    useEffect(() => {

        const loadingPromise = new Promise<void>(resolve => setTimeout(() => resolve(), 1000))

        toast.promise(loadingPromise, {
            loading: "Getting Ready...",
            success: () => {
                setTimeout(() => navigate('/home'), 3000)
                return "Setting up finished!"
            },

        });
    }, [navigate]);

    return (
        <div className="page-transition relative flex  flex-col h-full justify-center py-16 items-center">
            <div className=" flex flex-col items-center gap-6">
                <Logov2/>
                <h1 className="font-medium text-2xl text-white">Jayoma AI Chatbot</h1>
            </div>

        </div>
    );
};

