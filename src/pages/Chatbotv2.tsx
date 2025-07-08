import {BrainCircuitIcon, ChevronLeft, Ellipsis, Send} from "lucide-react";
import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router";
import UserImage from "@/assets/images/chan-user.png"
import baseInstance from "@/constants/baseInstance.ts";
import {toast} from "sonner";

const UserImageIcon = () => {
    return (
        <img src={UserImage} className="h-8 w-8" alt=""/>
    )
}

function BotImageIcon() {
    return (
        <div className="bg-primary-new-1 h-8 px-2 rounded-full flex items-center justify-center">
            <BrainCircuitIcon className="h-4 w-4 text-white"/>
        </div>
    )
}

// const MESSAGE_INITIAL_STATE = ""

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
    messages: Message[];
    status: 'active' | 'closed';
}


function EllipsisComponent() {
  return (
    <div className="flex items-end space-x-1 h-6">
      <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0s]"></div>
      <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
    </div>
  );
}


// interface PromptProps {
//     messenger: string,
//     message: string,
// }

export default function Chatbotv2() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [chatState, setChatState] = useState<ChatState>({
        chatId: null,
        messages: [],
        status: 'active'
    });
    // const [chatState, setChatState] = useState<ChatState>(sampleQuery);
    const [message, setMessage] = useState('');


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) return;

        const currentMessage = message;
        setChatState({
            chatId: null, status: undefined,
            messages: [{
                from: "user",
                message: message,
                timestamp: ""
            }]
        })
        setMessage(''); // Clear input immediately
        setIsLoading(true);

        try {
            if (!chatState.chatId) {
                // Initial message - create new chat
                const response = await baseInstance.post("/prompts", {
                    message: currentMessage
                });

                setChatState({
                    chatId: response.data.chatId,
                    messages: response.data.messages,
                    status: response.data.status
                });
            } else {
                // Continuing conversation - update existing chat
                const response = await baseInstance.put(`/prompts/${chatState.chatId}`, {
                    message: currentMessage
                });

                setChatState({
                    ...chatState,
                    messages: response.data.messages,
                    status: response.data.status
                });
            }
        } catch (error) {
            console.error('Chat error:', error);
            // Handle error - maybe show toast notification
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-16">
            <div className="relative bg-background-new-4 rounded-t-2xl h-full flex flex-col">
                <div
                    className="h-24 px-6 border rounded-t-2xl border-background-new-3 flex items-center justify-between">
                    <div onClick={() => navigate(-1)}
                         className="cursor-pointer h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <ChevronLeft className="text-text-new-1"/>
                    </div>
                    <div className="text-text-new-1 text-sm">Ask me anything</div>
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <Ellipsis className="text-text-new-1"/>
                    </div>
                </div>
                <div className="h-full py-7 px-7 space-y-6 overflow-y-auto border-x border-background-new-3">
                    {chatState.messages.map((msg, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            <div className="space-x-3 flex flex-row text-xs items-center">
                                {msg.from === "user" ? <UserImageIcon/> : isLoading ? null : <BotImageIcon/>}
                                <div
                                    className="bg-primary-new-1 text-white font-light py-3 px-4 rounded-lg">{isLoading ? <EllipsisComponent/> : msg.message}</div>
                                {/*<div*/}
                                {/*    className="bg-primary-new-1 text-white font-light py-3 px-4 rounded-lg">{sampleQuery.messages[1].results}</div>*/}
                            </div>
                            <div className="ml-11 flex flex-row items-center space-x-3">
                                <div className="mt-2 text-xs space-y-2">
                                    {msg.results?.map((result, idx) => (
                                        <div key={idx}
                                             className="bg-primary-new-1 text-white font-light py-3 px-4 rounded-lg">
                                            <p className="font-semibold">Ordinance {result.ordinance_id}: {result.category} | {result.score}</p>
                                            <p><strong>Fine: </strong>{result.fines}</p><br />
                                            <p><strong>Date enacted: </strong>{result.date_enacted}</p><br />
                                            <p><strong>Summary: </strong>{result.short_text}</p><br />
                                            <p><strong>Link: </strong><a target="_blank" className=" px-3 py-1 rounded-sm bg-gray-600" href={result.links}>Click here for whole text</a></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="border-x border-b border-background-new-3 pt-5 pb-10 w-full bottom-10 gap-5 flex px-6 justify-between">
                    <input
                        value={message}
                        onChange={handleChange}
                        placeholder="Ask me anything"
                        type="text" className="text-text-new-1 text-xs  h-12
                        focus:bg-background-new-4
                    bg-background-new-3 p-4 w-full rounded-xl border border-[#525863]"
                    />
                    <button type="submit"
                            className="h-12 w-16  bg-primary-new-1  rounded-lg flex items-center justify-center">
                        <Send className="text-white h-5"/>
                    </button>
                </form>
            </div>
        </div>
    );
};


