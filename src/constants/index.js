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
    image: "https://randomuser.me/api/portraits/women/4.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ntuthuko does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.png",
  },
  {
    testimonial:
      "After Ntuthuko optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.png",
  },
];

const projects = [
  {
    name: "Forever E-commerce Store",
    description:
      "Full-featured e-commerce website where customers can browse, search, and purchase clothing products online, providing a seamless digital shopping experience.",
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
    source_code_link: "https://github.com/SMOKEY1014/eStore",
  },
  {
    name: "Airbnb Clone",
    description:
      "Web platform that replicates Airbnb’s core functionalities, allowing users to list, browse, and book properties, designed with a clean UI and responsive layout.",
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
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SMOKEY1014/airbnb-yarn",
  },
  {
    name: "TikTactoe Game",
    description:
      "Web-based interactive game where users can play a modern version of tic-tac-toe with smart UI updates and instant feedback, offering a fun and engaging experience for casual gamers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SMOKEY1014/tic-tac-toe",
  },
];

const certificates = [
  {
    name: "Diploma in ICT in Application Development",
    description: "Three-year diploma focusing on application development, databases, networking, and software engineering fundamentals.",
    tags: [
    { name: "Application Development", color: "blue-text-gradient" },
    { name: "Mobile Apps", color: "green-text-gradient" },
    { name: "Networking", color: "pink-text-gradient" },
    { name: "Project Management", color: "green-text-gradient" },
    { name: "Information Systems", color: "blue-text-gradient" },
    { name: "Cybersecurity", color: "pink-text-gradient" }
  ],
    image: "/assets/certificates/diploma.jpg",
    certificate_link: "#", // TODO: Replace with a valid PDF or public verification link when available
  },
  {
    
    name: "ALX Software Engineering Certificate",
    description: "18-month full-stack software engineering program focused on real-world problem solving and scalable software development.",
    tags: [
      { name: "Fullstack", color: "blue-text-gradient" },
      { name: "C", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Information Security", color: "green-text-gradient" }
    ],
    image: "/assets/certificates/alx.png", // Replace with actual image path or URL
    certificate_link: "https://savanna.alxafrica.com/certificates/Z9SM7nfTPx",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    description: "Google-backed certification covering security operations, threat detection, risk mitigation, and SIEM tools.",
    tags: [
      { name: "Google", color: "blue-text-gradient" },
      { name: "Security", color: "green-text-gradient" },
      { name: "Threat Analysis", color: "pink-text-gradient" },
      { name: "Vulnerability Management", color: "green-text-gradient" },
      { name: "Cybersecurity Processes", color: "blue-text-gradient" }
    ],
    image: "/assets/certificates/google.jpg",
    certificate_link: "https://coursera.org/share/2da67368b789e455ba4454ae0be9ebe8",
  },
  {
    name: "Cisco Introduction to Cybersecurity",
    description: "Covers the basics of cybersecurity, types of threats, and best practices for securing networks and devices.",
    tags: [
      { name: "Cybersecurity", color: "green-text-gradient" },
      { name: "Cisco", color: "blue-text-gradient" },
      { name: "Cyber Attacks", color: "pink-text-gradient" },
      { name: "Risk Management", color: "green-text-gradient" }
    ],
    image: "/assets/certificates/cisco.png",
    certificate_link: "https://www.netacad.com/certificates?issuanceId=0cdb9b0a-ae9b-4d93-b0dc-9b383e3a8f7a",
  },
  {
    name: "Cisco Introduction to IoT",
    description: "This course introduces the Internet of Things (IoT) and its transformative impact on industries, environments, and our everyday lives. It covers the fundamentals of IoT, including concepts like digital transformation, sensors, actuators, data flow, and the role of cybersecurity in connected systems.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "Cisco", color: "green-text-gradient" },
      { name: "Cybersecurity", color: "pink-text-gradient" },
      { name: "Networking", color: "green-text-gradient" },
      { name: "Digital Transformation", color: "blue-text-gradient" },
    {   name: "Information Security", color: "pink-text-gradient" }
  ],
    image: "/assets/certificates/iot.png", // Replace with actual uploaded filename
    certificate_link: "https://www.netacad.com/certificates?issuanceId=0cdb9b0a-ae9b-4d93-b0dc-9b383e3a8f7a" // Or personal verification link if available
  },
  {
    name: "NDG Linux Unhatched",
    description: "An introductory course into Linux command-line usage and concepts, preparing learners for further Linux training.",
    tags: [
      { name: "Linux", color: "green-text-gradient" },
      { name: "Command Line", color: "pink-text-gradient" },
      { name: "Information Security", color: "blue-text-gradient" }
    ],
    image: "/assets/certificates/linux.png",
    certificate_link: "https://www.netacad.com/certificates?issuanceId=ca7afdd6-1eda-4b11-988d-8ab63a94ad74",
  },
  {
    name: "Microsoft SC-300: Identity and Access Administrator",
    description: "Covers identity lifecycle management, authentication, access management, and Microsoft Entra ID.",
    tags: [
      { name: "Microsoft", color: "blue-text-gradient" },
      { name: "Identity", color: "green-text-gradient" },
      { name: "Risk Management", color: "pink-text-gradient" }
    ],
    image: "/assets/certificates/sc300.png",
    certificate_link: "https://learn.microsoft.com/api/credentials/share/en-us/NDhlamini22007011/F1E2ADA29ABC8CD5?sharingId=7D6277F8D0C8EB6",
  },
  {
    name: "Microsoft SC-400: Information Protection Administrator",
    description: "Focuses on information protection, data loss prevention, and governance using Microsoft 365 tools.",
    tags: [
      { name: "Microsoft", color: "blue-text-gradient" },
      { name: "Compliance", color: "pink-text-gradient" },
      { name: "Cryptography", color: "green-text-gradient" },
      { name: "Information Security", color: "blue-text-gradient" }
    ],
    image: "/assets/certificates/sc400.png",
    certificate_link: "https://learn.microsoft.com/api/credentials/share/en-us/NDhlamini22007011/C8F7378A30723854?sharingId=7D6277F8D0C8EB6",
  },
  {
    name: "Microsoft SC-900: Security, Compliance, and Identity Fundamentals",
    description: "Entry-level cert introducing core security, compliance, and identity concepts in Microsoft services.",
    tags: [
      { name: "Security", color: "green-text-gradient" },
      { name: "Fundamentals", color: "blue-text-gradient" },
      { name: "Cybersecurity Processes", color: "pink-text-gradient" },
      { name: "Incident Response", color: "green-text-gradient" }
    ],
    image: "/assets/certificates/sc900.png",
    certificate_link: "https://learn.microsoft.com/api/credentials/share/en-us/NDhlamini22007011/F31BF56D09B94D55?sharingId=7D6277F8D0C8EB6",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
