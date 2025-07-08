import {ChevronLeft, ChevronRight, MessagesSquare} from "lucide-react";
import {useEffect, useState} from "react";
import NavBar from "@/components/navbar/Navbar.tsx";
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

export default function HistoryPage() {
    const [prompts, setPrompts] = useState<ChatState[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const handleResponse = async () => {
            const response = await baseInstance.get("/prompts");
            setPrompts(response.data)
        }
        handleResponse()
    }, [])

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-0">
            <div onClick={() => navigate(-1)}
                 className="ml-9 mt-10 cursor-pointer py-1 w-10 border border-text-new-1 rounded-lg flex items-center justify-center">
                <ChevronLeft className="text-text-new-1 w-5 h-5"/>
            </div>
            <div className="flex flex-col items-center  px-8 space-x-3 space-y-5">
                <h1 className="sm:mt-5 font-medium text-center text-xl sm:text-xl text-white">
                    History
                </h1>
            </div>
            <div
                className="mt-5 flex h-full flex-col gap-5 justify-between w-full bg-background-new-4/95 py-8 px-4 text-sm text-text-new-1 rounded-t-2xl">
                {prompts.length > 0 ? prompts.map((prompt, index) => (
                    <div
                        key={index}
                        className="w-full grid grid-cols-6 items-center justify-between rounded-xl p-4 bg-background-new-3">
                        <div className="flex col-span-5 flex-col justify-between h-full py-1 text-[10px]">
                            <div className="text-xs text-white truncate">{prompt.messages[0].message}</div>
                            <div className="truncate">{prompt.messages[1].message}</div>
                        </div>
                        <div className="col-span-1 justify-self-end">
                            <ChevronRight className="h-8 text-text-new-1"/>
                        </div>
                    </div>
                )) : <div className="h-full flex justify-center text-center items-center px-5">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="p-4  rounded-4xl bg-background-new-3 flex items-center justify-center">
                            <MessagesSquare className="h-14 w-14"/>
                        </div>
                        <div className="text-xl font-bold">You don't have chat history yet.</div>
                        <div className="text-text-new-1/50 text-xs">Your chat history will appear here. Let's create
                            your chat now!
                        </div>
                    </div>
                </div>}

                <NavBar/>
            </div>
        </div>
    );
};


