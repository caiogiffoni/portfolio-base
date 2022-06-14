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

export const AboutMe = () => {
  return (
    <Box
      id="aboutme"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor="#262626"
      color="#41DA78"
    >
      <Flex justify="center" align="center" mt="20px">
        <Heading color="white">Sobre</Heading>
      </Flex>
      <Flex
        justify="center"
        align="center"
        w="100%"
        direction={["column", "column", "row"]}
        gap={10}
        mt="20px"
      >
        <Box bgColor="#60d88c" borderRadius="25px" w={["200px", "280px"]}>
          <Image src={Caio} />
        </Box>
        <Box p={["0px", "30px", "50px"]} w={["80%", "80%", "50%"]}>
          <Text color="white" fontSize={["15px", "18px"]}>
            Desenvolvedor FrontEnd, estudando backend, formado em engenharia
            civil com MBA em gerenciamento de projetos. Após alguns anos na
            construção civil, decidi assumir um novo desafio e mergulhar no
            mundo do desenvolvimento web. Sempre fui fascinado pelas
            possibilidades que a tecnologia proporciona: diminuição de
            fronteiras, economia de recursos e automatização de sistemas e
            processos.
          </Text>
          <Button color="white" bgColor="#41DA78" m="15px 0px">
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
      </Flex>
    </Box>
  );
};
