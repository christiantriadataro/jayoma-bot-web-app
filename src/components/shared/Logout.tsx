import logo from "../../assets/svg/Logout.svg";
import {useNavigate} from "react-router";

const Logout = ({cn}: { cn?: string }) => {
    const navigate = useNavigate()

    const handleBackButton = () => navigate("/splash")

    return (
        <div onClick={handleBackButton}
             className={`bg-white w-[40px] h-[40px] flex justify-center items-center rounded-lg shadow ${cn}`}>
            <img src={logo} className="h-[18px] " alt="Back button"/>
        </div>
    )
}

export default Logout