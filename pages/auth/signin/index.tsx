import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React from "react";

export default function SignIn() {
  return (
    <Container>
      <Heading>Connexion</Heading>
      <Flex flexDir={"column"}>
        <Button onClick={() => signIn("google")}>Connexion avec Google</Button>
        <Divider w="full" my={5} />
      </Flex>
    </Container>
  );
}
