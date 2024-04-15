import React from "react";
import TeamWrapper from "../../../../features/teams/Team-Wrapper";
import teamIsreal from "assets/team-israel.webp"
import teamTobi from "assets/team-tobi.png"

function TutorsSection() {
  const tutors = [
    { name: "Oluwatobi Akinwande", role: "Agile Training",  image: teamTobi  },
    { name: "Isreal Adebayo", role: "Graphics Design",  image: teamIsreal },
    // { name: "Temitope Daramola", role: "Fullstack Web Development",  image: teamTobi },
    // { name: "Ifeoluwa Adniji", role: "Motion Graphics & After-effects" },
  ];
  const title = "Learn Live From Experienced Tutors";
  const message =
    " Elevate your learning with real-time guidance from expert tutors offering personalized support every step of the way.";
  return (
    <TeamWrapper heading={title} message={message} list={tutors}  />
  );
}

export default TutorsSection;
