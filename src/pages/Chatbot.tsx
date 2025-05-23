import '../styles/Chat.css';
import {FormEvent, useState} from "react";
import Back from "../components/shared/Back.tsx";
import SendIcon from "../assets/svg/Send.svg"

const botMessageObj: Record<string, BotMessageProps> = {
    8520: {
        ordinanceId: 8520,
        category: "Public Safety And Order",
        score: "62.2%",
        fines: "Selling to minors:\n" +
            " • 1st Offense: PHP 200\n" +
            " • 2nd Offense: PHP 500\n" +
            " • 3rd Offense: PhP1,000 or 6 months imprisonment (or both) + business permit revocation\n" +
            "\n" +
            "Sending a minor to buy alcohol:\n" +
            " • 1st Offense: PHP 200\n" +
            " • 2nd Offense: PHP 500\n" +
            " • 3rd Offense: PHP 1,000 or 6 months imprisonment (or both)",
        dateEnacted: "Feb 09, 2017",
        shortText: "This ordinance makes it illegal in Manila for anyone to sell, request, or send a minor (anyone under 18) to buy wine, liquor, or any kind of alcoholic drink from any store, mall, bar, restaurant, or business. Even sending a minor to buy alcohol for someone else is not allowed. If caught, the alcohol will be publicly destroyed. Penalties increase for repeat offenders and may include business permit revocation or jail time. Minors caught with alcohol will be released to their guardians after a commitment that it won't happen again."
    },
    8501: {
        ordinanceId: 8501,
        category: "Health and Sanitation",
        score: "61.0%",
        fines: "Individuals:\n" +
            " • 1st offense: ₱1,000 + confiscation of goods\n" +
            " • 2nd offense: ₱3,000 + confiscation\n" +
            " • 3rd offense: ₱5,000 + up to 30 days imprisonment + confiscation\n" +
            "\n" +
            "Establishments/Cooperatives:\n" +
            " • 1st offense: ₱3,000 + confiscation\n" +
            " • 2nd offense: ₱4,000 + confiscation\n" +
            " • 3rd offense: ₱5,000 + confiscation + revocation of business permit",
        dateEnacted: "Oct 18, 2016",
        shortText: "This ordinance bans the sale of carbonated drinks, sugar-based synthetic drinks (like sweetened juices, iced teas, and energy drinks), and junk food (those low in nutritional value or lacking FDA approval or the Sangkap Pinoy seal) inside all public and private elementary and high schools in Manila. The goal is to protect children's health and reduce malnutrition. The rule applies to all food-selling establishments in schools, including canteens, cooperatives, and vending machines."
    },
    9081: {
        ordinanceId: 9081,
        category: "Public Welfare and Social Services",
        score: "82.9%",
        fines: "N/A",
        dateEnacted: "Oct 17, 2024",
        shortText: "Starting January 1, 2025, all legitimate senior citizens in Manila will receive a monthly allowance of PhP1,000, doubled from the previous PhP500. This increase aims to help seniors afford better healthcare, medicines, and basic necessities. The funds for this allowance will come from the city's 2025 budget and will continue to be included in future annual budgets."
    },
    8565: {
        ordinanceId: 8565,
        category: "Public Welfare and Social Services",
        score: "62.2%",
        fines: "Relatives who fail to report the death of a beneficiary and return the ATM card may face charges.",
        dateEnacted: "Jul 22, 2019",
        shortText: "Senior citizens, persons with disabilities (PWDs), and solo parents who live and vote in Manila will receive PhP 500 monthly cash aid from the city government. This is part of the city’s social assistance program to help support their daily needs. However, even if a person qualifies under more than one category (like being both a senior and a solo parent), they can only receive one allowance. To qualify, they must be listed in the official records of either the Office of Senior Citizens Affairs (OSCA) or the Manila Social Welfare and Development Office (MSWDO). If a beneficiary dies, their family must return the ATM card and report the death immediately, or they could face legal consequences."
    },
    8711: {
        ordinanceId: 8711,
        category: "Public Welfare and Social Services",
        score: "100%",
        fines: "N/A",
        dateEnacted: "Dec 20, 2020",
        shortText: "This ordinance authorizes the City Government of Manila to give a special bonus called the Productivity Enhancement Incentive (PEI) to its employees for the year 2020. This incentive is meant to reward employees for their hard work and improve government productivity. The total amount for the PEI is PhP 46,240,000, which will be sourced from savings within the city's budget. All regular, casual, and contractual employees of the city government are eligible for this bonus."
    },
    8680: {
        ordinanceId: 8680,
        category: "Health and Sanitation",
        score: "100%",
        fines: "Php1,000 (1st offense), Php3,000 (2nd offense), and Php5,000 or 1-month imprisonment (3rd/subsequent offenses)",
        dateEnacted: "Sep 28, 2020",
        shortText: "This ordinance prohibits the improper disposal of pandemic-related wastes, such as used face masks, gloves, PPE, test kits, and containers of sanitizers, especially in public places like streets, parks, waterways, and beaches. It mandates the use of yellow bins for these wastes, to be provided by either the city or barangays, and requires individuals to seal such waste in separate bags. Violators will be fined Php1,000 (1st offense), Php3,000 (2nd offense), and Php5,000 or 1-month imprisonment (3rd/subsequent offenses); corporations may also face business permit revocation."
    },
    8713: {
        ordinanceId: 8713,
        category: "Public Welfare and Social Services",
        score: "100%",
        fines: "Php1,000 (1st offense), Php3,000 (2nd offense), and Php5,000 or 1-month imprisonment (3rd/subsequent offenses)",
        dateEnacted: "Dec 14, 2020",
        shortText: "This ordinance grants a COVID-19 Special Risk Allowance (SRA) to frontline public health workers in Manila who physically reported for work during the Enhanced Community Quarantine (ECQ) from March 17 to May 15, 2020. The allowance is based on how many days they worked during the ECQ and can be up to 100% of 25% of their monthly basic pay. The SRA covers regular, casual, contractual, and job order health workers (including Barangay Health Workers) assigned to hospitals and healthcare facilities. However, consultants, student workers, and non-healthcare-based job order workers are excluded. The city allocated a total of PhP 30,755,099.00 from savings in Personnel Services and Maintenance and Other Operating Expenses to fund the allowance."
    },
    8658: {
        ordinanceId: 8658,
        category: "Public Safety and Order",
        score: "100%",
        fines: "Penalties to be determined by the Punong Barangay; release and monitoring procedures apply",
        dateEnacted: "Aug 5, 2020",
        shortText: "This ordinance amends Ordinance Nos. 8647 and 8616 by updating the curfew hours in the City of Manila based on the prevailing quarantine classification. Under Enhanced and Modified Enhanced Community Quarantine (ECQ/MECQ), curfew is from 8:00 PM to 5:00 AM; under General Community Quarantine (GCQ), it is from 10:00 PM to 5:00 AM. Certain exceptions are allowed, such as for emergencies, essential purchases, and work-related travel. Barangay officials and tanods are empowered to enforce the curfew, with specific guidelines for apprehension, release, and handling of offenders. Special provisions are included for vulnerable individuals, such as the homeless or those without family."
    },
    8622: {
        ordinanceId: 8622,
        category: "Health and Sanitation",
        score: "73.3",
        fines: "N/A",
        dateEnacted: "Mar 26, 2020",
        shortText: "This ordinance extends the deadline for paying Real Property Taxes, Transfer Taxes (for real estate ownership transfers), and Business Taxes in the City of Manila until June 30, 2020. The extension is given without any added interest, penalties, or surcharges.\n" +
            "\n" +
            "This action was taken to help residents and business owners affected by the COVID-19 lockdown, especially during the Enhanced Community Quarantine when most people were not allowed to leave their homes or conduct regular business."
    },
    8644: {
        ordinanceId: 8644,
        category: "Health and Sanitation and Commerce",
        score: "73.3%",
        fines: "Active",
        dateEnacted: "Jun 25, 2020",
        shortText: "This ordinance, known as the \"No Mask, No Entry Ordinance,\" mandates the wearing of face masks or any appropriate face covering (including DIY or reusable masks) that sufficiently covers the nose and mouth for all individuals entering and transacting in any public or private establishment in the City of Manila. These include businesses, schools, government offices, and other institutions serving the public. Establishments are required to post visible \"No Mask, No Entry\" signs and enforce compliance within their premises. Violators will face escalating fines starting at Php1,000 for individuals and Php1,000 to Php5,000 plus suspension or cancellation of permits for establishments. Exceptions are allowed for certain activities and where strict physical distancing (2 meters) is observed. This measure was enacted to help prevent the spread of COVID-19 during the community quarantine period."
    },
    8643: {
        ordinanceId: 8643,
        category: "Public Welfare and Social Services",
        score: "70.8%",
        fines: "Active",
        dateEnacted: "May 21, 2020",
        shortText: "This ordinance amends Ordinance No. 8633 by approving Supplemental Budget No. 09, Series of 2020, which allocates an additional Php50,000,000.00 to the City Amelioration Crisis Assistance Fund (CACAF) FY 2020 – 2nd Tranche. The purpose of this augmentation is to provide financial assistance of Php1,000.00 per beneficiary to Manila residents who were not covered under the previous allocation. The funds are intended to help families cope with the economic challenges brought about by the COVID-19 crisis, particularly during the Enhanced Community Quarantine (ECQ). The funding will come from the Urban Settlements Office’s budget (specifically, Capital Outlay - Other Infrastructure Assets under the Vertical Housing Program) and will be distributed through the barangays, which will also handle liquidation and reporting in compliance with existing laws and regulations."
    }
}



interface IMessageProps {
    text: string;
    sender: "user" | "bot";
}

interface BotMessageProps {
    ordinanceId: number;
    category: string;
    score: string;
    fines: string;
    dateEnacted: string;
    shortText: string;
}

const ChatBot = () => {
    const [messages, setMessages] = useState<IMessageProps[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [hasStartedChat, setHasStartedChat] = useState(false);

    const addMessage = (text: string, sender: "user" | "bot") => {
        setMessages((prevMessages) => [...prevMessages, {text, sender}]);
    };

    function sendChatMessage(userMessage: string) {
     let botMessages: BotMessageProps[]
    switch (userMessage) {
            case "liquor ban":
                botMessages = [botMessageObj["8520"], botMessageObj["8501"]];
                break;
            case "senior citizen allowance":
                botMessages = [botMessageObj["9081"], botMessageObj["8565"]];
                break;
            case "incentive to workers":
                botMessages = [botMessageObj["8711"]];
                break;
            case "pandemic kits":
                botMessages = [botMessageObj["8680"]]
                break;
            case "community quarantine":
                botMessages = [botMessageObj["8713"], botMessageObj["8658"], botMessageObj["8622"], botMessageObj["8644"], botMessageObj["8643"]]
                break;
            case "What are the specific ordinances in place to ensure public safety in our barangay, such as curfews or regulations on public gatherings?":
                botMessages = [
                    botMessageObj[8658],
                    botMessageObj[8520],
                ]
                break;
                 case "Can you provide details on the ordinances related to the establishment and operation of businesses in our barangay?":
                botMessages = [
                    botMessageObj[8658],
                    botMessageObj[8520],
                ]
                break;
            case "What are the barangay’s health and sanitation ordinances, particularly those aimed at controlling the spread of diseases?":
                botMessages = [
                    botMessageObj[8680],
                    botMessageObj[8622],
                    botMessageObj[8644],
                    botMessageObj[8501],
                ]
                break;
            default:
                botMessages = []
        }

        setTimeout(() => {
            if (botMessages.length === 0) {
                addMessage("Please rephrase the question.", "bot");
            } else {
                botMessages.forEach((message, index) => {
                    addMessage(`#${index + 1}`, "bot");
                    addMessage(`Category:\n${message.category}`, "bot");
                    addMessage(`Score:\n${message.score}`, "bot");
                    addMessage(`Category ID:\n${message.ordinanceId}`, "bot");
                    addMessage(`Summary:\n${message.shortText}`, "bot");
                    addMessage(`Fines:\n${message.fines}`, "bot");
                    addMessage(`Date Enacted:\n${message.dateEnacted}`, "bot");
                })
            }
        }, 1000);
}

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addMessage(inputValue, "user");
        setHasStartedChat(true);
        setInputValue("");

        sendChatMessage(inputValue);
    };

    const handlePredefinedQuestionClick = (question: string) => {
        addMessage(question, "user");
        setHasStartedChat(true);

        sendChatMessage(question);
    };

    const predefinedQuestions = [
        "What are the specific ordinances in place to ensure public safety in our barangay, such as curfews or regulations on public gatherings?",
        "What are the barangay’s health and sanitation ordinances, particularly those aimed at controlling the spread of diseases?",
    ];

    return (
        <div className="relative flex flex-col w-full h-full bg-[#f8f8f8] rounded-xl">
            <Back cn="absolute top-15 left-10"/>

            <h1 className="mt-[62px] text-center text-['Poppins'] font-medium text-[22px] text-[#757474]">
                Chat Assist
            </h1>

            {!hasStartedChat && (
                <div className="mt-6 flex flex-col gap-3 px-6">
                    {predefinedQuestions.map((question, index) => (
                        <div
                            key={index}
                            className="p-3 py-6 bg-[#F7F7F8] text-[14px] rounded-lg shadow-md text-[#A0A0A5] text-center cursor-pointer"
                            onClick={() => handlePredefinedQuestionClick(question)}
                        >
                            {question}
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-col flex-grow px-6 mt-6 overflow-y-auto max h-[60vh]">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-3 max-w-[75%] rounded-lg whitespace-pre-wrap shadow-md mb-5 ${
                            msg.sender === "user"
                                ? "bg-gray-900 text-white self-end"
                                : "bg-gray-200 text-gray-700 self-start"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg"></div>
            <form
                onSubmit={handleSendMessage}
                className="relative p-4 shadow-lg flex items-center w-full"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Send a message..."
                    className="relative text-sm flex-grow p-3 text-[#A0A0A5] outline-none rounded-lg bg-[#F7F7F8] hover:bg-white border border-[#E1E1E1]"
                />
                <img src={SendIcon} className="absolute right-4 ml-3 p-3  text-white rounded-lg" alt=""/>

            </form>
        </div>
    );
};


export default ChatBot;