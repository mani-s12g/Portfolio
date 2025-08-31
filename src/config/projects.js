// config.js
// “Spearheaded • Collaboration • Impact” ✅ (strong, balanced, and memorable).

// ✅ Centralized reusable tech stacks
const techStacks = {
  frontend: ["HTML", "CSS", "Bootstrap", "JQuery", "React.js, Vue.js"],
  backend: ["Node.js", "Express.js", "Java"],
  database: ["MongoDB", "Postgres", "MySQL"],
  devops: ["Nginx", "AWS (EC2, S3)", "Docker", "Kubernetes"],
  tools: ["Redux", "jQuery", "Axios", "Github", "Postman"],
};

const experience = {
  expkeywords: ["Spearheaded", "Collaboration", "Impact"],
  expintro: [
    "Experience is more than titles — it’s ",
    { text: "lessons learned", color: "var(--colors-lightgray)" },
    " and ",
    { text: "impact delivered", color: "var(--colors-lightgray)" },
    ". Here’s how my journey shaped me and contributed to the success of my ",
    { text: "teams", color: "var(--colors-lightgray)" },
    " and ",
    { text: "companies", color: "var(--colors-lightgray)" },
    ".",
  ],
  expArr: [
    {
      designation: "Software Engineer",
      company: "Infobell IT Solutions Pvt Ltd",
      fromDate: "May 2022",
      toDate: "Mar 2025",
      totalYears: "2 yr 10mos",
      technologies: [
        ...techStacks.frontend,
        ...techStacks.backend,
        ...techStacks.database,
        ...techStacks.devops,
        ...techStacks.tools,
      ],
      keyAchievements: [
        "Got the opportunity to develop and contribute to the new Infobell IT company website (presently live).",
        "Mentored and led a team of fellow developers on multiple projects.",
        "Worked on more than 5+ projects in a span of 2+ years, delivering impactful contributions that led to an onsite client opportunity.",
        "Contributed to several internal projects for Fortune 500 companies.",
      ],
    },
    {
      designation: "Software Developer",
      company: "Liquidlab - IT Solutions Services",
      fromDate: "Oct 2020",
      toDate: "April 2022",
      totalYears: "1 yr 8mos",
      technologies: [
        ...techStacks.tools,
        "HTML", "CSS", "Bootstrap", "JQuery", "React.js",
        "Nginx", "AWS (EC2, S3)",
        "MongoDB", "MySQL",
        "Node.js", "Express.js",
      ],
      keyAchievements: [
        "Got the opportunity to work at a growing startup, where I learned many things and contributed to almost all ongoing projects at that time.",
        "Worked on 5 projects in total, exploring and implementing new tech stacks.",
        "Gained hands-on experience across the full stack — from frontend development to backend, databases, and deployment.",
        "Led and mentored a team of 4 fellow developers across all projects I worked on.",
        "Developed multiple web applications for diverse clients, both domestic and international, engaging in client meetings and managing multiple projects simultaneously.",
        "Managed CI/CD pipelines and contributed to overall project delivery and optimization.",
      ],
    },
  ],
};

const projects = {
  keywords: ["Work", "Hobby", "Playfield Success"],
  // intro: "Here’s a look at some of the projects I’ve been part of during my career. From finance platforms and server management tools to ecommerce websites and real estate portals, each project reflects my journey as a developer — solving problems, improving user experiences, and learning new technologies along the way.",
  intro: [
    "Here’s a look at some of the projects I’ve been part of during my career. From ",
    { text: "finance platforms", color: "var(--colors-lightgray)" },
    " and ",
    { text: "server management tools", color: "var(--colors-lightgray)" },
    " to ",
    { text: "ecommerce websites", color: "var(--colors-lightgray)" },
    " and ",
    { text: "real estate portals", color: "var(--colors-lightgray)" },
    ", each project reflects my journey as a developer — ",
    { text: "solving problems", color: "var(--colors-lightgray)" },
    ", ",
    { text: "improving user experiences", color: "var(--colors-lightgray)" },
    ", and ",
    { text: "learning new technologies", color: "var(--colors-lightgray)" },
    " along the way.",
  ],
  projectsArr: [
    {
      name: "LatticeFi",
      duration: "Nov 2022 – Jan 2023",
      company: "Infobell IT Solutions Pvt Ltd",
      role: "React JS Developer",
      description:
        "A wealth management platform that blends traditional finance with new technologies to increase transparency.",
      technologies: [...techStacks.frontend, "Github"],
      contributions: [
        "Developed a fully responsive website with appealing UI/UX.",
        "Created 5 modules: Main, About Us, Contact Us, T&C, Privacy Policy.",
        "Participated in code review and peer review.",
      ],
    },
    {
      name: "LatticeFi Auctionsddddd dddddddddddddddddddddddddd",
      duration: "Feb 2023 – Aug 2023",
      company: "Infobell IT Solutions Pvt Ltd",
      role: "React JS Developer",
      description:
        "Assets & bonds auction platform where users place competitive bids, set reminders, and manage auctions.",
      technologies: [
        ...techStacks.frontend,
        "Redux",
        "Java",
        "MySQL",
        "Github",
      ],
      contributions: [
        "Developed the entire web application from scratch as lead developer.",
        "Implemented Redux for state management.",
        "Built auction features: live timer, filters, search, notifications.",
        "Integrated APIs using Axios and tested with Postman.",
        "Performed bug fixing, code reviews, and deployment testing.",
      ],
    },
    {
      name: "Server Management",
      duration: "June 2022 – Oct 2022",
      company: "Infobell IT Solutions Pvt Ltd",
      role: "React JS Developer",
      description:
        "Tool for managing and optimizing server utilization in the lab.",
      technologies: [
        ...techStacks.frontend,
        "Postgres",
        "Golang",
        ...techStacks.devops,
        "Github",
      ],
      contributions: [
        "Developed UI for Servers, Users, and History modules.",
        "Integrated REST APIs for server reservation and release.",
        "Implemented secure and conditional routes based on user roles.",
        "Dockerized and deployed UI on Kubernetes pods.",
      ],
    },
    {
      name: "Inteco",
      duration: "Jul 2021 – Feb 2022",
      company: "Liquidlab - IT Solutions Services",
      role: "Full Stack Developer",
      description:
        "HR and Accounting tool project for a UK-based consult trading & contracting company in Qatar.",
      technologies: [
        ...techStacks.frontend,
        "jQuery",
        ...techStacks.backend,
        "MongoDB",
        "Nginx",
        "AWS (EC2, S3)",
      ],
      contributions: [
        "Worked on 70+ APIs and 20+ pages out of 200 APIs and 30+ pages total.",
        "Used MongoDB aggregation pipelines for backend APIs.",
        "Deployed on AWS EC2 with images stored in AWS S3.",
      ],
    },
    {
      name: "Kenzorealty",
      duration: "Feb 2021 – Apr 2021",
      company: "Liquidlab - IT Solutions Services",
      role: "Full Stack Developer",
      description:
        "Industrial real estate agency website with admin dashboard and customer-facing pages.",
      technologies: [
        ...techStacks.frontend,
        "Redux",
        ...techStacks.backend,
        "MongoDB",
        "Nginx",
        "AWS (EC2, S3)",
      ],
      contributions: [
        "Built fully responsive SPA with React.js.",
        "Integrated APIs and managed state with Redux.",
        "Implemented live chat widget using Tawk.to.",
      ],
    },
    {
      name: "Aquax",
      duration: "Apr 2021 – May 2021",
      company: "Liquidlab - IT Solutions Services",
      role: "Full Stack Developer",
      description:
        "Website for a water purifiers trading company in Dubai, showcasing product designs and features.",
      technologies: [
        ...techStacks.frontend,
        ...techStacks.backend,
        "MongoDB",
        "Nginx",
        "AWS (EC2, S3)",
      ],
      contributions: [
        "Developed a simple project to display product designs and features.",
        "Deployed and optimized for responsive use.",
      ],
    },
    {
      name: "Buildcraft-Urbanscape",
      duration: "May 2021 – Jun 2021",
      company: "Liquidlab - IT Solutions Services",
      role: "Full Stack Developer",
      description:
        "Construction and maintenance company website with simple front-end features.",
      technologies: [
        ...techStacks.frontend,
        "Javascript",
        ...techStacks.backend,
        "MongoDB",
        "Nginx",
        "AWS (EC2, S3)",
      ],
      contributions: [
        "Developed front-end with navbar, main content, footer, and multiple content pages.",
        "Integrated APIs in React.js.",
      ],
    },
    {
      name: "Aevalona",
      duration: "Feb 2022 – May 2022",
      company: "Liquidlab - IT Solutions Services",
      role: "Full Stack Developer",
      description:
        "SEO-friendly ecommerce website with admin dashboard, built using Next.js.",
      technologies: [
        ...techStacks.frontend,
        "Next.js",
        "Redux",
        "jQuery",
        ...techStacks.backend,
        "MongoDB",
        "Nginx",
        "AWS (EC2, S3)",
      ],
      contributions: [
        "Developed fully functional ecommerce website with SEO optimizations.",
        "Integrated APIs and used Redux for state management.",
        "All cart features, payment gatway, notifications recommendations, post order detailed schduled responses etc.",
      ],
    },
  ],
};

export { techStacks, projects, experience };

// details: [
//   {
//     title: "Basil Resort",
//     description:
//       "It's a beautifull resort renting website with real-time schedule updating API.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "Frontend Developer",
//     challenges:
//       "Had to analyze the pre-existing codebase, to understand the flow and adapt quickly to the environment and start working.",
//     outcome:
//       "Was able to contribute immensly, worked on booking page, scheduling(created a scheduler), created a profestional and higly scalable application, learned to deploy for production on AWS EC2 instance server with elastice IP. ",
//   },
//   {
//     title: "Aavelona",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Kenzo Realty",
//     description:
//       "It's a beautifull resort renting website with real-time schedule updating API.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "Frontend Developer",
//     challenges:
//       "Had to analyze the pre-existing codebase, to understand the flow and adapt quickly to the environment and start working.",
//     outcome:
//       "Was able to contribute immensly, worked on booking page, scheduling(created a scheduler), created a profestional and higly scalable application, learned to deploy for production on AWS EC2 instance server with elastice IP. ",
//   },
//   {
//     title: "Build Craft",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Aavelona",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Aavelona",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React JS, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
// ],

// ✅ Projects data
