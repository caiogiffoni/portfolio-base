import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import caioLogo from "../../assets/caio-emoticon-removebg-preview-only-head.png";
import { useColors } from "../../provider/Colors";
import { HeaderLinkDesktop } from "./HeaderLinkDesktop";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorWordsStyle, colorWordsDesc, bgColor1 } = useColors();

  return (
    <HStack
      bgColor={bgColor1}
      h={["65px", "80px"]}
      w="100%"
      p={["0px 30px", "0px 80px"]}
      justify="space-between"
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
          w={["35px", "40px", "70px"]}
          borderRadius="32px"
        />
        <Heading fontSize={["18px", "22px"]} color={colorWordsStyle}>
          Caio Giffoni
        </Heading>
      </HStack>
      <HStack spacing={[2, 2, 3, 6]} display={["none", "none", "flex"]}>
        <IconButton
          aria-label="Dark mode"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="sm"
          onClick={toggleColorMode}
          mr="15px"
          color={colorWordsStyle}
        />
        <HeaderLinkDesktop to="#">Home</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#aboutme">Sobre</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#projects">Projetos</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#skills">Tecnologias</HeaderLinkDesktop>
        <HeaderLinkDesktop to="#contact">Contato</HeaderLinkDesktop>
      </HStack>
      <Box display={["block", "block", "none"]}>
        <IconButton
          aria-label="Dark mode"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="sm"
          onClick={toggleColorMode}
          mr="15px"
          color={colorWordsStyle}
        />

        <HeaderMenu />
      </Box>
    </HStack>
  );
};
