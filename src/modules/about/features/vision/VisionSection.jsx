import React from "react";
import SectionWrapper from "components/other/SectionWrapper";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/react";
import aboutVision from "assets/about-vision.svg";
import { colors } from "../../../../constants/design";
import { FiLogIn } from "react-icons/fi";
import useResponsive from "../../../../hooks/useResponsive";
import SectionWrapper2 from "../../../../components/other/SectionWrapper2";

import { scroller } from "react-scroll";

function VisionSection({ data, handleScroll }) {
  const media = useResponsive();

  return (
    <SectionWrapper2>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mb="22px"
        pb="22px"
      >
        <Heading
          mb="22px"
          fontSize="32px"
          color={colors.black}
          fontFamily="nexa"
        >
          {data.title}
        </Heading>
        <Text fontSize="20px" color={colors.black} fontFamily="mont">
          {data.subTitle}
        </Text>
      </Flex>

      <Flex
        flexDir={media.isMobile || media.isTablet ? "column" : "row"}
        alignItems="center"
   
      >
        <Image
          me={media.isMobile || media.isTablet ? "0px" : "80px"}
          mb={!media.isDesktop && "50px"}
          mt="21px"
          src={aboutVision}
          h={media.isTablet ? "300px" : media.isMobile ? "250px" : "auto"}
          w={media.isTablet ? "300px" : media.isMobile ? "250px" : "auto"}
        />
        <Flex justifyContent="center" mt="22px">
          <Box maxW="586px" fontFamily="mont">
            {data.message.map((item) => (
              <Text mb="36px">{item.data}</Text>
            ))}
            <Button
              bg="none"
              border="1px solid #00000050"
              h="51px"
              mt={media.isDesktop && "30px"}
              rightIcon={<FiLogIn />}
              onClick={()=> handleScroll("contact-section")}
            >
              Get in touch with us
            </Button>
          </Box>
        </Flex>
      </Flex>
    </SectionWrapper2>
  );
}

export default VisionSection;
