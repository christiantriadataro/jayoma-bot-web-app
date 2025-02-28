import {ThemeContextType} from "../types/theme.types.ts";
import {THEME_TYPE_DARK, THEME_TYPE_LIGHT} from "../constants/theme.ts";

export function toggle(type: ThemeContextType): ThemeContextType {
    return type === THEME_TYPE_LIGHT ? THEME_TYPE_DARK : THEME_TYPE_LIGHT
}