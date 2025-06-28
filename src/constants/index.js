import {
  web,
  mobile,
  backend,
  creator,
  about,
  project,
  contact,
  reactjs,
  css,
  figma,
  git,
  html,
  javascript,
  tailwind,
  nodejs,
  mongodb,
  jobit,
  insta,
  fb,
  x,
  linkedlin,
  threejs,
  redux,
} from "../assets";

export const navlinks = [
  {
    id: "about",
    title: "About",
    url: "/about",
    icon: about,
  },
  {
    id: "project",
    title: "Projects",
    url: "/projects",
    icon: project,
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
    icon: contact,
  },
];

export const footerLinks = [
  {
    id: "privacy",
    title: "Privacy Policy",
    url: "/privacy",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    url: "/terms",
  },
];

export const socialMediaProfiles = [
  {
    id: "facebook",
    url: "https://www.facebook.com/yourpage",
  },
  {
    id: "twitter",
    url: "https://www.twitter.com/yourpage",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/yourpage",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
export const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  },
  {
    title: "Web Developer",
    icon: html,
    iconBg: "#E6DEDD",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    iconBg: "#383E56",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  },
  {
    title: "Full stack Developer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  },
];

export const technologies = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "redux",
    icon: redux,
  },
];
export const works = [
  {
    title: "E-commerce Website",
    description:
      "Developed a full-stack e-commerce website using React, Node.js, and MongoDB. Implemented features like product listing, shopping cart, and user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Created a personal portfolio website to showcase my projects and skills. Used React for the frontend and deployed it on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "violet-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    title: "Blog Platform",
    description:
      "Built a blog platform where users can create, edit, and delete posts. Implemented user authentication and a rich text editor for post creation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    title: "Weather App",
    description:
      "Developed a weather application that fetches real-time weather data using an external API. Implemented features like location search and temperature conversion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    title: "Task Management App",
    description:
      "Created a task management application that allows users to create, update, and delete tasks. Implemented drag-and-drop functionality for task organization.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    title: "Chat Application",
    description:
      "Developed a real-time chat application using WebSocket for instant messaging. Implemented user authentication and chat rooms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
];

export const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with this developer on a project, and I was thoroughly impressed with their skills and professionalism. They delivered high-quality work on time and were always willing to go the extra mile to ensure the project's success.",
    name: "John Doe",
    designation: "CEO",
    company: "Tech Solutions",
    image: "https://via.placeholder.com/100x100",
  },
  {
    testimonial:
      "This developer is a true professional. Their attention to detail and ability to solve complex problems is outstanding. I highly recommend them for any web development project.",
    name: "Jane Smith",
    designation: "CTO",
    company: "Innovatech",
    image: "https://via.placeholder.com/100x100",
  },
  {
    testimonial:
      "Working with this developer was a great experience. They are knowledgeable, responsive, and deliver results that exceed expectations. I look forward to collaborating with them again in the future.",
    name: "Alice Johnson",
    designation: "Project Manager",
    company: "Creative Minds",
    image: "https://via.placeholder.com/100x100",
  },
  {
    testimonial:
      "This developer has a unique ability to understand client requirements and translate them into functional and visually appealing web applications. Their work ethic and dedication are commendable.",
    name: "Bob Brown",
    designation: "Lead Developer ",
    company: "Web Innovators",
    image: "https://via.placeholder.com/100x100",
  },
];
export const reviews = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];
export const social = [
  {
    name: "insta",
    imgPath: insta,
  },
  {
    name: "fb",
    imgPath: fb,
  },
  {
    name: "x",
    imgPath: x,
  },
  {
    name: "linkedin",
    imgPath: linkedlin,
  },
];
