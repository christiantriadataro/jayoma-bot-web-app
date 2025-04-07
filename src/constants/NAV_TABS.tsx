import HomeIcon from "../components/svg/HomeIcon.tsx"
import CategoryIcon from "../components/svg/CategoryIcon.tsx"
import UserProfileIcon from "../components/svg/UserProfileIcon.tsx"
import UserPromptIcon from "../components/svg/UserPromptIcon.tsx"
import {IconProps} from "../types/icon.types.ts";

export interface INavbarLinks {
    name: string;
    path: string;
    icon: ({ active }: IconProps) => JSX.Element;
}

export const NAV_TABS: INavbarLinks[] = [
    {
        name: "Home",
        path: "/welcome-home",
        icon: HomeIcon
    },
    {
        name: "Prompt Categories",
        path: "/categories",
        icon: CategoryIcon
    },
    {
        name: "User Prompts",
        path: "/prompts",
        icon: UserPromptIcon
    },
    {
        name: "User Profile",
        path: "/profile",
        icon: UserProfileIcon
    }
]