import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const TopSection = () => {
  return (
    <Container maxW="6xl" w="full">
      <Flex>
        <Box>
          <Image src="/logo.svg" alt="logo" />
        </Box>
        <Box>
          <Text>Qui sommes-nous ?</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default TopSection;
