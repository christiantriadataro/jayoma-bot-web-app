import logo from "../../assets/svg/Back.svg";
import {useNavigate} from "react-router";

const Logo = ({cn}: { cn?: string }) => {
    const navigate = useNavigate()

    const handleBackButton = () => navigate(-1)

    return (
        <div onClick={handleBackButton}
             className={`bg-white w-[40px] h-[40px] flex justify-center items-center rounded-lg shadow ${cn}`}>
            <img src={logo} className="h-[15px] " alt="Back button"/>
        </div>
    )
}

export default Logo