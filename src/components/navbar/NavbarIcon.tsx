interface INavbarIconProps {
    icon: string;
}

function NavbarIcon({icon}: INavbarIconProps) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img src={icon} alt=""/>
        </div>
    )
}

export default NavbarIcon