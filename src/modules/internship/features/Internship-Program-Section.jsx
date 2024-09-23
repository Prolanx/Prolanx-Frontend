import React from "react";
import ProgramGrid from "../../../features/program/ProgramGrid";
import { Box, Center, Flex } from "@chakra-ui/react";
import SectionTitle from "../../../components/title/Section-Title";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";

function InternshipProgramSection() {
  return (
    <SectionWrapper2 py="80px">
      <Flex justifyContent="center">
        <SectionTitle title="Training Schedule" borderBottom="0px" mb="44px"  />
      </Flex>

      <ProgramGrid />
    </SectionWrapper2>
  );
}

export default InternshipProgramSection;
