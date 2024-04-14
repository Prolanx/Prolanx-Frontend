import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import TeamCard from "./TeamCard";
import CustomHeading from "../../components/heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function TeamWrapper({ heading, message, list, ...props }) {
  const media = useResponsive();
  return (
    <SectionWrapper2 {...props}>
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
          pos="relative"
          zIndex="500"
          justifyContent={
            media.isMobile ? "start" : media.isTablet ? "center" : "center"
          }
        >
          {media.isMobile ? (
            <React.Fragment>
              {list.map((item, index) => (
                <TeamCard
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  key={index}
                  me={index !== list.length - 1 ? "20px" : "50px"}
                  ms={index !== list.length - 1 && "50px"}
                />
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {list.map((item, index) => (
                <TeamCard
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  key={index}
                  me={index !== list.length - 1 && "20px"}
                />
              ))}
            </React.Fragment>
          )}
        </Flex>
      </Box>
    </SectionWrapper2>
  );
}

export default TeamWrapper;
