import React from 'react'
import TeamWrapper from '../../../../features/teams/Team-Wrapper'

function TutorsSection() {
    const tutors = [
        { name: "Oluwatobi Akinwande", role: "Founder, Strategy Team Lead" },
        { name: "Temitope Daramola", role: "Fullstack Developer" },
        { name: "Isreal Adebayo", role: "Legal, Designs & Marketing" },
        { name: "Ifeoluwa Adniji", role: "Motion Graphics & After-effects" },
      ];
      const title = "Learn Live from expericnecd tutors"
      const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores veritatis accusamus rerum doloribus quae"
  return (
    <TeamWrapper heading={title} message={message} list={tutors} py="80px"/>
      

  )
}

export default TutorsSection
