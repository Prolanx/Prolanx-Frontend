import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CourseTopicItem from "./Course-Topic-Item";

function CourseTopicSection({ data }) {
  const media = useResponsive();
  return (
    <Box px={"20px"} py="20px"  >
      <Text fontSize="16px" fontFamily="mont" mb={"30px"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        error iure natus mollitia beatae fugit aut recusandae eveniet
        exercitationem. Minima.
      </Text>

      <CourseTopicItem />
      <CourseTopicItem />
      <CourseTopicItem />
      <CourseTopicItem />

    </Box>
  );
}

export default CourseTopicSection;
