import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CourseItemWrapper from "../../../../features/course-item/Course-Item-Wrapper";
import FacultyItemWrapper from "../../../../features/course-item/Faculty-Item-Wrapper";
import useResponsive from "../../../../hooks/useResponsive";
import { routes } from "../../../../constants";

function FacultyItem({ data, ...props }) {
  const media = useResponsive();
  return (
    <FacultyItemWrapper data={data} {...props}>
      <Button
        as={Link}
        bg="black"
        color="white"
        mb="35px"
        to={data.url}
        size={media.isMobile ? "sm" : "md"}
      >
        Learn More
      </Button>
    </FacultyItemWrapper>
  );
}

export default FacultyItem;
