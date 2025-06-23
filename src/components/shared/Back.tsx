import {useNavigate} from "react-router";
import {ChevronLeft} from "lucide-react";

export default function Back({cn}: { cn?: string }) {
    const navigate = useNavigate()

    const handleBackButton = () => navigate(-1)

    return (
        <div onClick={handleBackButton}
             className={`w-8 h-8 sm:w-10 sm:h-10 border border-primary-new-1 flex justify-center items-center rounded-lg shadow ${cn}`}>
            <ChevronLeft className="w-4 h-4 sm:h-8 sm:w-8 text-primary-new-1" />
        </div>
    )
}