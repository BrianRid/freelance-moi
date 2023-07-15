import { Box, Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";

const ProfilePage = () => {
  const router = useRouter();
  const id = router.query.id;
  const {
    data: user,
    isLoading,
    error,
  } = useSWR(`/api/user?id=${id}`, fetcher);

  if (isLoading) {
    return (
      <Box>
        <Spinner size={"xl"} />
      </Box>
    );
  }
  if (error) {
    return (
      <Container
        minH="100vh"
        maxW="2xl"
        py={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading>Aie... Un problème est survenu </Heading>
      </Container>
    );
  }

  return (
    <Box>
      <Container maxW="2xl" py={2}>
        <Heading>Bienvenu, {user?.name}</Heading>
        <Flex></Flex>
      </Container>
    </Box>
  );
};

export default ProfilePage;
