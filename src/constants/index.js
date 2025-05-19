import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  shopifys,
  carrent,
  cyber,
  jobit,
  tripguide,
  threejs,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SOC/Cyber Security Analyst",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "ZAIO Institute of Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2024 - December 2024",
    points: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express, and MongoDB.",
      "Collaborated with UI/UX designers and fellow developers to deliver high-quality learning platform features.",
      "Integrated RESTful APIs and implemented responsive front-end interfaces using Tailwind CSS.",
      "Participated in agile sprints, daily standups, and peer code reviews using Git and GitHub.",
    ],
  },
  {
    title: "Software Engineer (Fullstack Track)",
    company_name: "ALX Africa",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2024 - December 2024",
    points: [
      "Completed rigorous hands-on training in software engineering, covering algorithms, data structures, C, Python, JavaScript, and full-stack web development.",
      "Built scalable applications using Flask, Node.js, React, and MySQL.",
      "Followed Agile methodologies and used project management tools like Trello for collaboration and task tracking.",
      "Worked independently and collaboratively on several projects simulating real-world developer team environments.",
    ],
  },
  {
    title: "Network & Cybersecurity Intern (ZeroTier Project)",
    company_name: "Personal Infrastructure Lab",
    icon: cyber,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Configured two virtual machines on geographically separated hosts and securely connected them using ZeroTier SD-WAN.",
      "Simulated real-world network architecture with secure VPN tunneling and virtual LAN setups.",
      "Tested basic IDS/IPS configurations and conducted manual threat detection using Wireshark and Nmap.",
      "Applied knowledge from SC-900, SC-300, and Google Cybersecurity certifications to harden access controls and encryption.",
    ],
  },
  {
    title: "Parts Receiving Clerk",
    company_name: "Audi Centre Newcastle",
    icon: meta,
    iconBg: "#383E56",
    date: "Oct 2022 - May 2025",
    points: [
      "Managed automotive parts inventory, ensuring accuracy in stock levels and order entries.",
      "Coordinated with service advisors and technicians to streamline workshop operations.",
      "Utilized dealership management systems to track parts, deliveries, and backorders.",
      "Gained strong attention to detail and organizational skills, transferable to software development project management.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Forever (E-commerce Platform)",
    icon: shopifys,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Designed and developed a full-featured e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Integrated Stripe and Payfast for secure payments, implemented product catalog, user authentication, and shopping cart functionality.",
      "Built a scalable backend with RESTful APIs and a responsive frontend UI using React and Tailwind CSS.",
      "Managed the entire development lifecycle using Trello, Git, and deployed the app to cloud platforms.",
    ],
  },
  {
    title: "C# MVC Developer (Portfolio Project)",
    company_name: "GYM HR & Employee Management System",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "February 2025 - March 2025",
    points: [
      "Designed and implemented an ASP.NET MVC Core web application for gym employee and HR operations.",
      "Created models, controllers, and views for employee records, roles, salaries, and gym schedules.",
      "Integrated SQL Server for persistent data storage and Entity Framework for ORM.",
      "Focused on maintainable architecture, role-based access control, and user authentication.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ntuthuko proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ntuthuko does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ntuthuko optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
