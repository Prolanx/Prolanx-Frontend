import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TeamCard from "./TeamCard";
import CustomHeading from "../../components/heading/Custom-Heading";
import SectionWrapper from "../../components/other/SectionWrapper";
import useResponsive from "../../hooks/useResponsive";

function TeamWrapper({ heading, message, list }) {
  const media = useResponsive();
  return (
    <SectionWrapper>
      <Flex flexDir="column" alignItems="center" textAlign="center">
        <CustomHeading
          title={heading}
          mb="44px"
          fontSize={media.isDesktop ? "32px" : "28px"}
          fontWeight="semibold"
        />

        <Text
          fontSize={media.isDesktop ? "22px" : media.isTablet ? "16px" : "14px"}
          fontFamily="mont"
          mb="44px"
          w={media.isDesktop || media.isTablet ? "70%" : "100%"}
          textAlign="center"
        >
          {message}
        </Text>
      </Flex>

      <Flex
        overflowX={!media.isDesktop && "scroll"}
        // flexWrap={media.isDesktop && "wrap"}
        // justifyContent="center"
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

    </SectionWrapper>
  );
}

export default TeamWrapper;
