import React from "react";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";
import { Box, Center, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../../../components/title/Section-Title";
import LinkButton from "../../../components/button/LinkButton";
import { colors } from "../../../constants/design";
import { FiCheck } from "react-icons/fi";
import useResponsive from "../../../hooks/useResponsive";

function InternshipLearnSection({ formLink, internshipSummary }) {
  const media = useResponsive();

  const CardItem = ({ message }) => {
    const bg = `${colors.accent}30`;
    const borderBottom = `1px solid ${colors.primary}`;
    return (
      <Flex
        alignItems="center"
        bg={bg}
        p={
          media.isMobile || media.isTablet
            ? "20px 10px"
            : media.isLaptop
            ? "20px 15px"
            : "20px 20px"
        }
        borderBottom={borderBottom}
      >
        <Box me="20px">
          <Center
            h={
              media.isMobile || media.isTablet || media.isLaptop
                ? "30px"
                : "50px"
            }
            w={
              media.isMobile || media.isTablet || media.isLaptop
                ? "30px"
                : "50px"
            }
            bg={colors.secondary}
            rounded="full"
          >
            <Icon
              as={FiCheck}
              color={colors.whiteText}
              // fontSize="35px"
              fontSize={
                media.isMobile || media.isTablet || media.isLaptop
                  ? "fit-content"
                  : "35px"
              }
              fontWeight="800"
            />
          </Center>
        </Box>

        <Heading fontFamily="mont" fontSize="13px" fontWeight="500">
          {message}
        </Heading>
      </Flex>
    );
  };

  return (
    <SectionWrapper2>
      <Flex justifyContent="center">
        <SectionTitle
          title="What you will learn "
          borderBottom="0px"
          mb="44px"
        />
      </Flex>
      <SimpleGrid
        columns={media.isMobile ? 1 : media.isTablet ? 2 : 3}
        spacingX={5}
        spacingY={5}
      >
        {internshipSummary.map((item, index) => (
          <CardItem message={item.message} key={index} />
        ))}
      </SimpleGrid>
      <Center>
        <LinkButton title="Enroll Now" mt="45px" to={formLink} />
      </Center>
    </SectionWrapper2>
  );
}

export default InternshipLearnSection;
