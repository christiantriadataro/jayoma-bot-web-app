import {useLocation, useNavigate} from "react-router";
import {ReactNode} from "react";

type INavbarIconProps =  {
    icon: ReactNode;
    path: string;
}

function NavbarIcon({icon, path}: INavbarIconProps) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(path);
    }


    return (
        <div className="relative w-full h-full flex flex-col gap-2 justify-center items-center" onClick={handleClick}>
            {icon}
            <div className={`${path === location.pathname ? "" : "hidden"} absolute bottom-3 bg-black h-2 w-2 rounded-full`}></div>
        </div>
    )
}

export default NavbarIcon