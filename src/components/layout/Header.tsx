import {ThemeContext} from '../contexts/ThemeContext.ts';
import '../../styles/Header.css';
import {useNavigate} from "react-router";
import {useContext} from "react";

const Header = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/chatbot')} style={{marginRight: '10px'}}>
                Try Chatbot
            </button>
            <header style={{color: isDarkMode ? '#fff' : '#000'}}>
                <label className="switch">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
                    <span className="slider">
            <svg className="slider-icon" viewBox="0 0 512 512">
              <path
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/>
            </svg>
          </span>
                </label>
            </header>
        </div>
    );
};

export default Header;
