import React, { useContext, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  Text,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link as RouterLink } from "react-router-dom";
import { BASE_URL } from "../util/vars"

const Login = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const toast = useToast();
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;
    if (!email || !password) {
      toast({
        title: "Email and Password Required",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      const result = await response.json();
      setAuth({
        isAuth: true,
        username: result.data.username,
        accessToken: result.accessToken,
      });
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("userId", result.data.userId);
      localStorage.setItem("email", result.data.email);
      toast({
        title: `${result.message}`,
        status: "success",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    }
    setState({
      email: "",
      password: "",
    });
  };

  return (
    <Flex align={"center"} justify={"center"} mt={"80px"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={0} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </FormControl>

            <Stack pt={4}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                width={"70%"}
                margin={"auto"}
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Stack>
                <Text align={"center"}>
                  Don't have account?{" "}
                  <Link as={RouterLink} color={"blue.400"} to="/register">
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export { Login };
