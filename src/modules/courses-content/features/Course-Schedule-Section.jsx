import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CourseInfoComponent from "../component/Course-Info-Component";

import ProgramItem from "../../../features/Program-Item";
import { programList } from "../../../constants/program.data";
import useResponsive from "../../../hooks/useResponsive";
function CourseScheduleSection() {
  const media = useResponsive();
  return (
    <CourseInfoComponent
      title="Schedule"
      subTitle="Live Classes and Mentorship"
      message="The Full Stack Web Development course at Prolanx Academy spans 6 months,
    starting with 3 months of intensive training followed by 3 months of
    mentor-led project work. Initial training includes weekly sprints and
    live sessions, focusing on core web development skills. In the latter
    half, students undertake capstone projects, fostering team collaboration
    and individual expertise. This structure ensures a balance of
    theoretical knowledge and practical application, culminating in a
    professional portfolio."
    >
      <Flex flexDir={media.isDesktop ? "row" : "column"}>
        {programList.map((item, index) => (
          <React.Fragment key={index}>
            {index !== programList.length - 1 && <ProgramItem data={item} />}
          </React.Fragment>
        ))}
      </Flex>
    </CourseInfoComponent>
  );
}

export default CourseScheduleSection;
