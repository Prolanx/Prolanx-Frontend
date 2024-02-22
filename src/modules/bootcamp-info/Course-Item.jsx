import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import CustomButton from "../../components/button/Custom-Button";
// import CustomHeading from "../../../../components/heading/Custom-Heading";
// import CustomButton from "../../../../components/button/Custom-Button";



function CourseItem({ data, ...props }) {
  return (
    <Box
      border=".5px solid #00000050"
      rounded="8px"
      p="30px"
      // w="378px"
      h="449px"
      {...props}
    >
      <Image h="215px" minW="310px" rounded="8px" mb="36px" bg="purple.400" src={data.image} objectFit="cover" />
      <CustomHeading title={data.title} fontSize="20px" mb="26px" w="355px" />
      <Flex mb="26px">
        <CustomButton title="Enroll now" />
      </Flex>
    </Box>
  );
}

export default CourseItem;
