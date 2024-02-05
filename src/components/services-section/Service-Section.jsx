import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import ServiceItem from "./Service-Item";
import ServiceItemIndex from "./Service-Item-Index";
import SectionTitle from "../title/Section-Title";

function ServiceSection() {
  const serviceOptions = [
    {
      title: "Empowering the Digital Age",
      message:
        "Delivering innovative workspaces, expert talent recruitment and advanced research to navigate the fast evolving digital world",
      link: null,
    },
    {
      title: "Prolanx Academy",
      message:
        "Specialized training programs in specialized emerging technologies and digital transformation, designed with an AGILE structure to stay current with industry trends",
      link: "link",
    },
    {
      title: "Prolanx Innovate",
      message:
        "Development of innovative digital products to address specific market needs, fostering a collaborative environment for creativity",
      link: "link",
    },
    {
      title: "Prolanx Hub",
      message:
        "State-of-the art co-working spaces designed for startups, freelancers and small teams equipped with advanced technology",
      link: "link",
    },
    {
      title: "Prolanx Talent",
      message:
        "Expert IT recruitment services to bridge the gap between top-tier digital talent and companies in need",
      link: "link",
    },
    {
      title: "Prolanx Insights",
      message:
        "Cutting edge research in tech trends contributing significantly to the global digital transformation discourse",
      link: "link",
    },
  ];


  
  const checkDivision = (number) => {
    let increment = number + 1;
    if (increment % 3 === 0)  return true
    return false
  }

  const checkBorderStatus = (number) => {


    // if(number === 3) return true;

    return checkDivision(number)
  }
  return (
    <Box p="80px 120px" >
      <SectionTitle name="Our Services" color={colors.black} mb="66px" />
      <SimpleGrid columns={3}>
        {serviceOptions.map((item, index) => (
          <React.Fragment>
             
            {index === 0 ? (
              <ServiceItemIndex data={item}  />
            ) : (
              <ServiceItem data={item} isHideBorder={checkBorderStatus(index) }  isBorderTop={index > 2 && true}/>
            )}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ServiceSection;
