import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import ServiceItemRight from "./Service-Item-Right";
import CustomHeading from "../../../components/heading/Custom-Heading";
import SectionWrapper from "../../../components/other/SectionWrapper";
import useResponsive from "../../../hooks/useResponsive";
import ServiceItemMobile from "./Service-Item-Mobile";

function ServiceInfoSectionAlternate({ title, image, sideOverlayBg }) {
  const media = useResponsive();
  return (
    <Box p="0px" pos="relative">
      <Box
        display={media.isDesktop ? "block" : "none"}
        h="100%"
        w="41%"
        bg={sideOverlayBg}
        pos="absolute"
        right="0px"
      ></Box>

      <SectionWrapper>
        <CustomHeading
          title={title}
          fontSize="32px"
          mb="34px"
          textAlign={media.isDesktop && "end"}
          pos="relative"
          color={media.isDesktop && "white"}
          zIndex="5000"
        />
        <Flex>
          <Box>
            {media.isDesktop ? (
              <ServiceItemRight
                title="Learn by doing with our learning experience"
                message="Prolanx Academy specializes in tech training for emerging technologies and digital transformation. The curriculum is AGILE-structured to stay current with industry trends, benefiting both individual learners and corporate clients. Partnerships with educational institutions and industry bodies enhance the program's credibility, offering recognized certifications and a competitive edge in the job market."
                btnText="Explore Our Faculties"
                type="left"
              />
            ) : (
              <ServiceItemMobile
                title="Learn by doing with our learning experience"
                message="Prolanx Academy specializes in tech training for emerging technologies and digital transformation. The curriculum is AGILE-structured to stay current with industry trends, benefiting both individual learners and corporate clients. Partnerships with educational institutions and industry bodies enhance the program's credibility, offering recognized certifications and a competitive edge in the job market."
                btnText="Explore Our Faculties"
                type="left"
              />
            )}
          </Box>

          <Box
            pos="relative"
            ms="-50px"
            mt="180px"
            display={media.isDesktop ? "block" : "none"}
          >
            <Image h="500px" w="590px" src={image} />
          </Box>
        </Flex>
      </SectionWrapper>
    </Box>
  );
}

export default ServiceInfoSectionAlternate;
