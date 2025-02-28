import UserPromptIcon from "../../assets/svg/UserPromptIcon.svg"
import HomeActiveIcon from "../../assets/svg/HomeActiveIcon.svg"
import CategoryIcon from '../../assets/svg/CategoryIcon.svg'
import UserProfile from "../../assets/svg/UserProfile.svg"
import { useNavigate } from "react-router"

function NavbarIcon({icon, path}: {icon: string, path: string}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path)
    }
    
    return (
        <div className="cursor-pointer text-[#ACADB9] tw-full h-full flex justify-center items-center bg-white" onClick={handleClick}>
                    <img src={icon} alt=""/>
                </div>
    )
}

const NAVBAR_TABS = [
    {
        path: "/welcome-home",
        icon: HomeActiveIcon
    },
    {
        path: "/Categories",
        icon: CategoryIcon
    },
    {
        path: "/Chat-history",
        icon: UserPromptIcon
    },
    {
        path: "/Profile",
        icon: UserProfile
    }
    
]

function Navbar() {
    return (
        <div className="absolute bottom-0 flex flex-row h-[50px] w-full border border-[#DADADA]">
                {NAVBAR_TABS.map((tab, index) => (
                    <NavbarIcon key={index} icon={tab.icon} path={tab.path} />
                ))}
        </div>
    )
}

export default Navbar;