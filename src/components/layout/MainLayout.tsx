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
            <BackgroundObject1 className="absolute scale-75 -right-7 sm:right-0 -top-5 sm:top-[10%] z-10"/>
            <div className="absolute bg-primary-new-1/70 blur-lg rounded-full z-10
            sm:w-32 sm:h-32 sm:top-48 sm:left-36
            w-16 h-16 top-36 left-24
            "></div>
            {/*{singleBgObj.includes(location.pathname) ? <></> :*/}
            {/*    // <BackgroundObject1 className="absolute scale-50 bottom-0 sm:left-0 sm:bottom-[0%] scale-x-[-1] scale-y-[-1]  z-10"/>}*/}
            {/*    // <BackgroundObject1 className="absolute z-10 scale-x-[-1] scale-y-[-1]"/>}*/}
            {singleBgObj.includes(location.pathname) ? <></> : <div
                className="absolute bottom-24 right-48 w-16 h-16 sm:w-32 sm:h-32 bg-primary-new-1/70 blur-lg rounded-full z-10"></div>}
        </div>
    );
};

export default MainLayout;
