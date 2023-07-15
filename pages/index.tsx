import { Box, Container, Spinner, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import React from "react";
import TopSection from "../components/homepage/topSection";
import AppContext from "../context/state";

const Home: NextPage = () => {
  const session = useSession();
  const { updateUser } = React.useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (session.status === "authenticated") {
      setIsLoggedIn(true);
    }
  }, [session]);

  const {
    data: user,
    error,
    isLoading,
  } = useSWR<User>(isLoggedIn ? "/api/user" : null, async (url) => {
    if (session.data) {
      if (!session.data.user?.id) return;

      const response = await fetcher(url + "?id=" + session.data.user?.id);
      return response;
    }
  });

  React.useEffect(() => {
    if (user) {
      updateUser(user);
    }
  }, [user]);

  if (isLoading) {
    return (
      <Container>
        <Spinner size={"xl"} />
      </Container>
    );
  }

  if (error) {
    return (
      <Box
        w="full"
        h="full"
        justifyItems={"center"}
        justifyContent={"center"}
        mx="auto"
      >
        <Text>Error</Text>
      </Box>
    );
  }

  return (
    <Box>
      <TopSection />
    </Box>
  );
};

export default Home;
