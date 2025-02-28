import {ReactNode} from "react";
import DummyComponent from "../components/layout/DummyComponent.tsx";
import Splash from "../pages/Splash.tsx";
import Home from "../pages/Home.tsx";
import Chatbot from "../pages/Chatbot.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import WelcomeHome from "../pages/WelcomeHome.tsx";
import Profile from "../pages/Profile.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import ChatHistory from "../pages/ChatHistory.tsx";
import Categories from "../pages/Categories.tsx";

export interface IRouterTabs {
    path: string;
    element: ReactNode;
}

export const ROUTER_TABS: IRouterTabs[] = [
    {
        path: "/splash",
        element: <Splash/>
    },
    {
        path: "/welcome",
        element: <DummyComponent text={"welcomes"}/>,
    },
    {
        path: "/register",
        element: <Signup/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/home",
        element: <Home/>,
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
        path: "/Chat-history",
        element: <ChatHistory/>
    }
]