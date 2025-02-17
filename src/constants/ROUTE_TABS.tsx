import {ReactNode} from "react";
import DummyComponent from "../components/layout/DummyComponent.tsx";
import Splash from "../pages/Splash.tsx";
import Home from "../pages/Home.tsx";
import Chatbot from "../pages/Chatbot.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";

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
        element: <DummyComponent text={"welcome"}/>,
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
        path: "/categories",
        element: <DummyComponent text={"categories"}/>,
    },
    {
        path: "/profile",
        element: <DummyComponent text={"profile"}/>,
    },
    {
        path: "/forgot-password",
        element: <DummyComponent text={"forgot-password"}/>,
    },
]