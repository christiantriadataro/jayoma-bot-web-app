import '../styles/Home.css';
import '../styles/Header.css';
import Header from "../components/layout/Header.tsx";
import {useNavigate} from "react-router";


const Home = () => {
    const navigate = useNavigate();

    return (

        <div className="container">
            <Header/>
            <div className="main-content">
                <div className="home">
                    <h1>Welcome to</h1>
                    <h2>Jayoma Chatbot</h2>
                    <button className="login" onClick={() => navigate('/login')}>Log in</button>
                    <button className="signup" onClick={() => navigate('/register')}>Sign up</button>
                </div>
            </div>

        </div>
    );
};

export default Home;