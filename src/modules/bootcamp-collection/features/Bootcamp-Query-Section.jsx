import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Text,
  Box,
  Icon,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiChevronRight, FiSearch, FiX } from "react-icons/fi";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CustomHeading from "../../../components/heading/Custom-Heading";

function BootcampQuerySection({ actions, faculty, faculties, search }) {
  const borderStyle = "1px solid " + colors.primaryGrad + "50";
  const media = useResponsive();

  const customStyles = {
    // Style the dropdown container
    control: (provided) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      border: "1px solid #E2E8F0",
    }),
  };
  return (
    <Flex
      justifyContent={
        media.isMobile || media.isTablet ? "flex-start" : "space-between"
      }
      alignItems={media.isTablet && "center"}
      mb={media.isMobile ? "20px" : "50px"}
      flexDir={media.isDesktop ? "row" : "column"}
    >
      <Flex alignItems="center" fontFamily="mont">
        <Button me="36px" size="sm" onClick={() => actions.toggleCourse()}>
          All Courses
        </Button>

        <Box me="15px">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              bg="white"
              border={borderStyle}
            >
              Faculties
            </MenuButton>
            <MenuList>
              {Object.keys(faculties).map((item) => (
                <MenuItem
                  onClick={() => actions.toggleCourse(faculties[item].id)}
                >
                  {faculties[item].title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        {media.isMobile || media.isTablet ? null : (
          <Text fontSize="14px">{faculty?.title}</Text>
        )}
      </Flex>

      <Flex>
        <Flex
          alignItems="center"
          border={borderStyle}
          rounded={5}
          bg="white"
          pe={5}
          w="390px"
        >
          <InputGroup mt={!media.isDesktop && "50px"}>
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search course"
              bg="white"
              focusBorderColor="transparent"
              border={"none"}
              onChange={(e) => search.onQueryChanged(e.target.value)}
              value={search.query}
            />
          </InputGroup>

          <Icon as={FiX} cursor="pointer" onClick={search.reset} />
        </Flex>
      </Flex>
      {media.isMobile && (
        <CustomHeading
          title={faculty?.title}
          fontWeight="600"
          mt="30px"
          fontSize="16px"
        />
      )}
    </Flex>
  );
}

export default BootcampQuerySection;
