import React from "react";
import TeamWrapper from "../../../../features/teams/Team-Wrapper";

function TutorsSection() {
  const tutors = [
    { name: "Oluwatobi Akinwande", role: "Data Analytics" },
    { name: "Temitope Daramola", role: "Fullstack Web Development" },
    { name: "Isreal Adebayo", role: "Graphics Design" },
    // { name: "Ifeoluwa Adniji", role: "Motion Graphics & After-effects" },
  ];
  const title = "Learn live from experienced tutors";
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores veritatis accusamus rerum doloribus quae";
  return (
    <TeamWrapper heading={title} message={message} list={tutors} pb="50px" />
  );
}

export default TutorsSection;
