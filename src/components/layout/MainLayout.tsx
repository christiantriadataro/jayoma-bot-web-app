import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div className="w-[414px] h-full  rounded-xl bg-[#F7F8FA]">
            <Outlet/>
        </div>
    )
}


export default MainLayout