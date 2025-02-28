import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext.ts";
import {THEME_MESSAGE} from "../constants/theme.ts";


function useToggleTheme() {
    const theme = useContext(ThemeContext);

    if (!theme) {
        throw new Error(THEME_MESSAGE)
    }
    return theme;
}

export default useToggleTheme