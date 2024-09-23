import React from "react";
import { programList } from "../../constants/program.data";
import ProgramItem from "../Program-Item";
import useResponsive from "../../hooks/useResponsive";
import { SimpleGrid } from '@chakra-ui/react';

function ProgramGrid({ ...props }) {
  const media = useResponsive();
  return (
    <SimpleGrid
      columns={media.isMobile ? 1 : media.isTablet || media.isLaptop ? 2 : 4}
      {...props}
    >
      {programList.map((item) => (
        <ProgramItem data={item} />
      ))}
    </SimpleGrid>
  );
}

export default ProgramGrid;
