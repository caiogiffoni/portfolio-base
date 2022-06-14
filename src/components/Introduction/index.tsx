import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import computerBoy from "../../assets/lootie-boy-computer.json";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Introduction = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: computerBoy,
  };
  return (
    <Box
      w="100%"
      p={["10px 20px", "10px 20px", "50px 120px"]}
      bgColor="#212121"
      color="#41DA78"
    >
      <Flex
        justify="space-around"
        direction={["column", "column", "row"]}
        align="center"
        w="100%"
      >
        <VStack
          p={["0px", "30px", "50px"]}
          w={["80%", "80%", "50%"]}
          mt={["30px", "40px", "50px"]}
          align={["flex-start"]}
        >
          <Heading fontSize={["30px", "35px", "40px"]} color="white">
            Olá, mundo! Meu nome é
          </Heading>
          <Heading fontSize={["35px", "42px", "48px"]}>Caio Giffoni</Heading>
          <Text color="white" fontSize={["12px", "14px", "16px"]}>
            Desenvolvedor Fullstack
          </Text>
          <HStack spacing={5}>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/caiocgfg" }}
              target="_blank"
            >
              <Icon boxSize="30px" as={AiFillLinkedin} />
            </Link>
            <Link
              to={{ pathname: "https://github.com/caiogiffoni" }}
              target="_blank"
            >
              <Icon boxSize="30px" as={AiFillGithub} />
            </Link>
          </HStack>
        </VStack>
        <Box w={["250px", "300px", "400px"]}>
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
    </Box>
  );
};
