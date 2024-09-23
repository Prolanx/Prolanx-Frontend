import React from "react";
import ChooseUsItem from "./Choose-Us-Item";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { colors } from "../../constants/design";

import useResponsive from "../../hooks/useResponsive";
import SectionTitle from "../../components/title/Section-Title";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function ChooseUsSection({ options, title, icons, ...props }) {
  const media = useResponsive();

  return (
    <SectionWrapper2
      background={colors.primaryBg}
      // zIndex="300" pos="relative"
      {...props}
    >
      <Box>
        <Flex justifyContent={media.isLargeScreen && "start"}>
          <SectionTitle
            name={title}
            mb="60px"
            color={colors.whiteText}
            borderBottom={"1px solid " + colors.accent + "50"}
          />
        </Flex>
        <SimpleGrid
          spacingX={"25px"}
          columns={
            media.isMobile ? 1 : media.isTablet ? 2 : media.isLaptop ? 3 : 4
          }
        >
          {options.map((item) => (
            <ChooseUsItem data={item} icons={icons} />
          ))}
        </SimpleGrid>
      </Box>
    </SectionWrapper2>
  );
}

export default ChooseUsSection;
