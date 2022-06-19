import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { HeaderLink } from "./HeaderLink";
import caioLogo from "../../assets/caio-emoticon-removebg-preview-only-head.png";
import { HeaderMenu } from "./HeaderMenu";
import { motion } from "framer-motion";
import { HeaderLinkDesktop } from "./HeaderLinkDesktop";

export const Header = () => {
  return (
    <HStack
      bgColor="blackPrimary"
      h={["65px", "80px"]}
      w="100%"
      p={["0px 30px", "0px 80px"]}
      justify="space-between"
      color="white"
      pt="12px"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <HStack
        as={motion.div}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src={caioLogo}
          w={["30px", "40px", "80px"]}
          borderRadius="32px"
        />
        <Heading fontSize={["18px", "24px"]} color="greenPrimary">
          Caio Giffoni
        </Heading>
      </HStack>
      <HStack spacing={[2, 2, 2, 6]} display={["none", "none", "flex"]}>
        <HeaderLinkDesktop to="#">Home</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#aboutme">Sobre</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#projects">Projetos</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#skills">Tecnologias</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#contact">Contato</HeaderLinkDesktop>
      </HStack>
      <Box display={["block", "block", "none"]}>
        <HeaderMenu />
      </Box>
    </HStack>
  );
};
