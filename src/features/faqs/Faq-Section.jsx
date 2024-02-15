import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import FaqComponent from "./Faq-Component";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper from "../../components/other/SectionWrapper";
import CustomHeading from "../../components/heading/Custom-Heading";

function FaqSection({ hideTitle, ...props }) {
  const data = [
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
  ];

  const media = useResponsive();
  return (
    <SectionWrapper>
      {!hideTitle && (
        <CustomHeading
          title="FAQ"
          fontSize={media.isDesktop ? "32px" : "25px"}
          textAlign="center"
          mb="50px"
        />
      )}

      <Center>
        <FaqComponent data={data} />
      </Center>
    </SectionWrapper>
  );
}

export default FaqSection;
