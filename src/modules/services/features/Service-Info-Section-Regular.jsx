import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import ServiceItemRight from "./Service-Item-Right";
import CustomHeading from "../../../components/heading/Custom-Heading";
import useResponsive from "../../../hooks/useResponsive";
import ServiceItemMobile from "./Service-Item-Mobile";

function ServiceInfoSectionRegular({ title, image, data }) {
  const media = useResponsive();
  return (
    <React.Fragment>
      <CustomHeading title={title} mb="34px" fontSize={media.isDesktop? "32px": "20px"} />
      <Flex flexDir={media.isDesktop ? "row" : "column"}>
        <Flex justifyContent={!media.isDesktop && "center"}>
          <Image
            h={media.isDesktop ? "500px" : "180px"}
            w={media.isDesktop ? "590px" : "200px"}
            src={image}
          />
        </Flex>

        <Box ms={media.isDesktop && "-90px"} mt={media.isDesktop ? "186px": "34px"}>
          {media.isDesktop ? (
            <ServiceItemRight
              title="Learn by doing with our learning experience"
              message="Prolanx Academy specializes in tech training for emerging technologies and digital transformation. The curriculum is AGILE-structured to stay current with industry trends, benefiting both individual learners and corporate clients. Partnerships with educational institutions and industry bodies enhance the program's credibility, offering recognized certifications and a competitive edge in the job market."
              btnText="Explore Our Faculties"
              type="right"
            />
          ) : (
            <ServiceItemMobile
              title="Learn by doing with our learning experience"
              message="Prolanx Academy specializes in tech training for emerging technologies and digital transformation. The curriculum is AGILE-structured to stay current with industry trends, benefiting both individual learners and corporate clients. Partnerships with educational institutions and industry bodies enhance the program's credibility, offering recognized certifications and a competitive edge in the job market."
              btnText="Explore Our Faculties"
              type="right"
            />
          )}
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export default ServiceInfoSectionRegular;
