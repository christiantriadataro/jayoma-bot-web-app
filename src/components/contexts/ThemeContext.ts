import {createContext} from 'react';

export interface IThemeProps {
    isDarkMode: boolean;
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeProps>({} as IThemeProps);
