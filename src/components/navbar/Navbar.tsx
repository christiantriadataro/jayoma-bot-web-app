import {NAV_TABS} from "../../constants/NAV_TABS.tsx";
import NavbarIcon from "./NavbarIcon.tsx";
import {useNavigate} from "react-router";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="absolute bottom-0 flex flex-row h-[87px] w-full border border-[#DADADA]">
            {NAV_TABS.map(tab => (
                <NavbarIcon key={tab.name} icon={tab.icon} onClick={() => navigate(tab.path) } />
            ))}
        </div>
    ) 
}

export default Navbar