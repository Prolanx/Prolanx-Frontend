import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import HorizontalAnimation from "../../../../components/other/HorizontalAnimation";
import techStack1 from "assets/tech-stack-1.png";
import techStack2 from "assets/tech-stack-2.png";
import CustomHeading from "../../../../components/heading/Custom-Heading";
import SectionWrapper from "../../../../components/other/SectionWrapper";
import useResponsive from "../../../../hooks/useResponsive";

function TechSection() {
  const media = useResponsive();
  return (
    <SectionWrapper px="0px">

      
       <Center>
          <CustomHeading
            title="Become a master in industry standard tools"
            // mb={media.isDesktop ? "50px": "20px"}
            fontSize={
              media.isDesktop ? "32px" : media.isTablet ? "32px" : "22px"
            }
            mb="50px"
          />
        </Center>

      <Box mb="50px">
        <HorizontalAnimation>
          <Flex>
            <Image
              src={techStack1}
              me={media.isMobile ? "20px" : "35px"}
              maxH={media.isDesktop && "100px"}
            />
            <Image src={techStack1} maxH={media.isDesktop && "100px"} />
          </Flex>
        </HorizontalAnimation>
      </Box>

      <HorizontalAnimation isRight={true}>
        <Flex>
          <Image
            src={techStack2}
            me={media.isMobile ? "20px" : "35px"}
            maxH={media.isDesktop && "100px"}
      
          />
          <Image src={techStack2} maxH={media.isDesktop && "100px" }  />
        </Flex>
      </HorizontalAnimation>
    </SectionWrapper>
  );
}

export default TechSection;