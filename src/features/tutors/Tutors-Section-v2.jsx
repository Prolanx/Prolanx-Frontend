import React from "react";
import TeamWrapper from '../teams/Team-Wrapper';

function TutorsSection({tutors }) {
  const title = "Learn Live From Experienced Tutors";
  const message =
    "Elevate your learning with real-time guidance from expert tutors offering personalized support every step of the way.";
  return (
    <TeamWrapper heading={title} message={message} list={tutors} />
  );
}

export default TutorsSection;
