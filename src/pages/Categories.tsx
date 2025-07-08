import {BrainCircuitIcon, ChevronLeft, Ellipsis, Send} from "lucide-react";
import {useNavigate} from "react-router";
// const UserImageIcon = () => {
//     return (
//         <img src={UserImage} className="h-8 w-8" alt=""/>
//     )
// }
//
function BotImageIcon() {
    return (
        <div className="bg-primary-new-1 h-8 w-8 rounded-full flex items-center justify-center">
            <BrainCircuitIcon className="h-4 w-4 text-white"/>
        </div>
    )
}

export default function Categories() {
    const navigate = useNavigate();
    // const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-16">
            <div className="relative bg-background-new-4 rounded-t-2xl h-full flex flex-col">
                <div
                    className="h-24 px-6 border rounded-t-2xl border-background-new-3 flex items-center justify-between">
                    <div onClick={() => navigate(-1)}
                         className="cursor-pointer h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <ChevronLeft className="text-text-new-1"/>
                    </div>
                    <div className="text-text-new-1 text-md">Categories</div>
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <Ellipsis className="text-text-new-1"/>
                    </div>
                </div>
                <div className="h-full py-7 px-7 space-y-6 overflow-y-auto border-x border-background-new-3">
                    {/*{prompt.map((prompt, index) => (*/}
                        <div
                            // key={index}
                            className="space-x-3 flex text-xs items-center">
                            <BotImageIcon/>
                            <div
                                className="bg-primary-new-1 text-white font-light py-3 px-4 rounded-lg">""</div>
                        </div>
                    {/*))}*/}
                </div>
                <form
                    // onSubmit={handleSubmit}
                    className="border-x border-b border-background-new-3 pt-5 pb-10 w-full bottom-10 gap-5 flex px-6 justify-between">
                    <input
                        // value={message}
                        // onChange={handleChange}
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