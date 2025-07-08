import UserProfile from "@/assets/images/chan-user.png";
import {Bookmark, BrainCircuit, ChartColumnStackedIcon, ChevronDown, ChevronRight, Scale} from "lucide-react";
import NavBar from "@/components/navbar/Navbar.tsx";
import {useEffect, useState} from "react";
import baseInstance from "@/constants/baseInstance.ts";
import {useNavigate} from "react-router";

type Ordinance = {
    category: string,
    confidence: string,
    date_enacted: string,
    fines: string
    links: string,
    ordinance_id: string,
    score: string,
    short_text: string,
    status: string
}

type Message = {
    from: 'user' | 'bot';
    message: string;
    timestamp: string;
    results?: Ordinance[]; // Add proper type for results if needed
}

type ChatState = {
    chatId: string | null;
    id: string;
    messages: Message[];
    status: 'active' | 'closed';
}

type Categories = {
    id: string;
    name: string;
}


export default function Dashboard() {
    const [categories, setCategories] = useState<Categories[]>([])
    const [prompts, setPrompts] = useState<ChatState[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const handleCategories = async () => {
            const response = await baseInstance.get("/categories");
            setCategories(response.data)
        }
        handleCategories()
    }, [])
    
    useEffect(() => {
        const handleResponse = async () => {
            const response = await baseInstance.get("/prompts");
            setPrompts(response.data)
        }
        handleResponse()
    }, [])

    useEffect(() => {
        console.log(categories)
    }, [categories]);

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-5">
            <div className="flex flex-col px-8 space-y-1">
                <img src={UserProfile} className="w-14 h-14" alt=""/>
                <h1 className="sm:mt-5 font-medium text-lg sm:text-xl text-white">
                    Hi, User
                </h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-md sm:text-lg">Categories</h1>
                    <div className="transition duration-200 hover:translate-x-0.5 cursor-pointer flex items-center">
                        <h1 className="font-medium text-xs text-primary-new-1">Explore All</h1>
                        <ChevronRight className="h-4 text-primary-new-1"/>
                    </div>
                </div>
            </div>
            <div
                className="mt-18 flex h-full flex-col gap-5 justify-between w-full bg-background-new-4/80 py-8 px-4 text-sm text-text-new-1 rounded-t-2xl">
                <div className=" -mt-24 grid grid-cols-2 gap-3">
                    {categories.filter((_, index) => index < 2).map((category, index) => (
                        <div key={index}
                            className="w-full flex flex-col justify-between rounded-xl gap-3 p-4 bg-background-new-3">
                            <div className="flex justify-between">
                                <div
                                    className="w-11 h-11 flex justify-center items-center rounded-full bg-primary-new-1">
                                    <ChartColumnStackedIcon className="text-blue-950 w-5 h-5"/>
                                </div>
                                <Bookmark className="mt-1 h-5 transition duration-200 hover:scale-110 text-text-new-1"/>
                            </div>
                            <div className="truncate text-white text-xs sm:text-xs font-medium">
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-md sm:text-lg">Recent Prompting</h1>
                    <div className="transition duration-200 hover:translate-x-0.5 cursor-pointer flex items-center">
                        <h1 onClick={() => navigate('/history')} className="font-medium text-xs text-primary-new-1">Explore All</h1>
                        <ChevronRight className="h-4 text-primary-new-1"/>
                    </div>
                </div>
                <div className="relative h-[172px] space-y-2 flex flex-col">
                    {prompts.filter((_, index) => index < 2).map((prompt, index) => (
                        <div key={index}
                            className="w-full grid grid-cols-5 items-center justify-between rounded-xl p-4 bg-background-new-3">
                            <div
                                className="w-11 h-11 col-span-1 flex justify-center items-center rounded-full bg-background-new-4">
                                <Scale className="text-text-new-1"/>
                            </div>
                            <div className="flex col-span-3 flex-col justify-between h-full py-1 text-[10px]">
                                <div className="text-xs text-white truncate">{prompt.messages[0].message}</div>
                                <div className="truncate">{prompt.messages[1].message}</div>
                            </div>
                            <div className="col-span-1 justify-self-end">
                                <ChevronRight className="h-8 text-text-new-1"/>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="sm:h-50 h-44 sm:border w-full px-5 pt-3 sm:pt-5 pb-2 bg-background-new-3/80 rounded-xl flex flex-col items-center">
                    <div className="-mt-8 w-12 h-12 flex items-center justify-center bg-primary-new-1 rounded-2xl">
                        <BrainCircuit className="text-blue-950"/>
                    </div>
                    <div className="pt-2 h-full w-full flex flex-col gap-2 justify-between items-center">
                        <h1 className="text-white text-md sm:text-lg">Welcome to Jayoma</h1>
                        <p className="text-text-new-1 text-center text-xs">Say hello to a world where every conversation
                            feels natural, engaging, and smarter. Always ready to elevate your chats to a whole new
                            level!</p>
                        <div
                            className="transition duration-200 hover:translate-y-0.5 cursor-pointer flex flex-col items-center">
                            <h1 className="font-medium text-xs text-primary-new-1">Explore All</h1>
                            <ChevronDown className="h-4 text-primary-new-1"/>
                        </div>
                    </div>
                </div>
                <NavBar/>
            </div>
        </div>
    );
};


