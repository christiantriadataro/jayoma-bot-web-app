import {ChevronLeft, Ellipsis, Send} from "lucide-react";
import {ChangeEvent, FormEvent, useState} from "react";

const MESSAGE_INITIAL_STATE = ""

export default function Chatbotv2() {
    const [message, setMessage] = useState<string>(MESSAGE_INITIAL_STATE)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(MESSAGE_INITIAL_STATE)
    }

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-16">
            <div className="relative bg-background-new-4 rounded-t-2xl h-full ">
                <div
                    className="h-20 px-6 border rounded-t-2xl border-background-new-3 flex items-center justify-between">
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <ChevronLeft className="text-text-new-1"/>
                    </div>
                    <div className="text-text-new-1 text-sm">Ask me anything</div>
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <Ellipsis className="text-text-new-1"/>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full absolute bottom-10 gap-5 flex px-6 justify-between">
                    <input
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


