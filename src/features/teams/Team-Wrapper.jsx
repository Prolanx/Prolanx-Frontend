import { Flex, Text, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TeamCard from "./TeamCard";
import CustomHeading from "../../components/heading/Custom-Heading";
import SectionWrapper from "../../components/other/SectionWrapper";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function TeamWrapper({ heading, message, list }) {
  const media = useResponsive();
  return (
    <SectionWrapper2>
      <Box minW="100%">
        <Flex flexDir="column" alignItems="center" textAlign="center">
          <CustomHeading
            title={heading}
            mb="44px"
            fontSize={media.isDesktop ? "32px" : "28px"}
            fontWeight="semibold"
          />

          <Text
            fontSize={
              media.isDesktop ? "22px" : media.isTablet ? "16px" : "14px"
            }
            fontFamily="mont"
            mb={"44px"}
            w={media.isDesktop || media.isTablet ? "70%" : "100%"}
            textAlign="center"
          >
            {message}
          </Text>
        </Flex>

        <Flex
          overflowX={media.isMobile || media.isTablet ? "scroll" : "inherit"}
          w="100%"
      
       
          // overflowX="inherit"
          justifyContent={
            media.isMobile ? "start" : media.isTablet ? "start" : "center"
          }
        >
          {list.map((item, index) => (
            <TeamCard
              name={item.name}
              role={item.role}
              key={index}
              me={index !== list.length - 1 && "20px"}
            />
          ))}
        </Flex>
      </Box>
    </SectionWrapper2>
  );
}

export default TeamWrapper;
