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
    // company_name: "Starbucks",
    lineColor: " rgb(52, 141, 163)",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    // company_name: "Tesla",
    lineColor: " rgba(52, 141, 163)",
    icon: html,
    iconBg: "#E6DEDD",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",

    // company_name: "Shopify",
    lineColor: " rgb(52, 141, 163)",
    icon: nodejs,
    iconBg: "#383E56",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    lineColor: " rgb(136, 69, 132)",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    image: "https://via.placeholder.com/300x200",
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
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300x200",
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
    image: "https://via.placeholder.com/300x200",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:"https://via.placeholder.com/300x200",
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
    image: "https://via.placeholder.com/300x200",
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
    image: "https://via.placeholder.com/300x200",
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
    image: "https://via.placeholder.com/100x100"
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