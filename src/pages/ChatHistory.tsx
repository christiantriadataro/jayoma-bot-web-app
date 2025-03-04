
import { useState, useEffect } from "react";
import Back from "../components/shared/Back.tsx";
import Navbar from "../components/shared/Navbar.tsx";

interface IMessage {
    text: string;
    sender: "user" | "bot";
}

interface IChatSession {
    id: number;
    title: string;
    messages: IMessage[];
}

const ChatHistory = () => {
    const [chatSessions, setChatSessions] = useState<IChatSession[]>([]);
    const [selectedChat, setSelectedChat] = useState<IChatSession | null>(null);


    useEffect(() => {
        const storedChats = localStorage.getItem("chatHistory");
        if (storedChats) {
            try {
                const parsedChats: IChatSession[] = JSON.parse(storedChats) || [];


                const validatedChats = parsedChats.map((chat) => ({
                    ...chat,
                    messages: chat.messages || [],
                }));

                validatedChats.sort((a, b) => b.id - a.id);

                setChatSessions(validatedChats);
            } catch (error) {
                console.error("Error parsing chat history:", error);
                setChatSessions([]);
            }
        }
    }, []);

    return (
        <div className="relative flex flex-col px-6 w-full h-full items-center bg-gray-100">
            <Back cn="absolute top-5 left-5"/>
            <h2 className="text-xl font-semibold mt-16 mb-4">Chat History</h2>
            {selectedChat ? (
                <>

                    <div
                        className="w-full flex flex-col overflow-y-auto max-h-[70vh] p-4 bg-white rounded-lg shadow-md">
                        <button
                            onClick={() => setSelectedChat(null)}
                            className="mb-4 text-blue-500 underline"
                        >
                            ← Back to history
                        </button>


                        {selectedChat.messages.length > 0 ? (
                            selectedChat.messages.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`p-3 mb-2 max-w-[75%] rounded-lg shadow-sm ${
                                        chat.sender === "user"
                                            ? "bg-gray-900 text-white self-end"
                                            : "bg-gray-200 text-gray-700 self-start"
                                    }`}
                                >
                                    {chat.text}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No messages in this chat.</p>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div
                        className="w-full flex flex-col overflow-y-auto max-h-[70vh] p-4 bg-white rounded-lg shadow-md">
                        {chatSessions.length > 0 ? (
                            chatSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="p-3 mb-2 w-full bg-gray-100 rounded-lg text-gray-700 shadow-sm cursor-pointer hover:bg-gray-200"
                                    onClick={() => setSelectedChat(session)}
                                >
                                    {session.title}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No chat history available.</p>
                        )}
                    </div>
                </>
            )}
            <Navbar/>
        </div>
    );
};

export default ChatHistory;

