import React from "react";
import TeamWrapper from "../../../../features/teams/Team-Wrapper";

function TutorsSection() {
  const tutors = [
    { name: "Oluwatobi Akinwande", role: "Data Analytics" },
    { name: "Temitope Daramola", role: "Fullstack Web Development" },
    { name: "Isreal Adebayo", role: "Graphics Design" },
    // { name: "Ifeoluwa Adniji", role: "Motion Graphics & After-effects" },
  ];
  const title = "Learn Live From Experienced Tutors";
  const message =
    " Elevate your learning with real-time guidance from expert tutors offering personalized support every step of the way.";
  return (
    <TeamWrapper heading={title} message={message} list={tutors} pb="50px" />
  );
}

export default TutorsSection;
