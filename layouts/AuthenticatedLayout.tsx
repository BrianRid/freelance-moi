import { ReactNode, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex">
      <Box>{children}</Box>
    </Box>
  );
};

export default PublicLayout;
