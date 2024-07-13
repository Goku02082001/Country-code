import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CountryCard } from "../components/CountryCard";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Favourite = () => {
  const { favoriteList } = useContext(DataContext);

  return (
    <Box mt={"80px"}>
      <Heading textAlign={"center"}>Favorites</Heading>
      <Flex
        wrap={"wrap"}
        gap={"20px"}
        mt={"20px"}
        p={{ base: "10px", md: "50px" }}
      >
        {favoriteList.map((item, index) => {
          return <CountryCard key={index} item={item} />;
        })}
      </Flex>
    </Box>
  );
};

export { Favourite };
