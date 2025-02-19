import {createContext} from 'react';
import {IThemeContextProps} from "../types/theme.types.ts";

export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)