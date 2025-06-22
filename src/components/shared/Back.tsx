import {useNavigate} from "react-router";
import {ChevronLeft} from "lucide-react";

export default function Back({cn}: { cn?: string }) {
    const navigate = useNavigate()

    const handleBackButton = () => navigate(-1)

    return (
        <div onClick={handleBackButton}
             className={` w-[40px] h-[40px] border border-primary-new-1 flex justify-center items-center rounded-lg shadow ${cn}`}>
            <ChevronLeft className="text-primary-new-1" />
        </div>
    )
}