import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}
