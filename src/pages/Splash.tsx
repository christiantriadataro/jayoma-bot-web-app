import '../styles/Splash.css';
import {useNavigate} from "react-router";
import Logo from "../components/single-components/Logo.tsx";
import {useEffect} from "react";

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col h-full justify-end items-center">
            <div className="h-4/6 flex flex-col justify-between  items-center">
                <Logo/>
                <div className="mb-[39px] text-center">
                    <h1 className="font-medium text-[35px]">Jayoma Bot</h1>
                    <h2 className="text-[#757171]">Version 1.0</h2>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;