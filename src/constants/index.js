import { meta, precast, shandonguni, shopify, starbucks, tesla, tgood, ua, dongshan} from "../assets/images";
import {
    car,
    contact,
    css,
    cSharp,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    postgresql,
    urlshortener
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cSharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: github,
    //     name: "GitHub",
    //     type: "Version Control",
    // },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Junior Software Developer Co-op",
        company_name: "University of Alberta",
        icon: ua,
        iconBg: "#33a35b",
        date: "May 2023 - Current",
        points: [
            "Plan, design, develop and maintain Autodesk Revit add-on software applications and plugins.",
            "Apply C# with .NET to accomplish OOP and API Programming software solutions using the MVC design pattern.",
            "Achieve JSON (de)serialization to process Revit design template data storage and retrieval feature implementation.",
            "Develop and optimize Autodesk Revit add-on tool FrameX for automatic light-frame panelization of walls and floors.",
            "Resolve 30+ major bugs in FrameX and implement 10+ additional features in FrameX to improve its usability by 15%.",
            "Design and implement ConcreteX software architecture following OOP principles to handle 95%+ functional requirements.",
            "Identify and log 10+ extra system requirements, then create corresponding software solutions to upgrade usability.",
            "Conduct software documentation and coding comment templates using XML comments in project source code to improve 50% code readability.",
            "Code review over 10+ completed branches and merge into dev and main branches using Git, SourceTree, and BitBucket.",
            "Utilize Microsoft Word for task solution documentation and Microsoft PowerPoint for project meeting demonstrations.",
        ],
        weblink: "https://sites.google.com/ualberta.ca/modular-construction/home?authuser=0",
    },
    {
        title: "Software Developer Intern",
        company_name: "TGOOD",
        icon: tgood,
        iconBg: "#5e6b63",
        date: "Apr 2022 - Sep 2022",
        points: [
            "Participated in Internal Communication Web Application Development on both server and client sides.",
            "Designed website architecture with user workflow in ERD Diagrams and mock-up user interfaces in Figma.",
            "Established 30+ Backend REST APIs by setting up schemes, paths, routes, hooks, and server side admin page using Python with Django.",
            "Generated 100+ user authentication unit testing cases to secure user login and registration features' quality and performance.",
        ],
        weblink: "https://www.tgood.com/int/",
    },
    {
        title: "Software Engineer Intern",
        company_name: "Shandong University",
        icon: shandonguni,
        iconBg: "#c74b36",
        date: "May 2021 - Sep 2021",
        points: [
            "Participated in Internal Communication Web Application Development on both server and client sides.",
            "Designed website architecture with user workflow in ERD Diagrams and mock-up user interfaces in Figma.",
            "Established 30+ Backend REST APIs by setting up schemes, paths, routes, hooks, and server side admin page using Python with Django.",
            "Generated 100+ user authentication unit testing cases to secure user login and registration features' quality and performance.",
        ],
        weblink: "http://www.cs.en.qd.sdu.edu.cn/Research/Computer_Architecture_and_Embedded_System_Research.htm",
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "DongShan Intelligent Technology Co.",
        icon: dongshan,
        iconBg: "#f0cf2e",
        date: "May 2020 - Apr 2021",
        points: [
            "Designed a scalable software architecture and user interface layouts for the company's Homepage Website for public commercial use.",
            "Implemented the Company Website’s 50%+ structures and styling by applying HTML and CSS with Bootstrap.",
            "Implemented QR Code as extra contact info and created a external Links section as the Company Website’s extra functionalities.",
            "Developed the Company Website’s frontend user interfaces and client-side features using JavaScript with React.",
            "Established the Company Website’s backend APIs, data storage, data processing, and server-side functionalities, including an admin page using MongoDB Cloud Database, Node.js, jQuery, and Express.",
        ],
        weblink: "http://www.dsintel.cn/",
    },
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MichaelLsh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shihao-michael-liu/',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/MichaelLsh/threads_web_app',
        weblink: 'https://threads-web-app-phi.vercel.app/',
    },
    {
        iconUrl: urlshortener,
        theme: 'btn-back-pink',
        name: 'URL Shortener Web Application',
        description: 'Developed a backend web application for users to transfer from long wordy URL links to intuitive ones to store and use.',
        link: 'https://www.udemy.com/certificate/UC-80f44a17-85fe-40dc-9c8d-4d7c8777d076/',
        weblink: 'https://www.udemy.com/certificate/UC-80f44a17-85fe-40dc-9c8d-4d7c8777d076/',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];