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
    "Meet the brilliant minds driving our mission forward. Our diverse team brings a wealth of experience and passion and unique talents that make us a powerhouse of creativity and collaboration";
    // Our diverse team of innovative thinkers 

  return <TeamWrapper heading={title} message={message} list={members} />;
}

export default TeamSection;
