import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { SimpleGrid } from "@chakra-ui/react";

function BootcampDisplayWrapper({ children }) {
  const media = useResponsive();
  return (
    <React.Fragment>
      {!media.isMobile ? (
        <SimpleGrid
          columns={media.isTablet ? 2 : 3}
          spacingX="30px"
          spacingY="40px"
        >
          {/* {data.map((item) => (
          <CourseItem data={item} key={item.id} />
        ))} */}
          {children}
        </SimpleGrid>
      ) : (
        <React.Fragment>
          {children}
          {/* {data.map((item) => (
          <CourseItem data={item} key={item.id} />
        ))} */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default BootcampDisplayWrapper;
