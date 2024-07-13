import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Flex, Heading, Image, Input, Text, useToast } from "@chakra-ui/react";
import { CountryCard } from "../components/CountryCard";
import { DataContext } from "../context/DataContext";
const Home = () => {
  const [searchData, setSearchData] = useState("");

  const { dataList, setDataList, historyList, setHistoryList } =
    useContext(DataContext);

  const searchInputBox = useRef(null);
  const toast = useToast();

  useEffect(() => {
    searchInputBox.current.focus();
  }, []);
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  const fetchCountryData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Currency not found`);
      }
      const data = await response.json();
      toast({
        title: "Data fetched successfully",
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      setDataList(data);
    } catch (error) {
       toast({
        title: `${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    let id = null;
    if (searchData !== "") {
      id = setTimeout(() => {
        const newHistory = [...historyList];

        if (newHistory.length >= 5) {
          newHistory.pop();
        }
        newHistory.unshift(searchData);

        setHistoryList(newHistory);
        fetchCountryData(
          `https://restcountries.com/v3.1/currency/${searchData}`
        );
      }, 600);
    }
    return () => clearInterval(id);
  }, [searchData]);
  return (
    <>
      <Box
        width={'500px'}
        marginLeft={'25px'}
        mt={"80px"}
      >
        <Box w={{ base: "90%", md: "50%" }}>
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            ref={searchInputBox}
            value={searchData}
            onChange={handleChange}
          />
        </Box>
      </Box>
      {dataList.length == 0 ? (
        <Flex
          align={"center"}
          direction={"column"}
          justifyContent={"center"}
          mt={"20px"}
        >
          <Heading mb={"8px"} textColor={'white'} fontSize={'30px'} marginTop={'10px'}>Welcome To country App</Heading>
          <Image
            src="data:image/jpeg;base64,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"
            alt=""
            height={"500px"}
            borderRadius={'50px'}
            marginTop={'15px'}
          />
        </Flex>
      ) : (
        <Flex wrap={"wrap"} gap={"20px"} mt={"20px"} p={{base:"10px",md:"50px"}}>
          {dataList &&
            dataList.length > 0 &&
            dataList.map((item, index) => {
              return <CountryCard key={index} item={item} />;
            })}
        </Flex>
      )}
    </>
  );
};

export { Home };
