import {
    ADS,
    ethereum,
    blockchain,
    developer,
    javascript,
    Jobify,
    Prompt,
    Video,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    todo,
    Chatapp,
    nft,
    oys,
    tripguide,
    threejs,
    avalanche,
    ethers,
    web3,
    truffle,
    hardhat,
    utsav,
    smit,
    AKAM,
    github,
    git,
    ms,
    instagram,
    twitter,
    linkedin,
    shreya,
    // IBM,
    IBM1,
    STTL,
    Fronted_Devoloper,
    Backend_Devoloper,
    
    
    // IBM2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "Download",
      title: "Download CV"
    }
  ];
  
  const services = [
    {
      title: "Fronted Developer",
      icon: Fronted_Devoloper,
    },
    {
      title: "Backend Developer",
      icon: Backend_Devoloper,
    },
    // {
    //   title: "Blockchain Software Developer",
    //   icon: blockchain,
    // },
    // {
    //   title: "Facebook ADS",
    //   icon: ADS,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },

  ];
  
  const experiences = [

    
    {
      title: "Internship",
      company_name: "Silver Touch Pvt Ltd",
      icon: STTL,
      iconBg: "white",
      date: "Jan 2024 - Augest 2024",
      points: [
        "Secured position as Software Trainee at Silver Touch through Campus Placement, commencing January 2024.",
        " Enhanced Sandesh News website frontend with Next.js 14, achieving a 40% performance improvement and optimizing component reusability through server-side rendering",
        "Strengthened proficiency in MSSQL, honed object-oriented programming skills, and gained insight into ERP and SAP systems.",
        "Demonstrated problem-solving capabilities through solving Data Structures and Algorithms questions, enhancing versatility and readiness for professional challenges.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ved is a top-notch blockchain developer with React proficiency and a solid grasp of Web 3 technologies. His meticulous approach and seamless integration of interfaces with blockchain infrastructure make them a valuable asset in the field.",
      name: "Utsav Pandya",
      designation: "Student",
      company: "GEC Modasa",
      image: utsav,
    },
    {
      testimonial:
        "Working with VED was a pleasure. His technical expertise, communication skills, and problem-solving abilities make him an invaluable Web3 developer. I highly recommend him and look forward to future collaborations.",
      name: "Smit Patel",
      designation: "Student",
      company: "GEC Modasa",
      image: smit,
    },
    {
      testimonial:
        "Ved combines deep Web 3 expertise in Solidity, JavaScript, and React with hands-on experience in decentralized platforms, making them a valuable asset for creating innovative decentralized applications.",
      name: "Shreya Patel",
      designation: "Student",
      company: "GEC Modasa",
      image: shreya,
    },
  ];
  
  const projects = [
    {
      name: "Jobify",
      description:
        "Developed Jobify, a job tracking application using React 18 for the front end, and Node.js/Express.js for the backend.Implemented form validation with Express Validator, cookie-based token authentication",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "expressJs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: Jobify,
      source_code_link: "https://github.com/Ovesh101/Jobify",
      live_code_link: "https://jobify-app-v2g8.onrender.com/",
    },
    {
      name: "Prompt Generator App",
      description:
        "Built Promptopia, a web app with Next.js 14, React, and Tailwind CSS, focusing on responsive design.Integrated ChatGPT’s API to automate prompt generation, allowing users to view, use, and copy prompts,enhancing interaction",
      tags: [
        {
          name: "nextJs 14",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "chatgptApi",
          color: "green-text-gradient",
        },
      ],
      image: Prompt,
      source_code_link: "https://github.com/Ovesh101/Promptopia_Next",
      live_code_link: "https://promptopia-next-beta.vercel.app/",
    },
    {
      name: "Huddle",
      description:
        "Developed a video conferencing application with React and Stream API, incorporating real-time video, screen sharing, and chat functionalities. Integrated Clerk Auth for secure user authentication and enhanced real-time communication features to improve user experience",
      tags: [
        {
          name: "nextJs14",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Clerk Auth",
          color: "green-text-gradient",
        },
        {
          name: "StreamApi",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: Video,
      source_code_link: "https://github.com/Ovesh101/Huddle",
      live_code_link: "https://huddle-livid.vercel.app/",
    },
    // {
    //   name: "Order Your Snacks",
    //   description:
    //     "A NFT project which can be used to add NFTs, Mint NFTs, Buy NFTs.Developed using React, Solidity, and Tailwind, it provides a user-friendly platform for effortless NFT creation. This project serves as a deployed test model on the Goerli testnet for testing its functionality before its release.",
    //   tags: [
    //     {
    //       name: "next",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: oys,
    //   source_code_link: "https://github.com/AdityaShinde03/Order-Your-Snacks",
    //   live_code_link: "https://order-your-snacks.vercel.app/",
    // },
  ];
  export { services, technologies, experiences, testimonials, projects };