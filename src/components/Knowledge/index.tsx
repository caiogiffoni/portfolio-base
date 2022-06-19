import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Javascript from "../../assets/badge-cards/javascript.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";

export const Knowledge = () => {
  const BigScreen = "130px";
  const SmallScreen = "100px";

  const badges = [
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&style=plastic",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&style=plastic",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&style=plastic",
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&style=plastic",
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=plastic",
    "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&style=plastic",
    "https://img.shields.io/badge/-Chakra%20UI-5EC9CA?logo=chakra-ui&logoColor=white&style=plastic",
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white&style=plastic",
    /*"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&style=plastic",*/
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white&style=plastic",
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white&style=plastic",
  ];

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("initial").then((res) => control.start("visible"));
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const { colorWordsDesc, bgColor2 } = useColors();

  return (
    <Box
      id="skills"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor={bgColor2}
    >
      <HStack justify="center" mt="15px">
        <Heading color={colorWordsDesc}>Tecnologias</Heading>
      </HStack>
      <Flex w="100%" justify="center" align="center">
        <Flex
          p={["0px", "30px", "50px"]}
          w="80%"
          wrap="wrap"
          gap="18px"
          justify="center"
          mt="25px"
          mb="15px"
        >
          {badges.map((item, i) => {
            const boxVariant = {
              initial: {
                opacity: 0,
                translateX: i % 2 === 0 ? -70 : 70,
                translateY: -70,
              },
              visible: {
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: { duration: 0.7, delay: i * 0.3 },
              },
              hidden: { opacity: 0 },
            };

            return (
              <Box
                as={motion.div}
                animate={control}
                ref={ref}
                variants={boxVariant}
                key={i}
              >
                <Image w={[SmallScreen, BigScreen]} h="40px" src={item} />
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};
