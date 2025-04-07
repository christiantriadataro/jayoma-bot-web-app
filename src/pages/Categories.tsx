import {useState} from "react";
import Back from "../components/shared/Back.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import ArrowLeftIcon from "../assets/svg/arrow-left.svg"

const categories = [
    {
        name: "Public Safety And Order",
        items: [
            {title: "Curfew Ordinance", description: "An ordinance imposing a curfew for minors from 10 PM to 5 AM."},
            {
                title: "Anti-Noise Pollution Ordinance",
                description: "An ordinance regulating noise levels in residential areas."
            },
            {title: "Fire Safety Ordinance", description: "An ordinance requiring fire safety measures in buildings."},
            {title: "Curfew Ordinance", description: "An ordinance imposing a curfew for minors from 10 PM to 5 AM."},
            {
                title: "Anti-Noise Pollution Ordinance",
                description: "An ordinance regulating noise levels in residential areas."
            },
            {title: "Fire Safety Ordinance", description: "An ordinance requiring fire safety measures in buildings."},
        ],
    },
    {
        name: "Public Welfare And Social",
        items: [
            {
                title: "Senior Citizens' Benefits Ordinance",
                description: "An ordinance providing benefits and privileges to senior citizens."
            },
            {
                title: "Anti-Discrimination Ordinance",
                description: "An ordinance prohibiting discrimination based on gender, race, or religion."
            },
            {
                title: "Child Protection Ordinance",
                description: "An ordinance protecting children from abuse and exploitation."
            },
            {
                title: "Senior Citizens' Benefits Ordinance",
                description: "An ordinance providing benefits and privileges to senior citizens."
            },
            {
                title: "Anti-Discrimination Ordinance",
                description: "An ordinance prohibiting discrimination based on gender, race, or religion."
            },
            {
                title: "Child Protection Ordinance",
                description: "An ordinance protecting children from abuse and exploitation."
            },
        ],
    },
    {
        name: "Health And Sanitation",
        items: [
            {title: "Anti-Smoking Ordinance", description: "An ordinance banning smoking in public places."},
            {
                title: "Waste Segregation Ordinance",
                description: "An ordinance requiring the segregation of waste at source."
            },
            {title: "Clean Air Ordinance", description: "An ordinance aimed at reducing air pollution."},
            {title: "Anti-Smoking Ordinance", description: "An ordinance banning smoking in public places."},
            {
                title: "Waste Segregation Ordinance",
                description: "An ordinance requiring the segregation of waste at source."
            },
            {title: "Clean Air Ordinance", description: "An ordinance aimed at reducing air pollution."},
        ],
    },
    {
        name: "Traffic Management",
        items: [
            {title: "No Parking Ordinance", description: "An ordinance designating no-parking zones in the city."},
            {title: "Speed Limit Ordinance", description: "An ordinance setting speed limits on city roads."},
            {title: "Pedestrian Safety Ordinance", description: "An ordinance ensuring the safety of pedestrians."},
            {title: "No Parking Ordinance", description: "An ordinance designating no-parking zones in the city."},
            {title: "Speed Limit Ordinance", description: "An ordinance setting speed limits on city roads."},
            {title: "Pedestrian Safety Ordinance", description: "An ordinance ensuring the safety of pedestrians."},
        ],
    },
    {
        name: "Environmental Protection",
        items: [
            {title: "Tree Planting Ordinance", description: "An ordinance mandating tree planting in urban areas."},
            {title: "Plastic Ban Ordinance", description: "An ordinance banning the use of single-use plastics."},
            {
                title: "Water Conservation Ordinance",
                description: "An ordinance promoting water conservation practices."
            },
            {title: "Tree Planting Ordinance", description: "An ordinance mandating tree planting in urban areas."},
            {title: "Plastic Ban Ordinance", description: "An ordinance banning the use of single-use plastics."},
            {
                title: "Water Conservation Ordinance",
                description: "An ordinance promoting water conservation practices."
            },
        ],
    },
    {
        name: "Economic Development",
        items: [
            {
                title: "Business Permit Ordinance",
                description: "An ordinance regulating the issuance of business permits."
            },
            {title: "Market Regulation Ordinance", description: "An ordinance regulating public markets and vendors."},
            {title: "Investment Incentives Ordinance", description: "An ordinance providing incentives for investors."},
            {
                title: "Business Permit Ordinance",
                description: "An ordinance regulating the issuance of business permits."
            },
            {title: "Market Regulation Ordinance", description: "An ordinance regulating public markets and vendors."},
            {title: "Investment Incentives Ordinance", description: "An ordinance providing incentives for investors."},
        ],
    },
    {
        name: "Education",
        items: [
            {title: "Scholarship Ordinance", description: "An ordinance providing scholarships to deserving students."},
            {title: "School Safety Ordinance", description: "An ordinance ensuring the safety of students in schools."},
            {
                title: "Literacy Program Ordinance",
                description: "An ordinance promoting literacy programs in the community."
            },
            {title: "Scholarship Ordinance", description: "An ordinance providing scholarships to deserving students."},
            {title: "School Safety Ordinance", description: "An ordinance ensuring the safety of students in schools."},
            {
                title: "Literacy Program Ordinance",
                description: "An ordinance promoting literacy programs in the community."
            },
        ],
    },
    {
        name: "Housing",
        items: [
            {
                title: "Affordable Housing Ordinance",
                description: "An ordinance promoting the development of affordable housing."
            },
            {
                title: "Slum Clearance Ordinance",
                description: "An ordinance aimed at clearing slum areas and providing relocation."
            },
            {title: "Building Code Ordinance", description: "An ordinance enforcing building codes and standards."},
            {
                title: "Affordable Housing Ordinance",
                description: "An ordinance promoting the development of affordable housing."
            },
            {
                title: "Slum Clearance Ordinance",
                description: "An ordinance aimed at clearing slum areas and providing relocation."
            },
            {title: "Building Code Ordinance", description: "An ordinance enforcing building codes and standards."},
        ],
    },
];

const filterOptions = ["All", "Safety", "Business", "Health", "Environmental", " Public Welfare", "Services", "Zoning"];

const Categories = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="relative flex flex-col w-full h-full">
            <Back cn="absolute top-15 left-10"/>
            <h1 className="mt-[62px] text-center text-['Poppins'] font-medium text-[22px]">
                Categories
            </h1>


            <div className="flex pb-10 gap-3 pl-6 w-full mt-[46px] overflow-x-auto overflow-y-hidden no-scrollbar">
                {filterOptions.map((option, index) => (
                    <button
                        key={index}
                        className={`px-7 h-[48px] pb-1 rounded-3xl text-sm font-medium ${
                            activeFilter === option ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setActiveFilter(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="pl-[35px] overflow-y-auto no-scrollbar pb-28">
                {categories.map((category, index) => (
                    <div className="mt-[37px]" key={index}>
                        <div className="flex flex-row w-5/6 justify-between">
                            <div className="text-[22px]">{category.name}</div>
                            <img src={ArrowLeftIcon} alt=""/>
                        </div>
                        <div className="mt-[15px] flex gap-[20px] overflow-x-auto pr-20 no-scrollbar">
                            {
                                category.items.map((ordinance, i) => (
                                    <div key={i}
                                        className="w-[129px] h-[163px] justify-between pt-[16px] px-3 bg-[#F7F7F8] rounded-xl flex flex-col items-center">
                                        <div className="flex flex-col items-center">
                                            <div className=" bg-black h-[28px] w-[28px] rounded-lg"></div>
                                            <div
                                                className="mt-1.5 text-center text-['Poppins'] font-normal text-[13px]">{ordinance.title}</div>
                                            {/*<div className="text-[#A0A0A5] text-[10px]">{ordinance.description}</div>*/}
                                        </div>
                                        <div className="h-[34px] w-[34px] rounded-full bg-[#A0A0A5]"></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            <Navbar/>

        </div>
    );
};

export default Categories;
