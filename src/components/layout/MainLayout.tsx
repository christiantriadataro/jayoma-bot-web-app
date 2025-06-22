import {Outlet, useLocation} from "react-router";
import BackgroundObject1 from "../shared/BackgroundObject1.tsx";
import {Toaster} from "sonner";

const singleBgObj = ["/splash", "/home"]

const MainLayout = () => {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="animate-fade-in relative w-[414px] h-full rounded-xl bg-background-new-1">
            <div className="fixed w-full z-30 h-full">
                <Outlet/>
                <Toaster theme="dark" richColors={true} position="bottom-center"/>
            </div>
            <BackgroundObject1 className="absolute right-0 top-[10%] z-10"/>
            <div className="absolute top-48 left-36 w-32 h-32 bg-primary-new-1/70 blur-lg rounded-full z-10"></div>
            {singleBgObj.includes(location.pathname) ? <></> :
                <BackgroundObject1 className="absolute left-0 bottom-[0%] scale-x-[-1]  z-10"/>}
            {singleBgObj.includes(location.pathname) ? <></> : <div
                className="absolute bottom-24 right-48 w-32 h-32 bg-primary-new-1/70 blur-lg rounded-full z-10"></div>}
        </div>
    );
};

export default MainLayout;
