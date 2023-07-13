import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import React from "react";

const Home: NextPage = () => {
  const session = useSession();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<User>();

  React.useEffect(() => {
    if (session.status === "authenticated") {
      setIsLoggedIn(true);
    }
  }, [session]);

  const {
    data: user,
    error,
    isLoading,
  } = useSWR<User>("/api/user", async (url) => {
    const response = await fetcher(url);
    return response.data;
  });

  if (isLoading) {
    return (
      <Box
        w="full"
        h="full"
        justifyItems={"center"}
        justifyContent={"center"}
        mx="auto"
      >
        <Container>
          <Spinner size={"xl"} />
        </Container>
      </Box>
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
      <Container>
        <Heading>Home page</Heading>
        {!isLoggedIn && (
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        )}
        {session.status === "authenticated" && (
          <div>
            <p>Logged in as {session.data.user?.name}</p>
          </div>
        )}
      </Container>
    </Box>
  );
};

export default Home;
