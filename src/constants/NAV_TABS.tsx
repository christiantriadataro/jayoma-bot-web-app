import HomeActiveIcon from "../assets/svg/HomeActiveIcon.svg"
import CategoryIcon from "../assets/svg/CategoryIcon.svg"
import UserProfileIcon from "../assets/svg/UserProfile.svg"
import UserPromptIcon from "../assets/svg/UserPromptIcon.svg"

export interface INavbarLinks {
    name: string;
    path: string;
    icon: string;
}

export const NAV_TABS: INavbarLinks[] = [
    {
        name: "Home",
        path: "/welcome-home",
        icon: HomeActiveIcon
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