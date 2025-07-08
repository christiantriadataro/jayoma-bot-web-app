import {useNavigate} from "react-router";
import {History, House, Plus} from "lucide-react";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav
            className="self-center flex justify-between items-center px-5 rounded-4xl w-1/2 h-10 sm:h-12 gap-4 bg-background-new-3">
            <div
                onClick={() => navigate('/dashboard')}
                className="cursor-pointer text-white"
            >
                <House className="h-5 w-5 sm:h-6 sm:w-6  transition duration-200 hover:scale-110"/>
            </div>
            <div onClick={() => navigate('/chatbot')}
                className="cursor-pointer transition duration-200 w-14 h-14 sm:h-16 sm:w-16 rounded-full bg-primary-new-1 flex items-center justify-center">
                <Plus className="h-5 w-5 sm:h-6 sm:w-6 text-white  hover:scale-110"/>
            </div>
            <div
                onClick={() => navigate('/history')}
                className="cursor-pointer text-white"
            >
                <History className="h-5 w-5 sm:h-6 sm:w-6 transition duration-200 hover:scale-110"/>
            </div>
        </nav>
    )
}

