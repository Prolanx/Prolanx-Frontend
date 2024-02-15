import { Box, Flex, SimpleGrid, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import EnrollItem from "./Enroll-Item";
import CustomHeading from "../../../../components/heading/Custom-Heading";

import mentorshipIcon from "assets/mentorship.svg";
import portfolioIcon from "assets/portfolio.svg";
import agileIcon from "assets/agile.svg";
import indepthLearnIcon from "assets/indepth-learn.svg";
import useResponsive from "../../../../hooks/useResponsive";
import SectionWrapper from "../../../../components/other/SectionWrapper";
import SectionWrapper2 from "../../../../components/other/SectionWrapper2";

function EnrollSection() {
  const enrollList = [
    {
      title: "In-depth learning",
      message:
        "Our Students will gain a through understanding of the subject matter, trancending traditional education models to provide deep, practical knowledge base",
      image: indepthLearnIcon,
    },
    {
      title: "Mentorship",
      message:
        "Opportunities for individual sessions with instructors offer personalised guidance and support",
      image: mentorshipIcon,
    },
    {
      title: "Agile methodology training",
      message:
        "Our students will learn the agile methodology, an essential skill-set for modern work environments preparing them to adapt to various project management roles",
      image: agileIcon,
    },
    {
      title: "Portfolion and CV Building",
      message:
        "The mentorship session guide students in creating a professional portfolio and CV, essential tools for their career search",
      image: portfolioIcon,
    },
  ];
  const media = useResponsive();

  return (
    <SectionWrapper2 pb="50px">
      <Box>
        <CustomHeading
          title="Why Enroll with us"
          mb="40px"
          textAlign="center"
          fontSize={media.isDesktop ? "32px" : media.isTablet ? "30px" : "25px"}
        />
        <SimpleGrid columns={media.isDesktop ? 2 : 1} spacing="50px" pt="50px">
          {enrollList.map((item) => (
            <EnrollItem data={item} />
          ))}
        </SimpleGrid>
      </Box>
    </SectionWrapper2>
  );
}

export default EnrollSection;
