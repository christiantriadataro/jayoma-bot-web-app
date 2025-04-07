import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div className="w-[414px] h-full  rounded-xl bg-[#fff]">
            <Outlet/>
        </div>
    )
}


export default MainLayout