import {FormEvent, useState} from 'react';
import '../styles/Chat.css';
import Header from "../components/layout/Header.tsx";

interface IMessageProps {
    text: string;
    sender: string;
}

const ChatBot = () => {
    const [messages, setMessages] = useState<IMessageProps[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;


        setMessages([...messages, {text: inputValue, sender: 'user'}]);


        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {text: 'I am a bot.', sender: 'bot'},
            ]);
        }, 1000);


        setInputValue('');
    };

    return (
        <div>
            <Header/>
            <div className="chatbot-container">
                <h2>Jayoma Chatbot</h2>
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="chatbot-input-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;