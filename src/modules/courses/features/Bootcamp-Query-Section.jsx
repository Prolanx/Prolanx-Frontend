import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CustomHeading from "../../../components/heading/Custom-Heading";

function BootcampQuerySection({ actions, faculty }) {
  const borderStyle = "1px solid " + colors.primaryGrad + "50";

  const media = useResponsive();
  return (
    <Flex
      justifyContent="space-between"
      mb={media.isMobile ? "20px" : "50px"}
      flexDir={media.isDesktop ? "row" : "column"}
    >
      <Flex alignItems="center" fontFamily="mont">
        <Button me="36px" size="sm" onClick={() => actions.toggleCourse()}>
          All Courses
        </Button>
        <Button
          me="15px"
          size="sm"
          rightIcon={<FiChevronRight />}
          onClick={actions.toggleFaculties}
        >
          Falculties
        </Button>
        {!media.isMobile && <Text fontSize="14px">{faculty?.title}</Text>}
      </Flex>

      <Flex justifyContent={media.isTablet && "center"} >
        <InputGroup w="390px" mt={!media.isDesktop && "50px"}>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="search bootcamp" bg="white" border={borderStyle} />
        </InputGroup>
      </Flex>
      {media.isMobile && <CustomHeading title={faculty?.title} fontWeight="600" mt="30px" fontSize="16px"/>}
    </Flex>
  );
}

export default BootcampQuerySection;
