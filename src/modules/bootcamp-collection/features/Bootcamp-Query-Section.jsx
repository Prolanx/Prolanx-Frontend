import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CustomHeading from "../../../components/heading/Custom-Heading";
import BaseButton from "../../../components/button/BaseButton";

function BootcampQuerySection({ actions, faculty, faculties, search }) {
  const borderStyle = "1px solid " + colors.primaryGrad + "50";
  const media = useResponsive();

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
        <BaseButton
          rightIcon={null}
          title="All Courses"
          me="36px"
          bg={colors.accent}
          size="md"
          rounded="5px"
          fontSize="14px"
          minH="0px"
          onClick={() => actions.toggleCourse()}
        />

        <Box me="15px">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              bg="white"
              border={borderStyle}
              fontSize="14px"
            >
              Faculties
            </MenuButton>
            <MenuList>
              {Object.keys(faculties).map((item) => (
                <MenuItem
                fontSize="14px"
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

      <Flex
        alignItems="center"
        border={borderStyle}
        rounded={5}
        bg="white"
        pe={media.isMobile || media.isTablet ? "10px" : 5}
        w={media.isMobile || media.isTablet || media.isLaptop ? "100%" : "390px"}
        mt={media.isMobile || media.isTablet || media.isLaptop  ? "50px" : null}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search course"
            bg="transparent"
            focusBorderColor="transparent"
            border={"none"}
            onChange={(e) => search.onQueryChanged(e.target.value)}
            fontSize="14px"
            fontFamily="mont"
            value={search.query}
          />
        </InputGroup>

        <Icon as={FiX} cursor="pointer" onClick={search.reset} />
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
