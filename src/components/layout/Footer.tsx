import "../../styles/Footer.css"
import useToggleTheme from "../../hooks/useToggleTheme.ts";

const Footer = () => {
    const {theme} = useToggleTheme()

    return (
        <footer style={{backgroundColor: theme ? '#333' : '#f4f4f4', color: theme ? '#fff' : '#000'}}>
            <p>&copy; 2025 Jayoma Chatbot. All rights reserved.</p>
        </footer>


    );
};

export default Footer;