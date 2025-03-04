  import '../styles/Chat.css';
  import { useState, FormEvent } from "react";
  import Back from "../components/shared/Back.tsx";


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

    
    const predefinedQuestions = [
        "What are the specific ordinances in place to ensure public safety in our barangay, such as curfews or regulations on public gatherings?",
        "Can you provide details on the ordinances related to the establishment and operation of businesses in our barangay?",
        "What are the barangay’s health and sanitation ordinances, particularly those aimed at controlling the spread of diseases?",
    ];

    return (
        <div className="relative flex flex-col w-full h-full bg-[#f8f8f8]">
            <Back cn="absolute top-6 left-6"/>

            <div className="mt-20 text-center">
                <h1 className="font-urbanist font-bold text-[40px]">Jayoma Bot</h1>
            </div>

        {!hasStartedChat && (
          <div className="mt-6 flex flex-col gap-3 px-6">
            {predefinedQuestions.map((question, index) => (
              <div
                key={index}
                className="p-3 bg-gray-100 rounded-lg shadow-md text-gray-700 "
                
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
                className="p-4  shadow-lg flex items-center w-full"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Send a message..."
                    className="flex-grow p-3 border-none outline-none rounded-lg bg-gray-100"
                />
                <button
                    type="submit"
                    className="ml-3 p-3 bg-gray-900 text-white rounded-lg"
                >
                    →
                </button>
            </form>
        </div>
    );
};


export default ChatBot;