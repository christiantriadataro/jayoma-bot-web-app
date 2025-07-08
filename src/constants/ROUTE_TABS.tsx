import {ReactNode} from "react";
import WelcomeHome from "../pages/WelcomeHome.tsx";
import Profile from "../pages/Profile.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import Categories from "../pages/Categories.tsx";
import HomeV2 from "../pages/Homev2.tsx";
import Splashv2 from "../pages/Splashv2.tsx";
import Intro from "@/pages/Intro.tsx";
import Signupv2 from "@/pages/Signupv2.tsx";
import Loginv2 from "@/pages/Loginv2.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Chatbotv2 from "@/pages/Chatbotv2.tsx";
import History from "@/pages/History.tsx";

export interface IRouterTabs {
    path: string;
    element: ReactNode;
}

export const ROUTER_TABS: IRouterTabs[] = [
    {
        path: "/splash",
        element: <Splashv2/>
    },
     {
        path: "/intro",
        element: <Intro/>
    },

    {
        path: "/register",
        element: <Signupv2/>,
    },
    {
        path: "/login",
        element: <Loginv2/>,
    },
    {
        path: "/home",
        element: <HomeV2/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/chatbot",
        element: <Chatbotv2/>,
    },
    {
        path: "/welcome-home",
        element: <WelcomeHome/>,
    },
    {
        path: "/categories",
        element: <Categories/>,
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword/>,
    },
    {
        path: "/history",
        element: <History/>
    }
]