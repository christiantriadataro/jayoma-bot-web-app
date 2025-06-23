import '../styles/Splash.css';
import UserProfile from "@/assets/images/chan-user.png"
import {Bookmark, BrainCircuit, ChevronDown, ChevronRight, History, House, Plus, Scale, Swords} from "lucide-react";

export default function Dashboard() {

    return (
        <div className="page-transition overflow-auto relative flex flex-col h-full pt-10 sm:pt-16">
            <div className="flex flex-col px-8 space-y-5">
                <img src={UserProfile} className="w-14 h-14" alt=""/>
                <h1 className="sm:mt-5 font-medium text-lg sm:text-2xl text-white">
                    Hi, Chan
                </h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-md sm:text-xl">History</h1>
                    <div className="transition duration-200 hover:translate-x-0.5 cursor-pointer flex items-center">
                        <h1 className="font-medium text-xs text-primary-new-1">Explore All</h1>
                        <ChevronRight className="h-4 text-primary-new-1"/>
                    </div>
                </div>
            </div>
            <div
                className="mt-18 sm:mt-24 flex flex-col gap-5 justify-between w-full bg-background-new-4/80 py-8 px-4 text-sm text-text-new-1 rounded-t-2xl">
                <div className=" -mt-24 h-[172px] grid grid-cols-2 gap-3">
                    <div className="w-full flex flex-col justify-between rounded-xl gap-1.5 p-4 bg-background-new-3">
                        <div className="flex justify-between">
                            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-primary-new-1">
                                <Scale className="text-blue-950"/>
                            </div>
                            <Bookmark className="mt-1 h-5 transition duration-200 hover:scale-110 text-text-new-1"/>
                        </div>
                        <div className="truncate text-white text-xs sm:text-sm font-medium">
                            What is blasdfsadsfja dkafljd;sa
                        </div>
                        <div
                            className="text-[10px] line-clamp-3 overflow-hidden text-ellipsis whitespace-break-spaces h-10">
                            Generate great article with any topics you want. dfasfsda fdsafasfsa fdafdasskjfsfk;lfsf
                            fdsf ds
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                            <div>Sept. 27</div>
                            <div>11:00 AM</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between rounded-xl p-4 bg-background-new-3">
                        <div className="flex justify-between">
                            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-primary-new-1">
                                <Swords className="text-blue-950"/>
                            </div>
                            <Bookmark className="mt-1 h-5 transition duration-200 hover:scale-110 text-text-new-1"/>
                        </div>
                        <div className="truncate text-white text-xs sm:text-sm font-medium">
                            What is blasdfsadsfja dkafljd;sa
                        </div>
                        <div
                            className="text-[10px] line-clamp-3 overflow-hidden text-ellipsis whitespace-break-spaces h-10">
                            Generate great article with any topics you want. dfasfsda fdsafasfsa fdafdasskjfsfk;lfsf
                            fdsf ds
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                            <div>Sept. 27</div>
                            <div>11:00 AM</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-md sm:text-xl">Recent Prompting</h1>
                    <div className="transition duration-200 hover:translate-x-0.5 cursor-pointer flex items-center">
                        <h1 className="font-medium text-xs text-primary-new-1">Explore All</h1>
                        <ChevronRight className="h-4 text-primary-new-1"/>
                    </div>
                </div>
                <div className="relative h-[172px] space-y-2 flex flex-col">
                    <div
                        className="w-full grid grid-cols-5 items-center justify-between rounded-xl p-4 bg-background-new-3">
                        <div
                            className="w-11 h-11 col-span-1 flex justify-center items-center rounded-full bg-background-new-4">
                            <Scale className="text-text-new-1"/>
                        </div>
                        <div className="flex col-span-3 flex-col justify-between h-full py-1 text-[10px]">
                            <div className="text-xs text-white">Sept. 27</div>
                            <div>11:00 AM</div>
                        </div>
                        <div className="col-span-1 justify-self-end">
                            <ChevronRight className="h-8 text-text-new-1"/>
                        </div>
                    </div>
                    <div
                        className="w-full grid grid-cols-5 items-center justify-between rounded-xl p-4 bg-background-new-3">
                        <div
                            className="w-11 h-11 col-span-1 flex justify-center items-center rounded-full bg-background-new-4">
                            <Scale className="text-text-new-1"/>
                        </div>
                        <div className="flex col-span-3 flex-col justify-between h-full py-1 text-[10px]">
                            <div className="text-xs text-white">Sept. 27</div>
                            <div>11:00 AM</div>
                        </div>
                        <div className="col-span-1 justify-self-end">
                            <ChevronRight className="h-8 text-text-new-1"/>
                        </div>
                    </div>
                </div>
                <div
                    className="h-64 sm:h-52 w-full px-5 pt-3 sm:pt-5 pb-2 bg-background-new-3/80 rounded-xl flex flex-col items-center">
                    <div className="-mt-8 w-12 h-12 flex items-center justify-center bg-primary-new-1 rounded-2xl">
                        <BrainCircuit className="text-blue-950"/>
                    </div>
                    <div className="pt-2 h-full w-full flex flex-col gap-2 justify-between items-center">
                        <h1 className="text-white text-md sm:text-xl">Welcome to Jayoma</h1>
                        <p className="text-text-new-1 text-center text-xs">Say hello to a world where every conversation
                            feels natural, engaging, and smarter. Always ready to elevate your chats to a whole new
                            level!</p>
                        <div
                            className="transition duration-200 hover:translate-y-0.5 cursor-pointer flex flex-col items-center">
                            <h1 className="font-medium text-xs text-primary-new-1">Explore All</h1>
                            <ChevronDown className="h-4 text-primary-new-1"/>
                        </div>
                    </div>
                </div>
                <nav
                    className="self-center flex  justify-between items-center px-5 gap-4 rounded-4xl h-10 sm:h-12 bg-background-new-3">
                    <div>
                        <House className="h-5 w-5 sm:h-8 sm:w-8 text-white transition duration-200 hover:scale-110"/>
                    </div>
                    <div
                        className="transition duration-200 w-14 h-14 sm:h-16 sm:w-16 rounded-full bg-primary-new-1 flex items-center justify-center">
                        <Plus className="h-5 w-5 sm:h-8 sm:w-8 text-white  hover:scale-110"/>
                    </div>
                    <div>
                        <History className="h-5 w-5 sm:h-8 sm:w-8 transition duration-200 hover:scale-110"/>
                    </div>
                </nav>
            </div>
        </div>
    );
};

