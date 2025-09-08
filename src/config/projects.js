// config.js
// “Spearheaded • Collaboration • Impact” ✅ (strong, balanced, and memorable).
// import googleLogo from "../assets/images/google.png";
import fm from "../assets/images/fm.jpg";
import abc from "../assets/images/abc.jpg";
import udemy from "../assets/images/udemy.jpg";
import hc from "../assets/images/hc.jpg";
// ✅ Centralized reusable tech stacks
const techStacks = {
  frontend: ["HTML", "CSS", "JS", "JQuery", "Bootstrap", "React", "Vue.js"],
  backend: ["Node.js", "Express.js", "Java"],
  database: ["MongoDB", "Postgres", "MySQL"],
  devops: ["Nginx", "AWS (EC2, S3)", "Docker", "Kubernetes"],
  tools: ["Redux", "jQuery", "Axios", "Github", "Postman"],
};

const certify = {
  certIntro: [
    "These credentials represent ",
    { text: "structured growth", color: "var(--colors-lightgray)" },
    " and ",
    { text: "proven expertise", color: "var(--colors-lightgray)" },
    ". ",
    "They validate the skills I apply to ",
    { text: "real-world challenges", color: "var(--colors-lightgray)" },
    ".",
  ],
  certiKeywords: ["Certified", "Skilled", "Proven"],
  cartifications: [
    {
      title: "The Last Algorithms Course You'll Need",
      learningInstitute: "Frontend Masters",
      credentials: "https://static.frontendmasters.com/ud/c/47a560140b/aPVwjxMZsP/algorithms.pdf",
      logo: fm,
    },
    {
      title: "React",
      learningInstitute: "Hacker Rank",
      credentials: "https://www.hackerrank.com/certificates/4f7ecaf91460",
      logo: hc,
    },
    {
      title: "JavaScript",
      learningInstitute: "Hacker Rank",
      credentials: "https://www.hackerrank.com/certificates/d232b874fc33",
      logo: hc,
    },
    {
      title: "Java",
      learningInstitute: "Hacker Rank",
      credentials: "https://www.hackerrank.com/certificates/135726a24381",
      logo: hc,
    },
    {
      title: "Python",
      learningInstitute: "Hacker Rank",
      credentials: "https://www.hackerrank.com/certificates/ff601fec8d96",
      logo: hc,
    },
    {
      title: "Java And Python",
      learningInstitute: "ABC - Technology Training & Upskilling",
      credentials: "https://www.linkedin.com/in/manikanta-s/details/certifications/1753482585831/single-media-viewer/?profileId=ACoAACh36O0BFWVPIA5yl1WPdQaMDfX-FdD3kIc",
      logo: abc,
    },
    {
      title: "Web Development And Javascript bootcamp",
      learningInstitute: "Udemy",
      credentials: "https://www.udemy.com/certificate/UC-b7f0b08b-f824-4f00-a14b-b04aa107a862/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
      logo: udemy,
    },
  ]
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
      company: "Infobell IT Solutions Pvt. Limited",
      fromDate: "May 2022",
      toDate: "Mar 2025",
      totalYears: "2 yr 10 mos",
      technologies: [
        ...techStacks.frontend,
        ...techStacks.backend,
        ...techStacks.database,
        ...techStacks.devops,
        ...techStacks.tools,
      ],
      keyAchievements: [
        "Got oppotunity to work for several internal projects and POC which later became part of clients project.",
        "Worked on various cutting edge technologies and contributed to many client projects.",
        "Mentored and led a team of fellow developers on multiple projects.",
        "Worked on more than 5+ projects in a span of 2 years and 10 months, delivering impactful contributions that led to an onsite client opportunity.",
      ],
    },
    {
      designation: "Software Developement Associate",
      company: "LiquidLab Infosystems",
      fromDate: "Oct 2020",
      toDate: "May 2022",
      totalYears: "1 yr 7 mos",
      technologies: [
        ...techStacks.tools,
        "HTML",
        "CSS",
        "Bootstrap",
        "JQuery",
        "React",
        "Nginx",
        "AWS (EC2, S3)",
        "MongoDB",
        "MySQL",
        "Node.js",
        "Express.js",
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
      name: "Benchmarking Application performance analysis & Server Management Dashboard (Major Client Project)",
      duration: "Nov 2023 – Mar 2025",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "Full Stack Developer",
      description:
        "An enterprise-scale dashboard application for managing servers and benchmarks (TPC, SPEC, MLPerf etc.);. The system provided in-depth analytics, benchmarking runs, evaluating CPU, GPU, and system performance, performance comparisons, and server management with secure role-based access.",
      technologies: [
        "Vue.js",
        ...techStacks.backend.slice(0, 2),
        "MongoDB",
        ...techStacks.devops,
        "Jenkins",
        "Github",
        "Postman",
      ],
      contributions: [
        "Contributed in Developing and maintaining multiple dashboard modules for various platform profiles, automation framework for provisioning, and application performance analysis.",
        "Created interactive data tables with server-side pagination, filtering, and sorting for large-scale datasets with core optimizations.",
        "Built visualization components using vue-chartjs, Chart.js and D3.js for benchmark performance graphs and comparison charts.",
        "Enabled triggering, pausing, retrying, and tracking of benchmarking runs with real-time status updates.",
        "Contributed CRUD operations for server creation, assignment to users, and management of server resources (CPU, RAM, disk space).",
        "Integrated REST APIs for benchmarks and server operations, ensured smooth error handling for failed runs.",
      ],
    },

    {
      name: "Software Vendor Showcase Platform with Dashboard (Client project, based in USA)",
      duration: "Sep 2023 – Mar 2024",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "React Developer",
      description:
        "A client-facing platform to showcase software vendors, their products and detailed vendor information and a secure admin dashboard for managing vendor data.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Vue JS",
        ...techStacks.devops,
        ...techStacks.database.slice(0, 1),
        ...techStacks.backend.slice(0, 2),
      ],
      contributions: [
        "Developed the website with responsive design and smooth UI/UX.",
        "Implemented server-side pagination for scalable vendor/product listings.",
        "Built advanced filtering features by category, industry, and vendor type.",
        "Integrated modal popups to display detailed vendor/product information.",
        "Created a role-based admin dashboard to manage categories, industries, products, processors, models, CPU details, and organizations.",
        "Implemented full CRUD operations (Add, Edit, Update, Delete) across all modules.",
        "Integrated APIs for seamless product and vendor data handling.",
      ],
    },
    {
      name: "Digital Asset Auction Dashboard Platform (Client project, based in China)",
      duration: "Feb 2023 – Aug 2023",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "React Developer",
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
      name: "Wealth Management Platform (Client project, based in China)",
      duration: "Nov 2022 – Jan 2023",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "React Developer",
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
      name: "Server Resource Management Tool (Internal project → Later proposed & extended into a client solution, now in production)",
      duration: "June 2022 – Oct 2022",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "React Developer",
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
      name: "Infobell IT Solutions Website (Internal Project, Revamp)",
      duration: "May 2022 – JULY 2022",
      company: "Infobell IT Solutions Pvt. Limited",
      companyLink: "https://www.infobellit.com/",
      role: "Front End Developer",
      description:
        "Revamped and modernized the company’s corporate website to improve design, responsiveness, and user experience. Enhanced existing static pages with dynamic components, optimized performance, and improved overall brand presentation.",
      technologies: [
        ...techStacks.frontend.splice(0, 4),
        ...techStacks.devops,
        "Github",
      ],
      contributions: [
        "Redesigned and redeveloped the company’s corporate website for improved aesthetics and usability.",
        "Implemented responsive layouts, interactive sections, and better UI/UX design.",
        "Optimized site performance, SEO structure, and cross-device compatibility.",
        "Collaborated with stakeholders to highlight services, projects, and company profile effectively.",
      ],
    },
    {
      name: "Accounting Management and HR System (Client project for a UK-based consulting company)",
      duration: "Jul 2021 – Feb 2022",
      company: "LiquidLab Infosystems",
      companyLink: "https://liquidlab.in/",
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
      name: "Real-Estate Listing & Management Platform (Client project)",
      duration: "Feb 2021 – Apr 2021",
      company: "LiquidLab Infosystems",
      companyLink: "https://liquidlab.in/",
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
        "Built fully responsive SPA with React.",
        "Integrated necessory APIs and managed state with Redux.",
        "Implemented live chat widget using Tawk.to.",
      ],
    },
    {
      name: "Product Showcase Website (Client project, Based in Dubai)",
      duration: "Apr 2021 – May 2021",
      company: "LiquidLab Infosystems",
      companyLink: "https://liquidlab.in/",
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
        "Contributed in developing products showcasing website.",
        "Developed a simple yet fully responsive website to display product designs and clients features.",
        "Deployed on AWS (EC2 instance, S3) and optimized for better USer Experience.",
      ],
    },
    {
      name: "Construction Services Website (Client project)",
      duration: "May 2021 – Jun 2021",
      company: "LiquidLab Infosystems",
      companyLink: "https://liquidlab.in/",
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
        "Integrated necessory APIs in React.",
      ],
    },
    {
      name: "E-Commerce Website with SEO Optimizations (Client project)",
      duration: "Feb 2022 – May 2022",
      company: "LiquidLab Infosystems",
      companyLink: "https://liquidlab.in/",
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
        "Integrated 17+ APIs for user authentication, cart, products, orders soon and used Redux for state management.",
        "All cart features, payment gatway, notifications recommendations, post order detailed schduled responses etc.",
      ],
    },
  ],
};

export { techStacks, projects, experience, certify };

// projectsArr: [
//     {
//       name: "LatticeFi",
//       duration: "Nov 2022 – Jan 2023",
//       company: "Infobell IT Solutions Pvt. Limited",
//       role: "React Developer",
//       description:
//         "A wealth management platform that blends traditional finance with new technologies to increase transparency.",
//       technologies: [...techStacks.frontend, "Github"],
//       contributions: [
//         "Developed a fully responsive website with appealing UI/UX.",
//         "Created 5 modules: Main, About Us, Contact Us, T&C, Privacy Policy.",
//         "Participated in code review and peer review.",
//       ],
//     },
//     {
//       name: "LatticeFi Auctions",
//       duration: "Feb 2023 – Aug 2023",
//       company: "Infobell IT Solutions Pvt. Limited",
//       role: "React Developer",
//       description:
//         "Assets & bonds auction platform where users place competitive bids, set reminders, and manage auctions.",
//       technologies: [
//         ...techStacks.frontend,
//         "Redux",
//         "Java",
//         "MySQL",
//         "Github",
//       ],
//       contributions: [
//         "Developed the entire web application from scratch as lead developer.",
//         "Implemented Redux for state management.",
//         "Built auction features: live timer, filters, search, notifications.",
//         "Integrated APIs using Axios and tested with Postman.",
//         "Performed bug fixing, code reviews, and deployment testing.",
//       ],
//     },
//     {
//       name: "Server Management",
//       duration: "June 2022 – Oct 2022",
//       company: "Infobell IT Solutions Pvt. Limited",
//       role: "React Developer",
//       description:
//         "Tool for managing and optimizing server utilization in the lab.",
//       technologies: [
//         ...techStacks.frontend,
//         "Postgres",
//         "Golang",
//         ...techStacks.devops,
//         "Github",
//       ],
//       contributions: [
//         "Developed UI for Servers, Users, and History modules.",
//         "Integrated REST APIs for server reservation and release.",
//         "Implemented secure and conditional routes based on user roles.",
//         "Dockerized and deployed UI on Kubernetes pods.",
//       ],
//     },
//     {
//       name: "Inteco",
//       duration: "Jul 2021 – Feb 2022",
//       company: "LiquidLab Infosystems",
//       role: "Full Stack Developer",
//       description:
//         "HR and Accounting tool project for a UK-based consult trading & contracting company in Qatar.",
//       technologies: [
//         ...techStacks.frontend,
//         "jQuery",
//         ...techStacks.backend,
//         "MongoDB",
//         "Nginx",
//         "AWS (EC2, S3)",
//       ],
//       contributions: [
//         "Worked on 70+ APIs and 20+ pages out of 200 APIs and 30+ pages total.",
//         "Used MongoDB aggregation pipelines for backend APIs.",
//         "Deployed on AWS EC2 with images stored in AWS S3.",
//       ],
//     },
//     {
//       name: "Kenzorealty",
//       duration: "Feb 2021 – Apr 2021",
//       company: "LiquidLab Infosystems",
//       role: "Full Stack Developer",
//       description:
//         "Industrial real estate agency website with admin dashboard and customer-facing pages.",
//       technologies: [
//         ...techStacks.frontend,
//         "Redux",
//         ...techStacks.backend,
//         "MongoDB",
//         "Nginx",
//         "AWS (EC2, S3)",
//       ],
//       contributions: [
//         "Built fully responsive SPA with React.",
//         "Integrated APIs and managed state with Redux.",
//         "Implemented live chat widget using Tawk.to.",
//       ],
//     },
//     {
//       name: "Aquax",
//       duration: "Apr 2021 – May 2021",
//       company: "LiquidLab Infosystems",
//       role: "Full Stack Developer",
//       description:
//         "Website for a water purifiers trading company in Dubai, showcasing product designs and features.",
//       technologies: [
//         ...techStacks.frontend,
//         ...techStacks.backend,
//         "MongoDB",
//         "Nginx",
//         "AWS (EC2, S3)",
//       ],
//       contributions: [
//         "Developed a simple project to display product designs and features.",
//         "Deployed and optimized for responsive use.",
//       ],
//     },
//     {
//       name: "Buildcraft-Urbanscape",
//       duration: "May 2021 – Jun 2021",
//       company: "LiquidLab Infosystems",
//       role: "Full Stack Developer",
//       description:
//         "Construction and maintenance company website with simple front-end features.",
//       technologies: [
//         ...techStacks.frontend,
//         "Javascript",
//         ...techStacks.backend,
//         "MongoDB",
//         "Nginx",
//         "AWS (EC2, S3)",
//       ],
//       contributions: [
//         "Developed front-end with navbar, main content, footer, and multiple content pages.",
//         "Integrated APIs in React.",
//       ],
//     },
//     {
//       name: "Aevalona",
//       duration: "Feb 2022 – May 2022",
//       company: "LiquidLab Infosystems",
//       role: "Full Stack Developer",
//       description:
//         "SEO-friendly ecommerce website with admin dashboard, built using Next.js.",
//       technologies: [
//         ...techStacks.frontend,
//         "Next.js",
//         "Redux",
//         "jQuery",
//         ...techStacks.backend,
//         "MongoDB",
//         "Nginx",
//         "AWS (EC2, S3)",
//       ],
//       contributions: [
//         "Developed fully functional ecommerce website with SEO optimizations.",
//         "Integrated APIs and used Redux for state management.",
//         "All cart features, payment gatway, notifications recommendations, post order detailed schduled responses etc.",
//       ],
//     },
//   ],

// details: [
//   {
//     title: "Basil Resort",
//     description:
//       "It's a beautifull resort renting website with real-time schedule updating API.",
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
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
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Kenzo Realty",
//     description:
//       "It's a beautifull resort renting website with real-time schedule updating API.",
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
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
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Aavelona",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
//   {
//     title: "Aavelona",
//     description:
//       "It was an highly profestional e-commerce website.",
//     tech: "HTML, CSS, JS, React, Redux, GSAP Animations, MongoDB, AWS S3, AWS EC2 Instance for server",
//     myRole: "",
//     challenges: "designed from scratch by me, learned new technology Next JS, and was able to build a fully responsive website, worked on payment gateway backend api and implemented the same on frontend as well, used Redux for state management, deployed to production on AWS.",
//     outcome: "Created a fully responsive website, deployed to production as well",
//   },
// ],

// ✅ Projects data
