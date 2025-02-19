import {THEME_TYPE_DARK, THEME_TYPE_LIGHT} from "../constants/theme.ts";

export type ThemeContextType = typeof THEME_TYPE_DARK | typeof THEME_TYPE_LIGHT;

export interface IThemeProps {
    theme: ThemeContextType
}

export interface IThemeContextProps extends IThemeProps {
    toggleTheme: () => void
}

