import '../styles/Splash.css';
import logo from "../assets/images/Logo.png"
import {useNavigate} from "react-router";
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
        <div className="splash-container">
            <div className="splash-content">
                <img src={logo} alt="BrainBox Logo"/>
            </div>
            <div className="splash-footer">
                <h1>Welcome to Jayoma Chatbot</h1>
                <h2>Version 1.0</h2>
            </div>
        </div>
    );
};

export default SplashScreen;