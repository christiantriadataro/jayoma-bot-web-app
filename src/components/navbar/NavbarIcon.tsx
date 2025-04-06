import {ComponentProps} from "react";

type INavbarIconProps = ComponentProps<'div'> & {
    icon: string;
}

function NavbarIcon({icon, ...buttonProps}: INavbarIconProps) {
    return (
        <div className="w-full h-full flex justify-center items-center" {...buttonProps}>
            <img src={icon} alt=""/>
        </div>
    )
}

export default NavbarIcon