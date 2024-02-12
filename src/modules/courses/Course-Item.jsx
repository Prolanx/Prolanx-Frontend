import { Button } from "@chakra-ui/react";
import React from "react";
import CourseItemWrapper from "../../features/course-item/Course-Item-Wrapper";
import { Link } from "react-router-dom";
import { routesAppend } from "../../constants";

function CourseItem({ data }) {
  return (
    <CourseItemWrapper data={data}>
      {/* this should be wrapped in a link */}
      <Button mb="36px" as={Link} to={routesAppend.bootcampInfo + data.id}>
        Enroll now
      </Button>
    </CourseItemWrapper>
  );
}

export default CourseItem;

{
  /* <Box
      border={borderStyle}
      rounded="8px"
      p={media.isDesktop ? "20px" : media.isTablet ? "20px" : "10px"}
      //  w="378px"

      maxH="450px"
      mb={!media.isDesktop && "35px"}
      {...props}
    >
      <Image
        h="215px"
        // w={media.isDesktop ? "310px" : "100%"}
        w={"100%"}
        rounded="8px"
        mb="36px"
        bg="purple.400"
        src={data.image}
        objectFit="cover"
      />
      <CustomHeading title={data.title} fontSize="20px" mb="26px" />

      <Button mb="36px"> Enroll now </Button>
    </Box> */
}
