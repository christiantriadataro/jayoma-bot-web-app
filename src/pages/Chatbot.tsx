import '../styles/Chat.css';
import Back from "../components/shared/Back.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";

// interface IMessageProps {
//     text: string;
//     sender: string;
// }

const ChatBot = () => {
    // const [messages, setMessages] = useState<IMessageProps[]>([]);
    // const [inputValue, setInputValue] = useState('');
    //
    // const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!inputValue.trim()) return;
    //
    //
    //     setMessages([...messages, {text: inputValue, sender: 'user'}]);
    //
    //
    //     setTimeout(() => {
    //         setMessages((prevMessages) => [
    //             ...prevMessages,
    //             {text: 'I am a bot.', sender: 'bot'},
    //         ]);
    //     }, 1000);
    //
    //     setInputValue('');
    // };

    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <div className="mb-5 mt-36 gap-10 flex flex-col justify-between items-center">

                <div>
                    <h1 className="font-urbanist text-[#757474] font-bold text-[40px] w-full text-center">Jayoma
                        Bot</h1>

                    <p className="mt-[15px]  text-[14px] text-center text-[#616161]">Start chatting with Jayoma
                        now.
                        You can ask me anything.</p>
                </div>
                <CustomButton text="Get Started" variant="black" cn="mt-36"/>

            </div>


        </div>
    );
};

export default ChatBot;