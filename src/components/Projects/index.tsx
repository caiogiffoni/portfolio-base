import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import CodeReview from "../../assets/code-review-black-theme.svg";
import CodeReviewLight from "../../assets/code-review-light-theme.svg";
import { ProjectCard } from "./ProjectCards";
import HDR from "../../../src/assets/projects/hora-do-rango-capstone.png";
import doIt from "../../../src/assets/projects/do-it-caio-giffoni.png";
import hub from "../../../src/assets/projects/kenzieHub.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";

export const Projects = () => {
  const { colorMode } = useColorMode();

  const control = useAnimation();
  const [ref, inView] = useInView();

  const PC = [
    {
      print: HDR,
      title: "Hora do Rango",
      description:
        "Aplicação para conectar clientes e cozinheiros. Foi um projeto feito em grupo desde a concepção até o término do MVP. Feito em Chakra UI. ",
      vercel: "https://capstone-m3-grupo-5.vercel.app/",
      github: "https://github.com/devadrianoabner/capstone-m3---grupo-5/",
    },
    {
      print: doIt,
      title: "do.it",
      description:
        "Aplicação de lista de tarefas feita em react com styled components.",
      vercel: "https://do-it-caiogiffoni-app.vercel.app/",
      github: "https://github.com/caiogiffoni/do-it-caiogiffoni-app",
    },
    {
      print: hub,
      title: "Kenzie Hub",
      description:
        "Aplicação de cadastro de tecnologias, remoção e edição de tecnologias estudadas.",
      vercel: "https://kenzie-hub-navy.vercel.app/",
      github: "https://github.com/caiogiffoni/kenzie-hub",
    },
  ];

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const { colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 } = useColors();

  return (
    <Box
      id="projects"
      w="100%"
      p={["20px 20px", "20px 20px", "80px 120px"]}
      bgColor={bgColor1}
      color={colorWordsDesc}
    >
      <Heading textAlign="center">Projetos</Heading>
      <Flex
        as={motion.div}
        ref={ref}
        variants={boxVariant}
        animate={control}
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
        mt="40px"
        gap={20}
      >
        <Text
          fontSize={["20px", "25px", "30px"]}
          w={["80%", "40%"]}
          order={["2", "2", "1"]}
        >
          Alguns dos meus projetos estão abaixo:
        </Text>
        <Image
          src={colorMode === "light" ? CodeReviewLight : CodeReview}
          w={["220px", "300px"]}
          order={["1", "1", "2"]}
        />
      </Flex>
      <HStack justify="center" mt="40px" w="100%">
        <VStack spacing={5} w={["90%"]}>
          {PC.map((project, i) => (
            <ProjectCard
              print={project.print}
              title={project.title}
              description={project.description}
              vercel={project.vercel}
              github={project.github}
              key={i}
            />
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};
