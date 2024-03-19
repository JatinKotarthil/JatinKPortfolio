import {
  mobile,
  backend,
  web,
  sql,
  javascript,
  html,
  css,
  cpp,
  c,
  cs,
  reactjs,
  python,
  linux,
  net,
  nodejs,
  git,
  java,
  docker,
  sppu,
  cdac,
  lancers,
  linkdin,
  project,
  optic
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MySQL Database",
    icon: sql,
  },
];

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: cs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MYSQL",
    icon: sql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: ".NET CORE",
    icon: net,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    company_name: "CDAC",
    icon: cdac,
    iconBg: "#383E56",
    date: "Sep 2023 - Feb 2024",
    points: [
      "Graduated with distinction, achieving a remarkable 78.88% in PG-DAC from CDAC. Ready to leverage this strong academic background and practical skills to drive impactful solutions in the IT landscape.",
    ],
  },
  {
    title: "MASTER OF SCIENCE (PHYSICS)",
    company_name: "SPPU",
    icon: sppu,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Apr 2023",
    points: [
      "Upon completion of my MSc in Physics, I have gained a profound understanding of the fundamental principles that govern the universe. Through rigorous coursework, hands-on laboratory experiments, and theoretical exploration, I have delved deep into topics ranging from quantum mechanics and electromagnetism to astrophysics and Solid State Physics",
    ],
  },
  {
    title: "IPR-INVESTIGATOR",
    company_name: "Lancers Networks PVT. LTD.",
    icon: lancers,
    iconBg: "#383E56",
    date: "Mar 2022 - Aug 2023",
    points: [
      "As an IPR investigator at Lancers Risk Consulting. I played a vital role in safeguarding intellectual property rights within high-risk regions specifically Maharashtra, Gujarat and Goa. Leveraging the firm's established principles of integrity and confidentiality since its inception in 1980 .I contributed to value addition through diligent and effective investigation practices."
      ,
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Code, Commit, Collaborate: Empowering Innovation on GitHub",
    name: "Git Hub",
    designation: "Click",
    company: "https://github.com/JatinKotarthil",
    image: git,
  },
  {
    testimonial:
      "Let's connect and discuss how we can collaborate.",
    name: "What's App",
    designation: "Call",
    company: "9579049364",
    image: mobile,
  },
  {
    testimonial:
      "Unlocking Opportunities Together: Let's Link(din) for Success!",
    name: "Linkdin",
    designation: "Click",
    company: "https://www.linkedin.com/in/kotarthiljatin/",
    image: linkdin,
  },
];

const projects = [
  {
    name: "OM TRADERS: HOME APPLIANCES SHOP MANAGEMENT SYSTEM",
    description:
      "Led the design and implementation of a robust Home Appliances Shop Management System for Om Traders in Nashik, enhancing order processing, after-sales management, and customer interactions. Utilized SpringBoot for backend development, MySQL for the database, and React for the frontend to optimize operational efficiency and deliver a seamless shopping experience. Successfully implemented features for efficient product catalog management and order fulfillment, contributing to increased customer satisfaction and overall business growth. Collaborated within a dynamic team to develop a scalable solution tailored for the retail sector",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Java EE (SpringBoot)",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/JatinKotarthil/omTradersCDAC-SpringBoot-React.git",
  },
  {
    name: "SCIENCE FORMULA CALCULATOR USING PYTHON PROGRAMMING LANGUAGE BY JATIN KOTARTHIL",
    description:
      "Through an intuitive user interface, the application offers a comprehensive collection of science formulas and equations across multiple disciplines. Users, including students, professionals, and Science enthusiasts, can easily access and utilize these formulas to solve intricate problems, perform experiments, and validate hypotheses.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Anaconda",
        color: "green-text-gradient",
      },
      {
        name: "Kivy",
        color: "pink-text-gradient",
      },
    ],
    image: optic,
    source_code_link: "https://github.com/JatinKotarthil/ScienceFormulaCalculatorUsingPython",
  },{
    name: "OM TRADERS: HOME APPLIANCES SHOP MANAGEMENT SYSTEM",
    description:
      "Led the design and implementation of a robust Home Appliances Shop Management System for Om Traders in Nashik, enhancing order processing, after-sales management, and customer interactions. Utilized SpringBoot for backend development, MySQL for the database, and React for the frontend to optimize operational efficiency and deliver a seamless shopping experience. Successfully implemented features for efficient product catalog management and order fulfillment, contributing to increased customer satisfaction and overall business growth. Collaborated within a dynamic team to develop a scalable solution tailored for the retail sector",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Java EE (SpringBoot)",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/JatinKotarthil/omTradersCDAC-SpringBoot-React.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
