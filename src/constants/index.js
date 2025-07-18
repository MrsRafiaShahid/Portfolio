 const about = "/assets/navlogo/about.svg";
 const project = "/assets/navlogo/project.svg";
 const contact = "/assets/navlogo/contact.svg";
 const web = "/assets/about/web.png";
 const mobile = "/assets/about/mobile.png";
 const backend = "/assets/about/backend.png";
 const creator = "/assets/about/creator.png";
 const reactjs ="/assets/tech/reactjs.png";
 const css = "/assets/tech/css.png";
 const figma = "/assets/tech/figma.png";
 const git = "/assets/tech/git.png";
 const html = "/assets/tech/html.png";
 const javascript = "/assets/tech/javascript.png";
 const mongodb = "/assets/tech/mongodb.png";
 const nodejs = "/assets/tech/nodejs.png";
 const tailwind = "/assets/tech/tailwind.png";
 const x ="/assets/social/x.png";
 const fb ="/assets/social/fb.png";
 const linkedlin ="/assets/social/linkedlin.png";
 const insta="/assets/social/insta.png"
 const threejs ="/assets/tech/threejs.svg"
 const redux="/assets/tech/redux.png"
 const jane="/assets/review/jane.jpg"
 const alice="/assets/review/alice.jpg"
 const bob="/assets/review/bob.jpg"
 const john="/assets/review/john.jpg"
 const task="/assets/project/task.png"
 const pokemon="/assets/project/pokemon.png"
 const weather="/assets/project/weather.png"
 const xclone="/assets/project/x-clone.png"
 const portfolio="/assets/project/portfolio.png"
 const mubrrah ="/assets/review/mubrrah.jpg"
 const githubicon="/assets/social/github.svg"

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
    title: "X Clone",
    description:
      "Developed a social media application similar to X (formerly Twitter) that allows users to post updates, follow others, and interact with posts. Implemented features like real-time updates, user authentication, and a responsive design. ",
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
    image: xclone,
    source_code_link: "https://github.com/MrsRafiaShahid/socialapp",
    visit_link: "https://socialapp-3uig.onrender.com",
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
    visit_link:"/"

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
    visit_link:"https://weather-plum-rho.vercel.app/"
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
    visit_link: "https://task-app-ruby-tau.vercel.app/"
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
    visit_link: "https://pokemon-ruddy-chi.vercel.app/"
  },
];

export const testimonials = [
  {
    testimonial:
      "Working with Rafia was seamless. She contributed high-quality code and communicated clearly throughout.",
    name: "Ali Khan",
    designation: "Collaborator on Open Source",
    company: "Riphah international University",
    image: john,
  },
  {
    testimonial:
      "Rafia has consistently demonstrated a strong grasp of core computer science principles and a dedication to continuous improvement. Her disciplined work ethic, attention to detail, and ability to apply theoretical knowledge to practical projects reflect a promising future in the tech industry. She is a dependable and capable individual, and I fully support her professional endeavors.",
    name: "Laiba Nadeem",
    designation: "Professor of Computer Science",
    company: "Bano Qabil",
    image: jane,
  },
  {
    testimonial:"Working with Rafia on multiple academic and coding projects has been a consistently positive experience. She brings clarity to complex problems and always contributes thoughtfully to team discussions. Her strong sense of responsibility and calm approach to challenges make her a reliable collaborator and a valuable asset in any technical team.",
    name:"Mubrrah Shabbir",
    designation:"ADP Computer Science Classmate",
    company:"Riphah International University",
    image:mubrrah
  },
  {
    testimonial:
      "Working with Rafia on projects has been a great experience. She`s always organized, brings creative ideas to the table, and helps push the whole team to do better. Super reliable and a great team player!",
    name: "Maryam Chughtai",
    designation: "Classmate & Project Collaborator",
    company: "Riphah International University",
    image: alice,
  },
  {
    testimonial:
      "Rafia was quick to grasp new concepts and showed a real passion for clean code and design. A joy to mentor.",
    name: "Bob Brown",
    designation: "Web MERN Stack Mentor",
    company: "Bano Qabil",
    image: bob,
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
    url: "https://www.linkedin.com/in/rafia-shahid-285b37374",
  },
  {
    name:"x",
    imgPath:x,
    url:"https://x.com/"
  }
];
