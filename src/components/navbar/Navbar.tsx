import {NAV_TABS} from "../../constants/NAV_TABS.tsx";
import NavbarIcon from "./NavbarIcon.tsx";

function Navbar() {
    return (
        <div className="absolute bottom-0 flex flex-row h-[87px] w-full border border-[#DADADA] bg-white rounded-b-lg">
            {NAV_TABS.map(tab => (
                <NavbarIcon key={tab.name} icon={<tab.icon active={location.pathname === tab.path} />} path={tab.path}  />
            ))}

        </div>
    )
}

export default Navbar