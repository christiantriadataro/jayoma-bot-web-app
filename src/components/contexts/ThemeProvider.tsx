import {ReactNode, useEffect, useState} from "react";
import {ThemeContext} from "./ThemeContext.ts";

const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        localStorage.getItem('theme') === "dark"
    );

    useEffect(() => {
        console.log(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider