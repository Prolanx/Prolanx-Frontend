
import React from "react";
import TeamWrapper from "./Team-Wrapper";

function TeamSection({ name, role, ...props }) {
  const members = [
    { name: "Oluwatobi Akinwande", role: "Founder, Strategy Team Lead" },
    { name: "Isreal Adebayo", role: "Legal, Designs & Marketing" },
    { name: "Temitope Daramola", role: "Fullstack Developer" },
  ];

  const title = "Our Team";
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores veritatis accusamus rerum doloribus quae";

  return <TeamWrapper heading={title} message={message} list={members} />;
}

export default TeamSection;
