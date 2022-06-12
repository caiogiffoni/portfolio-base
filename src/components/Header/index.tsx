import { HStack, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <HStack
      bgColor="black"
      h="72px"
      w="100vw"
      p="0px 60px"
      justify="space-between"
      color="white"
    >
      <Text color="#41DA78">Caio Giffoni</Text>
      <HStack spacing={6}>
        <HeaderLink to="#quemsomos">Home</HeaderLink>
        <HeaderLink to="#quemsomos">Sobre</HeaderLink>
        <HeaderLink to="#quemsomos">Skills</HeaderLink>
        <HeaderLink to="#quemsomos">Qualification</HeaderLink>
        <HeaderLink to="#quemsomos">Porfolio</HeaderLink>
        <HeaderLink to="#quemsomos">Contato</HeaderLink>
      </HStack>
    </HStack>
  );
};
