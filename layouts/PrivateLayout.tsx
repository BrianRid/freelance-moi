import { ReactNode, useState, useEffect, useContext } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";
import AppContext from "../context/state";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AppContext);

  console.log("ici");

  return (
    <Box>
      <Navbar user={user} />
      <Box>{children}</Box>
    </Box>
  );
};

export default PrivateLayout;
