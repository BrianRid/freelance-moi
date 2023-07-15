import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
