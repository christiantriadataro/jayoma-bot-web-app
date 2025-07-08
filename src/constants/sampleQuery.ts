type Ordinance = {
    category: string,
    confidence: string,
    date_enacted: string,
    fines: string
    links: string,
    ordinance_id: string,
    score: string,
    short_text: string,
    status: string
}

type Message = {
    from: 'user' | 'bot';
    message: string;
    timestamp: string;
    results?: Ordinance[]; // Add proper type for results if needed
}

type ChatState = {
    chatId: string | null;
    id: string;
    messages: Message[];
    status: 'active' | 'closed';
}

export const sampleQuery: ChatState = {
    "chatId": "32dd24ee-8fc1-41a7-a62b-c097c3658e8a",
    "id": "686c553c283cfe1d6bb5711f",
    "messages": [
        {
            "from": "user",
            "message": "no smoking ordinance",
            "timestamp": "2025-07-07T23:14:51.299824"
        },
        {
            "from": "bot",
            "message": "Ordinance #8521 in Manila City, also known as the \"Smoke-Free Environment Ordinance,\" bans smoking and the use of tobacco products inside and around buildings owned, controlled, or used by the city government. This includes places such as public schools, hospitals, and the Manila City Hall. Fines for violations range from PhP 2,000 to PhP 3,000 for subsequent offenses, with imprisonment also possible as a penalty.\n\nWould you like to see the fines for any of these ordinances or know when these were enacted or get more details about a specific ordinance or go back to Ordinance 8677 about Health and Sanitation?",
            "results": [
                {
                    "category": "Health and Sanitation",
                    "confidence": "High",
                    "date_enacted": "March 30, 2017",
                    "fines": "1st Offense: Up to PhP2,000 fine and/or 1 day imprisonment 2nd Offense: Up to PhP3,000 fine and/or 2 days imprisonment 3rd and succeeding offenses: Up to PhP5,000 fine and/or 3 days imprisonment",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8521-2/",
                    "ordinance_id": "8521",
                    "score": "100.0%",
                    "short_text": "This ordinance bans the use of cigarettes, vapes, and other tobacco products inside and around all buildings owned, controlled, or used by the Manila City Government, including places like Manila City Hall, public schools, and hospitals. Smoking is not allowed indoors, within the building compounds, or within 100 meters of these buildings. A single outdoor smoking area may be designated per building, provided it follows strict conditions like being far from entrances and not accessible to minors. Violators will face fines and possible jail time depending on how many times they've offended.",
                    "status": "Valid"
                },
                {
                    "category": "Health and Sanitation",
                    "confidence": "High",
                    "date_enacted": "October 12, 2020",
                    "fines": "Fines/Penalties: First Offense: A fine between PhP 1,000.00 and PhP 1,500.00, or one (1) day of community service. Second Offense: A fine between PhP 2,500.00 and PhP 3,000.00, or up to three (3) days of community service. Third Offense: A fine between PhP 4,000.00 and PhP 6,000.00, or up to five (5) days of community service. The business permit and license of the offender may also be cancelled or revoked. Community Service: One (1) day of community service is equivalent to eight (8) hours. Community Service Details: Offenders who choose to do community service will report to the City Health Officer and attend a seminar on healthy living. They will also participate in clean-up drives or other community development programs. Minor Offender: Minors who break this ordinance will be handled according to Republic Act No. 9344 or the Juvenile Justice and Welfare Act of 2006.",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8677-2/",
                    "ordinance_id": "8677",
                    "score": "92.3%",
                    "short_text": "This ordinance regulates the use, sale, advertisement, and promotion of vaporized and heated tobacco products (VHTPs), commonly known as e-cigarettes, in Manila. It bans the use of these products such as smoking in indoor public places such as hospitals, churches, schools, and public transportation. Establishments not covered by the ban must create designated vaping areas (DVAs) with proper signage, ventilation, and health warnings, and these areas must prohibit minors. Vaping outdoors is allowed. It also restricts VHTP advertisements, especially near schools or areas frequented by minors, and requires compliance with national tax and health labeling laws to prevent substandard or illicit products from circulating. Temporary testing of VHTPs is permitted near the point-of-sale for demonstration purposes.",
                    "status": "Valid"
                },
                {
                    "category": "Health and Sanitation",
                    "confidence": "High",
                    "date_enacted": "December 02, 2021",
                    "fines": "Violation by an Individual Person. - Any person who violates any provision of this Code shall be punished as follows: a) For the First Offense - a fine of not more than Three Thousand Pesos (PhP 3,000.00); b) For the Second Offense - a fine of not more than Five Thousand Pesos (PhP 5,000.00) and the revocation of the Health Certificate. SEC. 86. Violation by an Establishment. - Any establishment that violates any provision of this Code shall be punished as follows: a) For the First Offense - a fine of not more than Three Thousand Pesos (PhP 3,000.00) and confiscation of items involved in the offense; b) For the Second Offense - a fine of Four Thousand Pesos (PhP 4,000.00) with recommendation by the MHD to the BPLO for a Cease-and-Desist Order on the establishment's operations to take effect forthwith; c) For the Third Offense - a fine of Five Thousand Pesos (PhP 5,000.00) with recommendation by the MHD to the BPLO for a Closure Order on the establishment to immediately effect a permanent closure thereof.",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8793-2/",
                    "ordinance_id": "8793",
                    "score": "81.1%",
                    "short_text": "This ordinance establishes comprehensive rules for sanitation, disinfection, and hygiene in all public-serving establishments in Manila. All businesses must secure a Sanitary Permit from the Business Permits and Licensing Office (BPLO) before starting operations, and renew it annually as a condition for getting or renewing a business permit. All employees, especially food and non-food handlers, must obtain a Health Certificate through an online application and undergo medical tests. These certificates are valid for one year and must be worn during work. Food handlers are required to follow strict hygiene practices, including wearing clean uniforms, using mouth shields or head coverings, and frequent handwashing. Water used in businesses-especially food establishments-must pass regular physical, chemical, and microbiological tests, with certificates of potability displayed in visible areas. Ice and bottled water also fall under strict monitoring and registration. The ordinance further bans smoking and e-cigarette use inside air-conditioned or enclosed food businesses, except in sealed, ventilated smoking areas. Penalties: Businesses and individuals who violate any provision (such as operating without sanitary permits, not securing health certificates, or failing to meet hygiene standards) are subject to fines, suspension of permits, or closure, as determined by the Manila Health Department and BPLO.",
                    "status": "Valid"
                },
                {
                    "category": "Public Safety and Order",
                    "confidence": "High",
                    "date_enacted": "April 29, 2019",
                    "fines": "Voluntary payment under No Contest Provision (amount based on offense) Community service for those who cannot pay: PhP 500 or less: 8 hours PhP 501-1,000: 16 hours PhP 1,001-2,000: 24 hours No fines for minors; parents/guardians may be charged under City Ordinance No. 8243 Repeat offenders will be fined based on the number of violations",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8563-2/",
                    "ordinance_id": "8563",
                    "score": "78.8%",
                    "short_text": "This ordinance creates a new system to avoid overcrowding in Manila's police detention centers, especially for common minor offenses like public drinking of alcohol or liquor, noise violations, smoking in public, or being shirtless in public. Instead of automatically jailing offenders, violators will now receive an Ordinance Violation Receipt (OVR) and can choose to pay a fine within five (5) working days under a \"No Contest Provision\"-which allows them to settle the issue without going to court. If they don't pay or contest it, a case will be filed. Offenders may also opt to do community service instead of paying. Children below 18 are exempt from punishment but their guardians may be held accountable. The ordinance also sets up a centralized database to track violators and encourages fair enforcement by rewarding Barangays and officers with a share of collected fines.",
                    "status": "Valid"
                },
                {
                    "category": "Public Safety and Order",
                    "confidence": "Medium",
                    "date_enacted": "May 16, 2024",
                    "fines": "Fine payable within 5 days under the \"No Contest Provision\" If unpaid, formal charges are filed Community service alternative: PhP 500 or less: 8 hours PhP 500-1,000: 16 hours PhP 1,000-2,000: 24 hours",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-9055-2/",
                    "ordinance_id": "9055",
                    "score": "57.8%",
                    "short_text": "This ordinance introduces a structured process to reduce overcrowding in Manila's police detention facilities caused by frequent violations of common city ordinances like drinking alcohol in public, being half-naked in public, curfew violations, smoking, and urinating in public. To ease congestion, it allows violators to pay a fine within 5 days through a \"No Contest Provision\" without going to court. If they cannot pay, they may do community service instead. Minors are exempt from punishment but their guardians may be held accountable. A centralized database will be used to track violations. Some of the fine collections will be shared as incentives with the police and barangay officers",
                    "status": "Valid"
                },
                {
                    "category": "Transportation and Infrastructure",
                    "confidence": "Low",
                    "date_enacted": "July 07, 2022",
                    "fines": "",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8886-2/",
                    "ordinance_id": "8886",
                    "score": "46.6%",
                    "short_text": "The City of Manila approved RODRIGUEZ MALAYA NEPA TODA (ROMANE TODA) INC. to have official tricycle loading and unloading stations along key streets like Honorio Lopez Boulevard and Rodriguez Street. Their operation is limited to 100 tricycles (Route Measure Capacity) on a specific looped route around the said streets. This ordinance updates older rules and was automatically approved after no response from the Mayor within the given time. The ordinance ensures better regulation of tricycle operations within the area.",
                    "status": "Amended"
                },
                {
                    "category": "Housing and Urban Development",
                    "confidence": "Low",
                    "date_enacted": "June 14, 2016",
                    "fines": "Violations (e.g., unauthorized sale, transfer, or modifications) result in eviction or demolition of illegal structures.",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8494-2/",
                    "ordinance_id": "8494",
                    "score": "45.0%",
                    "short_text": "This ordinance establishes the Baseco Housing Project, providing free housing through usufruct to selected beneficiaries. Funded by a PhP 36 million DILG seed grant and city counterpart for infrastructure, the housing units remain city property. Beneficiaries must follow strict rules, including no selling, transferring, or modifying units horizontally. Violators face eviction and demolition of illegal structures. The ordinance mandates formation of a homeowners association and outlines the roles of the Urban Settlements Office, barangay officials, and other local bodies in ensuring orderly implementation.",
                    "status": "Valid"
                },
                {
                    "category": "Zoning and Land Use",
                    "confidence": "Low",
                    "date_enacted": "July 25, 2019",
                    "fines": "No fines; offers tax reduction and automatic tax credit for advance payers.",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8567-2/",
                    "ordinance_id": "8567",
                    "score": "44.4%",
                    "short_text": "This ordinance gives a 20% reduction on the increase in real property taxes for all types of properties in Manila (residential, commercial, industrial, and special classes). This discount applies to the additional tax amount calculated based on new property values under the 2014 assessment (Ordinance No. 8330). It amends a previous law (Ordinance No. 8516) and limits tax increases so that the new amount will not be more than 48% higher than the 2013 rate, and in no case should total taxes double the 2013 level. Those who paid in advance before January 1, 2020, will receive a tax credit for the excess amount they paid.",
                    "status": "Amended (Ordinance No. 8516)"
                },
                {
                    "category": "Zoning and Land Use",
                    "confidence": "Low",
                    "date_enacted": "March 24, 2015",
                    "fines": "",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8393-2/",
                    "ordinance_id": "8393",
                    "score": "43.1%",
                    "short_text": "This ordinance officially removes a small piece of public land-about 35.4 square meters in size-located along Roxas Boulevard in Malate, Manila, from being used by the public. The land is next to properties owned by Admiral Realty Company, Inc., and is no longer considered for public use.",
                    "status": "Valid"
                },
                {
                    "category": "Education and Libraries",
                    "confidence": "Low",
                    "date_enacted": "February 07, 2022",
                    "fines": "",
                    "links": "https://citycouncilofmanila.com.ph/city_ordinances/ordinance-no-8809-2/",
                    "ordinance_id": "8809",
                    "score": "42.9%",
                    "short_text": "This ordinance updates the minimum qualifications for Local Assessment Operations Officers (LAOOs) in Manila's Department of Assessment. To qualify, applicants must be licensed professionals in real estate, accountancy, architecture, engineering, or law. The goal is to enhance the accuracy, fairness, and efficiency of real property tax assessments by ensuring only highly qualified individuals fill these roles. No additional funding is needed for implementation.",
                    "status": "Valid"
                }
            ],
            "timestamp": "2025-07-07T23:14:51.299824"
        }
    ],
    "status": "active"
}