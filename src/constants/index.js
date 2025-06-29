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
  jane,
  john,
  alice,
  bob,
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
      "Developed dynamic single-page applications (SPAs) using React.js and Next.js.",
      "Utilized state management (Redux, Context API) and hooks for efficient data flow",
      "Integrated APIs and optimized components for high performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    icon: html,
    iconBg: "#E6DEDD",

    points: [
      "Crafted responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Optimized web performance and accessibility while ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    iconBg: "#383E56",

    points: [
      "Built scalable server-side applications using Node.js, Python, and other related technolgies",
      "Designed RESTful APIs and managed databases (SQL & NoSQL). Implemented authentication, security, and data processing for efficient backend operations.",
      "Implemented authentication, security, and data processing for efficient backend operations.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Delivered end-to-end web solutions by combining front-end and back-end expertise.",
      "Worked with MERN/MEAN stacks to build full-fledged applications.",
      "Streamlined deployment using cloud services and CI/CD pipelines.",
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
      "They built a robust API that scaled seamlessly with our growing user base. Their problem-solving skills in database optimization and security were outstanding",
    name: "John Doe",
    designation: "Backend Team Lead",
    company: "Tech Solutions",
    image: john,
  },
  {
    testimonial:
      "From concept to deployment, Rafia delivered a flawless full-stack application. Their ability to bridge front-end and back-end efficiently saved us time and resources.",
    name: "Jane Smith",
    designation: "Project Manager",
    company: "Innovatech",
    image: jane,
  },
  {
    testimonial:
      "Working with Rafia was a game-changer for our project. Their attention to detail in UI/UX and clean code structure made our website load faster and improved user engagement significantly.",
    name: "Alice Johnson",
    designation: "Project Manager",
    company: "Creative Minds",
    image: alice,
  },
  {
    testimonial:
      "THer developer has a unique ability to understand client requirements and translate them into functional and visually appealing web applications.  Their expertise in state management reduced bugs and improved app stability.",
    name: "Bob Brown",
    designation: "Front-End Developer",
    company: "Web Innovators",
    image: bob,
  },
];
export const social = [
  {
    name: "insta",
    imgPath: insta,
    url: "https://www.instagram.com/",
  },
  {
    name: "fb",
    imgPath: fb,
    url: "https://www.facebook.com/",
  },
  {
    name: "x",
    imgPath: x,
    url: "https://www.x.com/",
  },
  {
    name: "linkedin",
    imgPath: linkedlin,
    url: "https://www.linkedlin.com/",
  },
];
