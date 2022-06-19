import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Caio from "../../assets/Caio_Giffoni__Corte_-removebg-about-me.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";
export const AboutMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: {
      y: [100, 50, 0],
      opacity: [0, 0.5, 1],
      transition: { duration: 2, ease: "linear" },
    },
    hidden: { opacity: 0 },
  };

  const { colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 } = useColors();

  return (
    <Box
      id="aboutme"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor={bgColor2}
      color={colorWordsDesc}
    >
      <Flex
        as={motion.div}
        ref={ref}
        variants={boxVariant}
        animate={control}
        justify="center"
        align="center"
        mt="20px"
      >
        <Heading>Sobre</Heading>
      </Flex>
      <Flex
        as={motion.div}
        ref={ref}
        variants={boxVariant}
        animate={control}
        justify="center"
        align="center"
        w="100%"
        direction={["column", "column", "row"]}
        gap={10}
        mt="20px"
      >
        <Box
          bgColor={colorWordsStyle}
          borderRadius="25px"
          w={["200px", "280px"]}
        >
          <Image src={Caio} />
        </Box>
        <Box p={["0px", "30px", "50px"]} w={["80%", "80%", "50%"]}>
          <Text fontSize={["15px", "18px"]}>
            Desenvolvedor FrontEnd, estudando backend, formado em engenharia
            civil com MBA em gerenciamento de projetos. Após alguns anos na
            construção civil, decidi assumir um novo desafio e mergulhar no
            mundo do desenvolvimento web. Sempre fui fascinado pelas
            possibilidades que a tecnologia proporciona: diminuição de
            fronteiras, economia de recursos e automatização de sistemas e
            processos.
          </Text>
          <Box
            as={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button bgColor={colorWordsStyle} color={bgColor1} m="15px 0px">
              <Link
                target="_blank"
                to={{
                  pathname:
                    "https://www.dropbox.com/s/6svsp53qheyfgn6/Curr%C3%ADculo_Caio%20Giffoni%20F%20G%2020220324.pdf?dl=0",
                }}
              >
                Download CV
                <Icon as={TriangleDownIcon} />
              </Link>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
