 
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Error404 from "../assets/error.webp";

const Error = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"20px"}
      mt={24}
      mb={16}
      p={4}
      bgGradient="linear(to-r, #7928CA, #FF0080)"
      borderRadius="lg"
      boxShadow="xl"
      color="white"
    >
      <Box textAlign="center">
        <Image src={Error404} w={{ base: "90%", md: "45%" }} mb={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Oops! Page not found.
        </Text>
        <Text mb={4}>
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </Text>
      </Box>
      <NavLink to={"/"}>
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          leftIcon={<ArrowBackIcon />}
          _hover={{ bg: "teal.500", transform: "scale(1.05)" }}
          transition="0.3s"
        >
          Go back to Homepage
        </Button>
      </NavLink>
    </Flex>
  );
};

export { Error };
