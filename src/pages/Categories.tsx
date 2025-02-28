import {useState} from "react";
import Back from "../components/shared/Back.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

const categories = [
    {
        name: "Public Safety And Order",
        items: [
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
        ],
    },
    {
        name: "Public Welfare And Social",
        items: [
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
        ],
    },
    {
        name: "Public Welfare And Social",
        items: [
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
        ],
    },
    {
        name: "Public Welfare And Social",
        items: [
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
        ],
    },

    {
        name: "Health And Sanitation",
        items: [
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
            {title: "Dummy", description: "Dummy Description"},
        ],
    },
];

const filterOptions = ["Safety", "Business", "Health", "Environmental", " Public Welfare", "Services", "Zoning"];

const Categories = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="relative flex flex-col w-full h-full bg-white">

            <div className="absolute top-0 left-0 w-full bg-white z-10 shadow-md">
                <Back cn="absolute top-6 left-6"/>
                <h1 className="mt-10 text-center font-urbanist font-bold text-[28px]">
                    Categories
                </h1>


                <div className="flex gap-3 px-6 mt- 1 overflow-x-auto">
                    {filterOptions.map((option, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                activeFilter === option ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setActiveFilter(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>


            <div className="flex-grow overflow-y-auto mt-32 px-6 pb-20">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col mt-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">{category.name}</h2>
                            <span className="cursor-pointer text-gray-500">➡</span>
                        </div>


                        <div className="grid grid-cols-3 gap-3 mt-2">
                            {category.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 bg-gray-100 rounded-lg shadow-md text-center flex flex-col items-center"
                                >

                                    <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{item.description}</p>

                                </div>
                            ))}
                        </div>
                    </div>

                ))}
            </div>
        

            <Navbar/>

        </div>
    );
};

export default Categories;
