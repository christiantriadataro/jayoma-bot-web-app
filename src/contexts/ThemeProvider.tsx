import {PropsWithChildren, useEffect, useState} from "react";
import {ThemeContext} from "./ThemeContext.ts";
import {IThemeProps} from "../types/theme.types.ts";
import {ThemeInitialState} from "../constants/theme.ts";
import {toggle} from "../utils/theme.ts";

const ThemeProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<IThemeProps>(ThemeInitialState);

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevState) => ({
            theme: toggle(prevState.theme)
        }));
    };

    return (
        <ThemeContext.Provider value={{...theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider