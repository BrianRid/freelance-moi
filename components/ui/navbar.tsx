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
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQueryAdapter } from "../../utils/hooks/useMediaQuery";

interface HomeHeaderProps {
  user?: User | undefined;
}

const Navbar = (props: HomeHeaderProps) => {
  const { user } = props;
  const router = useRouter();
  const isLargerThan768 = useMediaQueryAdapter("(min-width: 768px)");

  const displayMenu = () => {
    if (user) {
      return [
        {
          label: "Ma communauté",
          href: "/community",
        },
        {
          label: "Mes missions",
          href: "/missions",
        },
        {
          label: "Elargir mon réseau",
          href: "/network",
        },
      ];
    } else {
      return [
        {
          label: "Qui sommes nous ?",
          href: "/about",
        },
        {
          label: "Nos missions",
          href: "/missions",
        },
        {
          label: "Nous rejoindre",
          href: () => signIn("google"),
        },
      ];
    }
  };

  return (
    <Box w="full">
      <Container maxW="6xl" w="full">
        <Flex w="100%" justifyContent={"space-between"} py={[1, 3, 3]}>
          <Image src="/logo.svg" alt="logo" />
          {displayMenu().map((item, index) => (
            <Link
              key={index}
              href={typeof item.href === "string" ? item.href : ""}
            >
              <Button
                variant="ghost"
                color="black"
                fontSize={["sm", "md", "lg"]}
                fontWeight="normal"
              >
                {item.label}
              </Button>
            </Link>
          ))}
          {user ? (
            <Avatar
              onClick={() => router.push("/profile/" + user.id)}
              src={user.image as string}
              size={["sm", "md"]}
              cursor="pointer"
              _hover={{
                border: "1px solid #FFFFFF",
                shadow: "md",
              }}
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
