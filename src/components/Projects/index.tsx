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
import stoic from "../../../src/assets/projects/stoic-quote.png";
import crud from "../../../src/assets/projects/crud-usuarios.png";
import hosteando from "../../../src/assets/projects/hosteando.png";
import anchor from "../../../src/assets/projects/anchor.png";
import bandkamp from "../../../src/assets/projects/bandkamp.png";
import kmdb from "../../../src/assets/projects/kmdb.png";
import dollarstore from "../../../src/assets/projects/dollarstore.png";
import clientarchive from "../../../src/assets/projects/client-archive.png";
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
        "Aplicação para conectar clientes e cozinheiros. Foi um projeto feito em grupo desde a concepção até o término do MVP. Utilizado uma api simples para suportar requisições",
      deploy: "https://capstone-m3-grupo-5.vercel.app/",
      github: "https://github.com/devadrianoabner/capstone-m3---grupo-5/",
    },
    {
      print: doIt,
      title: "do.it",
      description:
        "Aplicação de lista de tarefas feita em react com styled components. Foi utilizado api externa.",
      deploy: "https://do-it-caiogiffoni-app.vercel.app/",
      github: "https://github.com/caiogiffoni/do-it-caiogiffoni-app",
    },
    {
      print: hub,
      title: "Kenzie Hub",
      description:
        "Aplicação de cadastro de tecnologias, remoção e edição de tecnologias estudadas.  Foi utilizado api externa.",
      deploy: "https://kenzie-hub-navy.vercel.app/",
      github: "https://github.com/caiogiffoni/kenzie-hub",
    },
    {
      print: stoic,
      title: "Stoic Quote Machine",
      description:
        "Aplicação simples de citações de filósofos estoicos com botão para compartilhar no twitter.",
      deploy: "https://stoic-quote-machine-caio-giffoni.vercel.app/",
      github: "https://github.com/caiogiffoni/random-quote-machine",
    },
    {
      print: hosteando,
      title: "Hosteando",
      description:
        "API para hospedagem de eventos com várias entidades e relação entre elas. Foi utilizado NodeJs, Express e TypeORM.",
      deploy: "https://capstonehostevents.github.io/Hosteando-Docs/",
      github: "https://github.com/CapstoneHostEvents/Hosteando",
    },
    {
      print: crud,
      title: "CRUD - Usuários",
      description:
        "API de uma aplicação simples de cadastro, listagem, alteração e remoção de usuários.",
      deploy: "https://caiogiffoni.github.io/crud-user-caiogiffoni-doc/",
      github: "https://github.com/caiogiffoni/crud-user-caiogiffoni",
    },
    {
      print: anchor,
      title: "Anchor",
      description:
        "API para hospedagem de eventos com várias regras de negócio e escopo diferenciado. Foi utilizado Django, Django RestFramework e Docker.",
      deploy: "https://anchor-tcm-m5.herokuapp.com/schema/swagger-ui/",
      github: "https://github.com/matheusprado1/anchor-tcm-m5",
    },
    {
      print: bandkamp,
      title: "BandKamp",
      description:
        "API para gerenciamento de discografia de artistas. Foi utilizado Django, Django RestFramework e Docker.",
      deploy: "https://band-kamp-caio.herokuapp.com/api/schema/swagger-ui/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-s6-bandkamp-caiogiffoni",
    },
    {
      print: kmdb,
      title: "KMDB",
      description:
        "API para gerenciamento de filmes e reviews. Foi utilizado Django, Django RestFramework.",
      deploy: "https://kmdb-caio.herokuapp.com/api/docs/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint4-kmdb-caiogiffoni",
    },
    {
      print: dollarstore,
      title: "Dollar Store",
      description:
        "API para gerenciamento de usuários e produtos. Foi utilizado Django, Django RestFramework com Generics API.",
      deploy: "https://dollar-store-api.herokuapp.com/api/docs/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-caiogiffoni",
    },
    {
      print: clientarchive,
      title: "Clients Archive - FullStack",
      description:
        "Aplicação FullStack de cadastro, visualização, atualização e remoção de clients e contatos com registro, login autenticação e permissões diversas.",
      deploy: "https://clients-archive-react-js.vercel.app/",
      github: "https://github.com/caiogiffoni/clients-archive",
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

  const { colorWordsDesc, bgColor1 } = useColors();

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
              deploy={project.deploy}
              github={project.github}
              key={i}
            />
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};
