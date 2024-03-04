import { Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ServiceContent from "./Service-Content";
import CustomHeading from "../../../components/heading/Custom-Heading";
import useResponsive from "../../../hooks/useResponsive";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";

function ServiceInfoSectionRegular({ heading, image, data }) {
  const media = useResponsive();
  return (
    <SectionWrapper2>
      <CustomHeading
        title={heading}
        mb={media.isMobile || media.isTablet ? "70px" : "126px"}
        fontSize={media.isMobile  ? "25px" : "32px"}
      />
      <SimpleGrid
        columns={media.isMobile || media.isTablet ? 1 : 2}
        // spacingX={"118px"}
        spacingX={"70px"}
      >
        <Flex justifyContent={media.isMobile || media.isTablet ? "center": "flex-start"}>
          <Image
            h={media.isMobile ? "180px" : media.isTablet ? "300px" : "495px"}
            w={media.isMobile  ? "180px": media.isTablet ? "300px" : "495px"}
            src={image}
          />
        </Flex>

        <ServiceContent data={data} type="right" mt="39px" textAlign={media.isMobile && "center"} />
      </SimpleGrid>
    </SectionWrapper2>
  );
}

export default ServiceInfoSectionRegular;
