import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import get_all_users from "./api/users";

export const getServerSideProps = async () => {
  const users = await get_all_users();
  return {
    props: {
      users: users,
    },
  };
};

const Home: NextPage = (props) => {
  const { users } = props;
  console.log(users);
  return (
    <Flex h="100vh" w="100vw" bgColor="gray.100" flexDir="row">
      <Heading mx="auto" justifySelf="center">
        Freelance-moi
      </Heading>
    </Flex>
  );
};

export default Home;
