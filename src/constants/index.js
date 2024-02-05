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

export const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  // { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
  { name: "Bootcamp", link: "/bootcamp" },
];

export const routesAppend = {
  bootcampList: "/bootcamp/list/",
  bootcampInfo: "/bootcamp/info/",
};

export const servicesSection = {
  academy: "academy",
  innovate: "innovate",
  hub: "hub",
  talent: "talent",
  insight: "insight",
  
};

export const routes = {
  home: "/",
  about: "/about",
  services: "/services?/:section",
  bootcamp: "/bootcamp",
  bootcampInfo: "/bootcamp/info/:id",
  bootcampList: "/bootcamp/list/:facultyId",
  privacy: "/privacy",
  cookie: "/cookie",
  resources: "/resources",
};




import digitalDesign from "assets/digital-design.svg";
import cloudComputing from "assets/cloud-computing.svg";

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
    image: cloudComputing,
    url: routesAppend.bootcampList + 2,
  },

  cloud: {
    id: 3,
    title: "Cloud Computing",
    image: cloudComputing,
    url: routesAppend.bootcampList + 3,
  },
};

export const courses = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
    facultyId: faculty.digitalDesign.id,
    image: "",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Web Development Bootcamp",
    desc: "In this Front-End Web Development - Complete Guide (Step by Step) [Updated 2023] you will learn complete front-end web development from scratch. As part of the course, You will learn complete HTML5, and CSS3 step by step. Later you will learn how to use, integrate or add user interactivity with the help of JavaScript. This course also covers the latest JavaScript version which is ECMA Script learn the modern JavaScript techniques with ECMA Script 6 or later. The next big step would be to learn Bootstrap 5 which is the latest and the most popular CSS framework available. Here you will learn to create 3 Live Projects. In the 1st project, you will learn to create an EMS Web App also known as Employee Management System. 2nd the project we will see how to create a full blog for beginners to Advanced Levels. For the 3rd project, you will create a professional website. Once you have completed Bootstrap 5 the next topic would be to get started with Angular. In the Angular Topic, you will learn the beginner’s level to integrate angular to any HTML5 and CSS3 App. Then with the help of React JS, we will see how to build a Scratch Pad App from Beginner to Advanced level. After that you will learn about Create React App tool, used to build React applications. With the help of Bootstrap 5, you will learn to build a Practical web application with React.",
    facultyId: faculty.digitalDesign.id,
    image: "",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
  {
    id: 3,
    title: "Backend Web Development Bootcamp",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
    facultyId: faculty.digitalDesign.id,
    image: "",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
  {
    id: 4,
    title: "Graphics Design Bootcamp",
    desc: "Embark on a creative journey and unlock your full potential in the dynamic world of graphic design with our Graphic Design Bootcamp. Whether you're a beginner looking to dive into the fundamentals or an experienced designer aiming to refine your skills, this comprehensive course is designed to elevate your understanding of visual communication. Unleash your creativity, refine your technique, and launch your career as a confident and skilled graphic designer.",
    facultyId: faculty.digitalDesign.id,
    image:
      "https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
  {
    id: 5,
    title: "Motion Graphics and Animation",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
    facultyId: faculty.digitalDesign.id,
    image: "",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
  {
    id: 6,
    title: "Business Analytics Bootcamp",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
    facultyId: faculty.dataScience.id,
    image: "",
    overview: [
      {
        title: "Month 1",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 2",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 3",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
      {
        title: "Month 4",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsum minus amet voluptatibus, qui voluptates, sed sint error at nisi rem sunt nam unde ipsa delectus molestiae sit, eveniet iusto.",
      },
    ],
  },
];

export default { ...design, appName: "Prolanx", navItems, navLinks };
