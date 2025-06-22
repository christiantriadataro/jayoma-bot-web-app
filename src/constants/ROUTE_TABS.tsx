import {ReactNode} from "react";
import Chatbot from "../pages/Chatbot.tsx";
import WelcomeHome from "../pages/WelcomeHome.tsx";
import Profile from "../pages/Profile.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import ChatHistory from "../pages/ChatHistory.tsx";
import Categories from "../pages/Categories.tsx";
import HomeV2 from "../pages/Homev2.tsx";
import Splashv2 from "../pages/Splashv2.tsx";
import Intro from "@/pages/Intro.tsx";
import Signupv2 from "@/pages/Signupv2.tsx";
import Loginv2 from "@/pages/Loginv2.tsx";
import Dashboard from "@/pages/Dashboard.tsx";

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
        element: <Chatbot/>,
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
        path: "/prompts",
        element: <ChatHistory/>
    }
]