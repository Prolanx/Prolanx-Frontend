import React from "react";
import TeamWrapper from "./Team-Wrapper";

import teamIsreal from "assets/team-israel.webp"
import teamTobi from "assets/team-tobi.png"
import teamTope from "assets/team-tope.jpg"

function TeamSection({ name, role, ...props }) {
  const members = [
    { name: "Oluwatobi Akinwande", role: "Founder, Strategy Team Lead", image: teamTobi},
    { name: "Isreal Adebayo", role: "Legal, Designs & Marketing", image: teamIsreal },
    { name: "Temitope Daramola", role: "Fullstack Developer", image: teamTope },

  ];

  const title = "Our Team";
  const message =
    "Meet the minds driving our mission forward. Our team brings a wealth of experience, passion & unique talents that make us a powerhouse of creativity and collaboration";
    // Our diverse team of innovative thinkers 

  return <TeamWrapper heading={title} message={message} list={members} />;
}

export default TeamSection;
