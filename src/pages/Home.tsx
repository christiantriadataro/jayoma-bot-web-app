import '../styles/Home.css';
import '../styles/Header.css';
import {useNavigate} from "react-router";
import Logo from "../components/single-components/Logo.tsx";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col px-[25px] w-full h-full justify-center items-center">
            <Logo/>
            <div className="font-urbanist text-[40px] mt-[29px] font-bold">
                <h1>Welcome to</h1>
                <h2>Jayoma bot</h2>
            </div>
            <div className="mt-[63px] w-full flex gap-[23px] flex-col">
                <button className="w-full bg-black text-white h-[61px] rounded-4xl shadow"
                        onClick={() => navigate('/login')}>Log in
                </button>
                <button className="w-full bg-[#E3E3E3] text-[#B1B1B1] h-[61px] rounded-4xl"
                        onClick={() => navigate('/register')}>Sign up
                </button>
            </div>

        </div>
    );
};

export default Home;