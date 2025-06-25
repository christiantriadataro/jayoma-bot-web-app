import {ChevronLeft, Ellipsis} from "lucide-react";

export default function Chatbotv2() {
    return (
        <div className="page-transition overflow-hidden relative flex flex-col h-full pt-10 sm:pt-16">
            <div className=" bg-background-new-4 rounded-t-2xl h-full ">
                <div className="h-20 px-6 border rounded-t-2xl border-background-new-3 flex items-center justify-between">
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <ChevronLeft className="text-text-new-1" />
                    </div>
                    <div className="text-text-new-1 text-sm">Ask me anything</div>
                    <div className="h-9 w-9 border border-text-new-1 rounded-lg flex items-center justify-center">
                        <Ellipsis className="text-text-new-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};


