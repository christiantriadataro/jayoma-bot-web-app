import '../styles/Chat.css';
import {FormEvent, useState} from "react";
import Back from "../components/shared/Back.tsx";
import SendIcon from "../assets/svg/Send.svg"

interface IMessageProps {
    text: string;
    sender: "user" | "bot";
}

const ChatBot = () => {
    const [messages, setMessages] = useState<IMessageProps[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [hasStartedChat, setHasStartedChat] = useState(false);

    const addMessage = (text: string, sender: "user" | "bot") => {
        setMessages((prevMessages) => [...prevMessages, {text, sender}]);
    };

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addMessage(inputValue, "user");
        setHasStartedChat(true);
        setInputValue("");

        setTimeout(() => {
            addMessage("Welcome to Jayoma chatbot.", "bot");
        }, 1000);
    };

    const handlePredefinedQuestionClick = (question: string) => {
        addMessage(question, "user");
        setHasStartedChat(true);

        setTimeout(() => {
            addMessage("This is a response to your question.", "bot");
        }, 1000);
    };

    const predefinedQuestions = [
        "What are the specific ordinances in place to ensure public safety in our barangay, such as curfews or regulations on public gatherings?",
        "Can you provide details on the ordinances related to the establishment and operation of businesses in our barangay?",
        "What are the barangay’s health and sanitation ordinances, particularly those aimed at controlling the spread of diseases?",
    ];

    return (
        <div className="relative flex flex-col w-full h-full bg-[#f8f8f8]">
            <Back cn="absolute top-15 left-10"/>

            <h1 className="mt-[62px] text-center text-['Poppins'] font-medium text-[22px] text-[#757474]">
                Chat Assist
            </h1>

            {!hasStartedChat && (
                <div className="mt-6 flex flex-col gap-3 px-6">
                    {predefinedQuestions.map((question, index) => (
                        <div
                            key={index}
                            className="p-3 py-6 bg-[#F7F7F8] text-[14px] rounded-lg shadow-md text-[#A0A0A5] text-center cursor-pointer"
                            onClick={() => handlePredefinedQuestionClick(question)}
                        >
                            {question}
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-col flex-grow px-6 mt-6 overflow-y-auto max h-[60vh]">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-3 max-w-[75%] rounded-lg shadow-md mb-2 ${
                            msg.sender === "user"
                                ? "bg-gray-900 text-white self-end"
                                : "bg-gray-200 text-gray-700 self-start"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg"></div>
            <form
                onSubmit={handleSendMessage}
                className="relative p-4 shadow-lg flex items-center w-full"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Send a message..."
                    className="relative text-sm flex-grow p-3 text-[#A0A0A5] outline-none rounded-lg bg-[#F7F7F8] hover:bg-white border border-[#E1E1E1]"
                />
                <img src={SendIcon} className="absolute right-4 ml-3 p-3  text-white rounded-lg" alt=""/>

            </form>
        </div>
    );
};


export default ChatBot;