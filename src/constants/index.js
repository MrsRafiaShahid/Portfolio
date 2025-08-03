const about = "/assets/navlogo/about.svg";
const project = "/assets/navlogo/project.svg";
const contact = "/assets/navlogo/contact.svg";
const web = "/assets/about/web.png";
const mobile = "/assets/about/mobile.png";
const backend = "/assets/about/backend.png";
const creator = "/assets/about/creator.png";
const reactjs = "/assets/tech/reactjs.png";
const css = "/assets/tech/css.png";
const git = "/assets/tech/git.png";
const html = "/assets/tech/html.png";
const javascript = "/assets/tech/javascript.png";
const mongodb = "/assets/tech/mongodb.png";
const nodejs = "/assets/tech/nodejs.png";
const c = "/assets/tech/c++.png";
const tailwind = "/assets/tech/tailwind.png";
const redux = "/assets/tech/redux.png";
const figma = "/assets/tech/figma.png";
const x = "/assets/social/x.svg";
const fb = "/assets/social/fb.svg";
const linkedlin = "/assets/social/linkedlin.svg";
const insta = "/assets/social/insta.svg";
const task = "/assets/project/task.png";
const pokemon = "/assets/project/pokemon.png";
const weather = "/assets/project/weather.png";
const tweex = "/assets/project/tweex.png";
const portfolio = "/assets/project/portfolio.png";
const hangman = "/assets/project/hangman.png";
const githubicon = "/assets/social/github.svg";
const webdev = "/assets/certificate/web.jpeg";
const mern = "/assets/certificate/mern.jpeg";

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
    title: "C++ Developer",
    icon: creator,
  },
];
export const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Built responsive and interactive UI components using React.js, Tailwind CSS, and modern hooks like useState, useEffect, and useContext.",
      "Implemented dynamic forms, animations, and context-based state management for improved user experience.",
      "Integrated APIs and handled asynchronous data with Axios and TanStack Query.",
    ],
  },
  {
    title: "Web Developer",
    icon: html,
    iconBg: "#E6DEDD",

    points: [
      "Crafted responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
      "Optimized web performance and accessibility while ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Built full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Created features like user authentication, real-time post updates, profile management, and CRUD APIs.",
      "Used tools like Git, Postman, and Render for version control, testing, and deployment."
    ],
  },
  {
    title: "C++ Developer",
    icon: c,
    iconBg: "#383E56",

    points: [
      "Developed foundational C++ applications as part of academic and personal learning projects, emphasizing clean, readable, and modular code.",
      "Applied object-oriented programming (OOP) principles to structure and organize code for scalability and maintenance.",
      "Strengthened debugging, logic-building, and core programming skills through structured development"
    ],
  },
  
];
export const certification = [
  {
    title: "Web Development",
    platform: "Bano Qabil (PITB Accredited)",
    image: webdev,
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "violet-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
  },
  {
    title: "Web MERN Stack",
    platform: "Bano Qabil (PITB Accredited)",
    image: mern,
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
      {
        name: "express",
        color: "orange-text-gradient",
      },
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
    name: "redux",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
];
export const works = [
  {
    title: "TWEEX",
    description:
      "Tweex is a playful social media web app inspired by X (Twitter), built with the MERN stack. It features posting, liking, commenting, and reposting—wrapped in a modern, responsive design with light/dark mode support. ",
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
      {
        name: "redux",
        color: "violet-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image:tweex,
    source_code_link: "https://github.com/MrsRafiaShahid/Tweex",
    visit_link: "https://tweex.onrender.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Created a personal portfolio website to showcase my skills, projects, and experiences. The website features a modern design with smooth animations, responsive layout. Built using React and styled with Tailwind CSS.",
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
    image: portfolio,
    source_code_link: "https://github.com/MrsRafiaShahid/Portfolio",
    visit_link: "/",
  },

  {
    title: "Weather App",
    description:
      "Developed a weather application that provides real-time weather updates and forecasts for any location. The app fetches data from a weather API and displays it in a user-friendly interface, including temperature, humidity, and weather conditions. Styled with Tailwind CSS for a modern look.",
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
    image: weather,
    source_code_link: "https://github.com/MrsRafiaShahid/weather",
    visit_link: "https://weather-plum-rho.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "created a task management application that allows users to create, update, and delete tasks and mark tasks as complete to stay organized and productive. The app features a clean UI styled with Tailwind CSS and offers a responsive experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/MrsRafiaShahid/Task-App",
    visit_link: "https://task-app-ruby-tau.vercel.app/",
  },

  {
    title: "Hangman Console Game",
    description:
      "A classic word-guessing game built in C++ that runs in the terminal. Players try to guess a hidden word one letter at a time, with a limited number of incorrect guesses allowed.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
           {
        name: "File Input/Output",
        color: "green-text-gradient",
      },
    ],
    image: hangman,
    source_code_link: "https://github.com/MrsRafiaShahid/Hangman",
    // visit_link: "https://pokemon-ruddy-chi.vercel.app/",
  },
  {
    title: "Pokemon App",
    description:
      "Developed a Pokemon application that allows users to search for and view details about various Pokemon. The app fetches data from the PokeAPI and displays it in a user-friendly interface, including images, types, and abilities. The app is styled with Tailwind CSS for a modern look and feel.",
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
    image: pokemon,
    source_code_link: "https://github.com/MrsRafiaShahid/Pokemon",
    visit_link: "https://pokemon-ruddy-chi.vercel.app/",
  },
];

export const testimonials = [
  {
    testimonial:
      "Working with Rafia was seamless. She contributed high-quality code and communicated clearly throughout.",
    name: "Usama",
    designation: "Collaborator on Open Source Project",
    company: "Riphah international University",
  },
  {
    testimonial:
      "Rafia shows a solid understanding of computer science, applies theory to practice well, and works with focus and discipline. She’s dependable and has strong potential in the tech industry.",
    name: "Fatima Bukhari",
    designation: "Classmate in Web development",
    company: "Bano Qabil",
  },
  {
    testimonial:
      "Working with Rafia on various projects has been a consistently positive experience. She tackles complex problems with clarity, contributes thoughtfully in teams, and remains calm under pressure—making her a reliable and valuable teammate.",
    name: "Mubrrah Shabbir",
    designation: "ADP Computer Science Classmate",
    company: "Riphah International University",
  },
  {
    testimonial:
      "Working with Rafia on projects has been a great experience. She`s always organized, brings creative ideas to the table, and helps push the whole team to do better. Super reliable and a great team player!",
    name: "Maryam Chughtai",
    designation: "Classmate & Project Collaborator",
    company: "Riphah International University",
  },
  {
    testimonial:
      "Rafia was quick to grasp new concepts and showed a real passion for clean code and design. A joy to mentor.",
    name: "Prof.Muntansaar",
    designation: "Web MERN Stack Mentor",
    company: "Bano Qabil",
  },
];
export const social = [
  {
    name: "insta",
    imgPath: insta,
    url: "https://www.instagram.com/raffi__2002/",
  },
  {
    name: "fb",
    imgPath: fb,
    url: "https://www.facebook.com/rafia.shahid.733",
  },
  {
    name: "github",
    imgPath: githubicon,
    url: "https://github.com/MrsRafiaShahid",
  },
  {
    name: "linkedin",
    imgPath: linkedlin,
    url: "https://www.linkedin.com/in/rafia-shahid-mern",
  },
  {
    name: "x",
    imgPath: x,
    url: "https://x.com/",
  },
];
