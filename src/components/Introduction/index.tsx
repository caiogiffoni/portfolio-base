import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Lottie from "react-lottie";
import computerBoy from "../../assets/lootie-boy-computer.json";
import computerBoyBlue from "../../assets/lootie-boy-computer-blue.json";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";

export const Introduction = () => {
  const { colorMode } = useColorMode();
  const { colorWordsStyle, colorWordsDesc, bgColor1 } = useColors();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: colorMode === "light" ? computerBoyBlue : computerBoy,
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariantLeft = {
    visible: {
      x: [-200, 0],
      opacity: [0, 1],
      transition: { duration: 2, ease: "linear" },
    },
    hidden: { opacity: 0 },
  };

  const boxVariantRight = {
    visible: {
      x: [200, 0],
      opacity: [0, 1],
      transition: { duration: 2, ease: "linear" },
    },
    hidden: { opacity: 0 },
  };

  return (
    <Box
      w="100%"
      p={["10px 20px", "10px 20px", "50px 120px"]}
      bgColor={bgColor1}
      color={colorWordsDesc}
    >
      <Flex
        justify="space-around"
        direction={["column", "column", "row"]}
        align="center"
        w="100%"
      >
        <VStack
          as={motion.div}
          ref={ref}
          variants={boxVariantLeft}
          animate={control}
          p={["0px", "30px", "50px"]}
          w={["80%", "80%", "50%"]}
          mt={["30px", "40px", "50px"]}
          align={["flex-start"]}
        >
          <Heading fontSize={["30px", "35px", "40px"]}>
            Olá, mundo! Meu nome é
          </Heading>
          <Heading fontSize={["35px", "42px", "48px"]} color={colorWordsStyle}>
            Caio Giffoni
          </Heading>
          <Text fontSize={["12px", "14px", "16px"]}>
            Desenvolvedor Frontend
          </Text>
          <HStack spacing={5} color={colorWordsStyle}>
            <Box
              as={motion.div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={{ pathname: "https://www.linkedin.com/in/caiocgfg" }}
                target="_blank"
              >
                <Icon boxSize="30px" as={AiFillLinkedin} />
              </Link>
            </Box>
            <Box
              as={motion.div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={{ pathname: "https://github.com/caiogiffoni" }}
                target="_blank"
              >
                <Icon boxSize="30px" as={AiFillGithub} />
              </Link>
            </Box>
          </HStack>
        </VStack>
        <Box
          as={motion.div}
          ref={ref}
          variants={boxVariantRight}
          animate={control}
          w={["250px", "300px", "400px"]}
        >
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
    </Box>
  );
};
