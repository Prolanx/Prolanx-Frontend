import { Circle, Flex, Text, Icon, Box } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import { FiFile } from "react-icons/fi";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";

function NoBootcampSection() {
  const media = useResponsive();
  return (
    <Box>
      <Box h="1px" bg={colors.primaryGrad + "50"} mb="100px"></Box>
      <Flex flexDir="column" alignItems="center">
        <Circle bg="black" color="white" mb="30px">
          <Icon
            as={FiFile}
            fontSize={media.isDesktop ? "45px" : "30px"}
            m={media.isDesktop ? 7 : 5}
          />
        </Circle>

        <CustomHeading
          title="No Bootcamp Available"
          textAlign="center"
          fontSize={media.isMobile ? "25px" : "30px"}
          mb="20px"
        />
        <Text
          textAlign="center"
          fontSize={media.isMobile ? "15px" :  "20px"}
          w={media.isMobile ? "100%" : "80%"}
          fontFamily="mont"
        >
          There is no bootcamp yet in this faculty. Check back later. In the mean time, check out other falculties to
          discover available bootcamps
        </Text>
      </Flex>
    </Box>
  );
}

export default NoBootcampSection;
