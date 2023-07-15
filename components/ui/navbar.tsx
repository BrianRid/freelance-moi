import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useMediaQueryAdapter } from "../../utils/hooks/useMediaQuery";

interface HomeHeaderProps {
  user?: User | undefined;
}

const Navbar = (props: HomeHeaderProps) => {
  const { user } = props;
  const router = useRouter();
  const isLargerThan768 = useMediaQueryAdapter("(min-width: 768px)");

  return (
    <Box w="full">
      <Container maxW="6xl" w="full">
        <Flex w="100%" justifyContent={"space-between"}>
          <Image src="/logo.svg" alt="logo" />
          {user ? (
            <Avatar
              onClick={() => router.push("/profile/" + user.id)}
              src={user.image as string}
              size={["sm", "md"]}
              my={[1, 2, 2]}
            />
          ) : (
            <Button onClick={() => signIn("google")}>Sign in</Button>
          )}
        </Flex>
      </Container>
      <Divider my={4} w="full" />
    </Box>
  );
};

export default Navbar;
