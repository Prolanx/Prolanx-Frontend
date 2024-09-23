import * as design from "./design";

// import "../App.css";

export const fonts = {
  header: "nexa",
  text: "mont",
};

export const navItems = [
  "Home",
  "About",
  "Services",
  "Resources",
  "Contact us",
  "Login",
  "Bootcamp",
];

export const appLinks = {
  index: "/",
  home: "/home",
  contact: "/home/contact",
  about: "/about",
  services: "/services",
  bootcamp: "/bootcamp",
  bootcampInfo: "/bootcamp/info",
  bootcampList: "/bootcamp/collection",
  privacy: "/privacy",
  cookie: "/cookie",
  resources: "/resources",
  survey: "/survey"
};

export const routes = {
  ...appLinks,
  home: "/home/:section?",
  services: "/services/:section?",
  bootcampInfo: "/bootcamp/info/:id?",
  bootcampList: "/bootcamp/collection/:facultyId?",
};

export const navLinks = [
  { name: "Home", link: appLinks.index },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  // { name: "Resources", link: "/resources" },
  { name: "Contact", link: appLinks.contact },
  { name: "Bootcamp", link: "/bootcamp" },
];

export const routesAppend = {
  bootcampList: "/bootcamp/collection/",
  bootcampInfo: "/bootcamp/info/",
};

export const servicesSection = {
  academy: "academy",
  innovate: "innovate",
  hub: "hub",
  talent: "talent",
  insight: "insight",
};

import digitalDesign from "assets/digital-design.svg";
import cloudComputing from "assets/cloud-computing.svg";
import dataScience from "assets/data-science.svg";
import { courses as courseData } from "./course-data";
export { data as faqData } from "./faq.data";
export { internshipFaq } from "./faq.data";
// export { data } from './data';

export const faculty = {
  digitalDesign: {
    id: 1,
    title: "Digital Design and Multimedia",
    image: digitalDesign,
    url: routesAppend.bootcampList + 1,
  },
  dataScience: {
    id: 2,
    title: "Data Science and Analytics",
    image: dataScience,
    url: routesAppend.bootcampList + 2,
  },

  cloud: {
    id: 3,
    title: "Cloud Computing",
    image: cloudComputing,
    url: routesAppend.bootcampList + 3,
  },
};


export const courses = courseData 

export const internshipSummary = [
  { "message": "Core web development fundamentals (HTML5, CSS3, JavaScript basics)." },
  { "message": "Advanced JavaScript, DOM manipulation, and Git for collaboration." },
  { "message": "React fundamentals including component-based architecture, hooks, and state management." },
  { "message": "Advanced React concepts like Context API, routing, and performance optimization." },
  { "message": "Node.js and Express.js for building RESTful APIs." },
  { "message": "MongoDB and Mongoose for database operations and relationships." },
  { "message": "Fullstack integration with React and Node.js, and real-time applications using WebSockets." },
  { "message": "Advanced authentication, web security, and testing practices." },
  { "message": "DevOps essentials, including CI/CD, Docker, and cloud deployment." }
]

// export const courses = [
//   {
//     id: 1,
//     title: "Full Stack Web Development Bootcamp",
//     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
//     facultyId: faculty.digitalDesign.id,
//     image:
//       "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     overview: {
//       month1: {
//         title: "Fundamentals of Graphic Design",
//         weeks: {
//           week1: "Introduction to Graphic Design",
//           week2: "Color Theory and Typography",
//           week3: "Layout and Composition",
//           week4: "MVP 1 - Branding Basics",
//         },
//         message:
//           "In the journey of mastering graphic design, the first month is dedicated to building a strong foundation. You'll embark on understanding the essence of design, explore the intricate world of color and typography, dive deep into the art of composing layouts, and conclude with the crucial aspects of branding.",
//       },
//       month2: {
//         title: "Digital Design and Intermediate Projects",
//         weeks: {
//           week5: "Digital Illustration and Iconography",
//           week6: "User Interface Design Basics",
//           week7: "Introduction to User Experience",
//           week8: "MVP 2 - Digital Design Project",
//         },
//         message:
//           "Transitioning into the digital realm, the second month is dedicated to honing your skills in digital design and tackling intermediate projects. You'll delve into the intricacies of digital illustration and iconography, master the art of crafting user interfaces, understand the importance of user experience, and culminate the month with an exciting digital design project.",
//       },
//       month3: {
//         title: "Advanced Design Techniques and Final MVP",
//         weeks: {
//           week9: "Motion Graphics and Animation",
//           week10: "Packaging Design and Print Materials",
//           week11: "Portfolio Development",
//           week12: "MVP 3 - Comprehensive Brand Campaign",
//         },
//         message:
//           "As you approach the pinnacle of your design journey, the third month is dedicated to mastering advanced techniques and completing the final MVP project. You'll delve into the dynamic world of motion graphics and animation, tackle real-world challenges in packaging design and print materials, refine your portfolio, and conclude with an awe-inspiring comprehensive brand campaign.",
//       },
//     },
//   },

//   {
//     id: 4,
//     title: "Graphics Design Bootcamp",
//     desc: "Embark on a creative journey and unlock your full potential in the dynamic world of graphic design with our Graphic Design Bootcamp. Whether you're a beginner looking to dive into the fundamentals or an experienced designer aiming to refine your skills, this comprehensive course is designed to elevate your understanding of visual communication. Unleash your creativity, refine your technique, and launch your career as a confident and skilled graphic designer.",
//     facultyId: faculty.digitalDesign.id,
//     image:
//       "https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     overview: {
//       month1: {
//         title: "Fundamentals of Graphic Design",
//         weeks: {
//           week1: "Introduction to Graphic Design",
//           week2: "Color Theory and Typography",
//           week3: "Layout and Composition",
//           week4: "MVP 1 - Branding Basics",
//         },
//         message:
//           "In the journey of mastering graphic design, the first month is dedicated to building a strong foundation. You'll embark on understanding the essence of design, explore the intricate world of color and typography, dive deep into the art of composing layouts, and conclude with the crucial aspects of branding.",
//       },
//       month2: {
//         title: "Digital Design and Intermediate Projects",
//         weeks: {
//           week5: "Digital Illustration and Iconography",
//           week6: "User Interface Design Basics",
//           week7: "Introduction to User Experience",
//           week8: "MVP 2 - Digital Design Project",
//         },
//         message:
//           "Transitioning into the digital realm, the second month is dedicated to honing your skills in digital design and tackling intermediate projects. You'll delve into the intricacies of digital illustration and iconography, master the art of crafting user interfaces, understand the importance of user experience, and culminate the month with an exciting digital design project.",
//       },
//       month3: {
//         title: "Advanced Design Techniques and Final MVP",
//         weeks: {
//           week9: "Motion Graphics and Animation",
//           week10: "Packaging Design and Print Materials",
//           week11: "Portfolio Development",
//           week12: "MVP 3 - Comprehensive Brand Campaign",
//         },
//         message:
//           "As you approach the pinnacle of your design journey, the third month is dedicated to mastering advanced techniques and completing the final MVP project. You'll delve into the dynamic world of motion graphics and animation, tackle real-world challenges in packaging design and print materials, refine your portfolio, and conclude with an awe-inspiring comprehensive brand campaign.",
//       },
//     },
//   },

//   {
//     id: 5,
//     title: "UI UX Design",
//     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
//     facultyId: faculty.digitalDesign.id,
//     image:
//       "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
//     overview: {
//       month1: {
//         title: "Fundamentals of Graphic Design",
//         weeks: {
//           week1: "Introduction to Graphic Design",
//           week2: "Color Theory and Typography",
//           week3: "Layout and Composition",
//           week4: "MVP 1 - Branding Basics",
//         },
//         message:
//           "In the journey of mastering graphic design, the first month is dedicated to building a strong foundation. You'll embark on understanding the essence of design, explore the intricate world of color and typography, dive deep into the art of composing layouts, and conclude with the crucial aspects of branding.",
//       },
//       month2: {
//         title: "Digital Design and Intermediate Projects",
//         weeks: {
//           week5: "Digital Illustration and Iconography",
//           week6: "User Interface Design Basics",
//           week7: "Introduction to User Experience",
//           week8: "MVP 2 - Digital Design Project",
//         },
//         message:
//           "Transitioning into the digital realm, the second month is dedicated to honing your skills in digital design and tackling intermediate projects. You'll delve into the intricacies of digital illustration and iconography, master the art of crafting user interfaces, understand the importance of user experience, and culminate the month with an exciting digital design project.",
//       },
//       month3: {
//         title: "Advanced Design Techniques and Final MVP",
//         weeks: {
//           week9: "Motion Graphics and Animation",
//           week10: "Packaging Design and Print Materials",
//           week11: "Portfolio Development",
//           week12: "MVP 3 - Comprehensive Brand Campaign",
//         },
//         message:
//           "As you approach the pinnacle of your design journey, the third month is dedicated to mastering advanced techniques and completing the final MVP project. You'll delve into the dynamic world of motion graphics and animation, tackle real-world challenges in packaging design and print materials, refine your portfolio, and conclude with an awe-inspiring comprehensive brand campaign.",
//       },
//     },
//   },

//   {
//     id: 6,
//     title: "Data Analytics Bootcamp",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
//     facultyId: faculty.dataScience.id,
//     image:
//       "https://plus.unsplash.com/premium_photo-1661384118133-8f8b6eef9715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
//     overview: {
//       month1: {
//         title: "Fundamentals of Graphic Design",
//         weeks: {
//           week1: "Introduction to Graphic Design",
//           week2: "Color Theory and Typography",
//           week3: "Layout and Composition",
//           week4: "MVP 1 - Branding Basics",
//         },
//         message:
//           "In the journey of mastering graphic design, the first month is dedicated to building a strong foundation. You'll embark on understanding the essence of design, explore the intricate world of color and typography, dive deep into the art of composing layouts, and conclude with the crucial aspects of branding.",
//       },
//       month2: {
//         title: "Digital Design and Intermediate Projects",
//         weeks: {
//           week5: "Digital Illustration and Iconography",
//           week6: "User Interface Design Basics",
//           week7: "Introduction to User Experience",
//           week8: "MVP 2 - Digital Design Project",
//         },
//         message:
//           "Transitioning into the digital realm, the second month is dedicated to honing your skills in digital design and tackling intermediate projects. You'll delve into the intricacies of digital illustration and iconography, master the art of crafting user interfaces, understand the importance of user experience, and culminate the month with an exciting digital design project.",
//       },
//       month3: {
//         title: "Advanced Design Techniques and Final MVP",
//         weeks: {
//           week9: "Motion Graphics and Animation",
//           week10: "Packaging Design and Print Materials",
//           week11: "Portfolio Development",
//           week12: "MVP 3 - Comprehensive Brand Campaign",
//         },
//         message:
//           "As you approach the pinnacle of your design journey, the third month is dedicated to mastering advanced techniques and completing the final MVP project. You'll delve into the dynamic world of motion graphics and animation, tackle real-world challenges in packaging design and print materials, refine your portfolio, and conclude with an awe-inspiring comprehensive brand campaign.",
//       },
//     },
//   },
// ];

export default { ...design, appName: "Prolanx", navItems, navLinks };
