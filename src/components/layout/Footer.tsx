import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext.ts';
import "../../styles/Footer.css"

const Footer = () => {
    const {isDarkMode} = useContext(ThemeContext);

    return (
        <footer style={{backgroundColor: isDarkMode ? '#333' : '#f4f4f4', color: isDarkMode ? '#fff' : '#000'}}>
            <p>&copy; 2025 Jayoma Chatbot. All rights reserved.</p>
        </footer>


    );
};

export default Footer;