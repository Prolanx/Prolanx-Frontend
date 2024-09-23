import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../../../components/title/Section-Title";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";
import { colors } from "../../../constants/design";
import womanOnLaptop from "assets/woman-on-laptop.png";
import getIntoProgram1 from "assets/get-into-program-1.png";
import getIntoProgram2 from "assets/get-into-program-2.png";
import useResponsive from '../../../hooks/useResponsive';

function GetIntoInternship() {


  const media = useResponsive();
  const stages = [
    {
      title: "Registration",
      message:
        "Did you meet the requirements for this Programme? Click on the Enrol Now Button to register",
    },
    {
      title: "Assessment",
      message:
        "Successful candidate will be contacted to take a competence based test",
    },
    {
      title: "Interview",
      message:
        "Successful candidate will be invited for a final stage  one-on-one virtual interview",
    },
    {
      title: "Onboarding",
      message:
        "Final candidates would be onboarded on the Internship programme for the next 12 weeks project focused training within the Agile Environment",
    },
  ];

  const SmallImage = ({ ...props }) => {
    return (
      <Image
        bg="red.200"
        w="263px"
        h="284px"
        rounded="16px"
        objectFit="cover"
        objectPosition="center"
        {...props}
      />
    );
  };

  const LargeImage = ({ ...props }) => {
    return (
      <Image
        bg="red.200"
        w="263px"
        h="572px"
        rounded="16px"
        objectFit="cover"
        objectPosition="center"
        {...props}
      />
    );
  };

  const checkIsEven = (number) => {
    return number % 2 === 0;
  };

  const GetIntoItem = ({
    count,
    title,
    message,
    checkIsEven,
    isFirst,
    isLast,
    ...props
  }) => {
    const bb = "1px solid #04619B";

    const colorEven = "#48E1E520";
    const colorOdd = "#E9F5F6";
    const isEven = checkIsEven(count);

    return (
      <Flex
        p="20px"
        alignItems="center"
        borderBottom={!isLast && bb}
        fontFamily="mont"
        bg={isEven ? colorEven : colorOdd}
        borderTopRightRadius={isFirst && "8px"}
        borderTopLeftRadius={isFirst && "8px"}
        borderBottomRightRadius={isLast && "8px"}
        borderBottomLeftRadius={isLast && "8px"}
        {...props}
      >
        <Box>
          <Center me="20px" bg={colors.accent} h="56px" w="56px" rounded="full">
            <Text fontFamily="mont" fontSize="24px" m="20px">
              {count}
            </Text>
          </Center>
        </Box>
        <Box>
          <Heading
            fontSize="20px"
            mb="10px"
            fontFamily="mont"
            fontWeight="bold"
            color={isEven ? colors.primary : colors.black}
          >
            {title}
          </Heading>
          <Text
            fontSize="14px"
            fontFamily="mont"
            color={isEven ? colors.primary : colors.black}
          >
            {message}
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <SectionWrapper2 py="90px">

      <SectionTitle
        name="How to get into the programme"
        w="30%"
        lineHeight="50px"
        borderBottom={"0px"}
      />

      <Flex alignItems="flex-end">
        <Box me="49px" w="50%">
          {stages.map((item, index) => (
            <GetIntoItem
              count={index + 1}
              title={item.title}
              message={item.message}
              checkIsEven={checkIsEven}
              isFirst={index === 0 ? true : false}
              isLast={index === stages.length - 1 ? true : false}
            />
          ))}
        </Box>


{(!media.isMobile && !media.isTablet) && (
   <SimpleGrid columns={2} spacingX="6px" w="50%">
   <Box>
     <SmallImage mb="5px" src={getIntoProgram1} />
     <SmallImage src={getIntoProgram2} />
   </Box>
   <LargeImage src={womanOnLaptop} />
 </SimpleGrid>
) }
     
      </Flex>
    </SectionWrapper2>
  );
}

export default GetIntoInternship;
