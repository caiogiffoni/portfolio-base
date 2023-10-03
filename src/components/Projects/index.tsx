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
import interestcalculator from "../../../src/assets/projects/interest-calculator.png";
import cnbareader from "../../../src/assets/projects/cnba-reader.png";
import carregister from "../../../src/assets/projects/car-register.png";
import bikerides from "../../../src/assets/projects/bike-rides.png";
import youtube from "../../../src/assets/projects/youtube.png";
import riopredict from "../../../src/assets/projects/rio-predict.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export const Projects = () => {
  const { colorMode } = useColorMode();

  const control = useAnimation();
  const [ref, inView] = useInView();

  const PC = [
    {
      print: anchor,
      title: "Anchor",
      description:
        "API para hospedagem de eventos com várias regras de negócio e escopo diferenciado.",
      deploy: "https://anchor-tcm-m5.herokuapp.com/schema/swagger-ui/",
      github: "https://github.com/matheusprado1/anchor-tcm-m5",
      labels: ["Django", "DRestFramework", "Docker"],
    },
    {
      print: HDR,
      title: "Hora do Rango",
      description:
        "Aplicação para conectar clientes e cozinheiros. Foi um projeto feito em grupo desde a concepção até o término do MVP.",
      deploy: "https://capstone-m3-grupo-5.vercel.app/",
      github: "https://github.com/devadrianoabner/capstone-m3---grupo-5/",
      labels: ["React", "Chakra UI", "Yup"],
    },
    {
      print: youtube,
      title: "Youtube - Predict",
      description:
        "Aplicação para resumir de vídeos no youtube utilizando ChatGPT.",
      deploy: "https://summary-youtube.onrender.com/",
      github: "https://github.com/caiogiffoni/summary-youtube",
      labels: ["React", "Chakra UI", "ChatGPT"],
    },
    {
      print: riopredict,
      title: "Rio Predict - Analysis",
      description:
        "Análise e criação de modelo para previsão de preço para apartamentos do AirBnB no Rio de Janeiro.",
      deploy: "https://github.com/caiogiffoni/rio-predict-py",
      github: "https://github.com/caiogiffoni/rio-predict-py",
      labels: ["Pandas", "MatPlotLib", "Sklearn"],
    },
    {
      print: clientarchive,
      title: "Clients Archive",
      description:
        "Aplicação FullStack de cadastro, visualização, atualização e remoção de clientes.",
      deploy: "https://clients-archive-react-js.vercel.app/",
      github: "https://github.com/caiogiffoni/clients-archive",
      labels: ["ReactJs", "Typescript", "NodeJS"],
    },
    {
      print: doIt,
      title: "do.it",
      description:
        "Aplicação de lista de tarefas feita em ReactJs com styled components. Foi utilizado api externa.",
      deploy: "https://do-it-caiogiffoni-app.vercel.app/",
      github: "https://github.com/caiogiffoni/do-it-caiogiffoni-app",
      labels: ["ReactJs", "Styled Components"],
    },
    {
      print: hosteando,
      title: "Hosteando",
      description:
        "API para hospedagem de eventos com várias entidades e relação entre elas.",
      deploy: "https://capstonehostevents.github.io/Hosteando-Docs/",
      github: "https://github.com/CapstoneHostEvents/Hosteando",
      labels: ["NodeJS", "PostgreSQL", "TypeORM", "Docker"],
    },
    {
      print: crud,
      title: "CRUD - Usuários",
      description:
        "API de uma aplicação simples de cadastro, listagem, alteração e remoção de usuários.",
      deploy: "https://caiogiffoni.github.io/crud-user-caiogiffoni-doc/",
      github: "https://github.com/caiogiffoni/crud-user-caiogiffoni",
      labels: ["NodeJS", "PostgreSQL", "TypeORM", "Docker"],
    },
    {
      print: hub,
      title: "Kenzie Hub",
      description:
        "Aplicação frontend de cadastro de tecnologias, remoção e edição de tecnologias estudadas.",
      deploy: "https://kenzie-hub-navy.vercel.app/",
      github: "https://github.com/caiogiffoni/kenzie-hub",
      labels: ["ReactJs", "ChakraUI", "Yup"],
    },
    {
      print: stoic,
      title: "Stoic Quote Machine",
      description:
        "Aplicação frontend simples de citações de filósofos estoicos com botão para compartilhar no twitter.",
      deploy: "https://stoic-quote-machine-caio-giffoni.vercel.app/",
      github: "https://github.com/caiogiffoni/random-quote-machine",
      labels: ["ReactJs", "ChakraUI"],
    },
    {
      print: bandkamp,
      title: "BandKamp",
      description: "API para gerenciamento de discografia de artistas.",
      deploy: "https://band-kamp-caio.herokuapp.com/api/schema/swagger-ui/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-s6-bandkamp-caiogiffoni",
      labels: ["Django", "DRestFramework", "Docker"],
    },
    {
      print: kmdb,
      title: "MDB",
      description:
        "API para gerenciamento de filmes e reviews.",
      deploy: "https://kmdb-caio.herokuapp.com/api/docs/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint4-kmdb-caiogiffoni",
      labels: ["Django", "DRestFramework"],
    },
    {
      print: dollarstore,
      title: "Dollar Store",
      description: "API para gerenciamento de usuários e produtos.",
      deploy: "https://dollar-store-api.herokuapp.com/api/docs/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-caiogiffoni",
      labels: ["Django", "Django RestFramework"],
    },
    {
      print: interestcalculator,
      title: "Interest Calculator",
      description:
        "Aplicação frontend para cálculo de antecipação de pagamento.",
      deploy: "https://interest-calculator-ten.vercel.app/",
      github: "https://github.com/caiogiffoni/interest-calculator",
      labels: ["ReactJS", "Typescript"],
    },
    {
      print: cnbareader,
      title: "CNBA Reader",
      description:
        "API para upload de arquivos CNBA, parseamento, persistência no banco de dados e visualização das tabelas dividias por estabelecimentos.",
      deploy: "https://github.com/caiogiffoni/cnba-reader/blob/main/README.md/",
      github: "https://github.com/caiogiffoni/cnba-reader",
      labels: ["Django", "DRestFramework"],
    },
    {
      print: carregister,
      title: "Car Register",
      description:
        "Aplicação fullstack para registro de carros, incluindo CRUD completo.",
      deploy: "https://car-register-caio-giffoni.vercel.app/",
      github: "https://github.com/caiogiffoni/car-register",
      labels: ["React", "ChakraUI", "NodeJs", "TypeORM", "Docker"],
    },
    {
      print: bikerides,
      title: "Bike Rides",
      description:
        "Uma API para criação de pedais pelos usuários, outros usuários poderão visualizar e se inscrever neles para que possam pedalar em grupo.",
      deploy: "https://github.com/caiogiffoni/ride-api",
      github: "https://github.com/caiogiffoni/ride-api",
      labels: ["NodeJs", "TypeGraphQL", "Docker"],
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
      <Box
        as={motion.div}
        ref={ref}
        variants={boxVariant}
        animate={control}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="15px"
      >
        <Alert
          status="error"
          w={["80%", "80%", "80%", "80%", "60%"]}
          display="flex"
          flexDirection={["column", "row"]}
        >
          <AlertIcon />
          <AlertTitle>Os links do Heroku estão desativados!</AlertTitle>
          <AlertDescription>
            Devido ao cancelamento do plano gratuito do Heroku, alguns deploys
            estão desativados. Em breve serão implementadas outras soluções.
          </AlertDescription>
        </Alert>
      </Box>
      <HStack justify="center" mt="40px" w="100%">
        {/* <VStack spacing={5} w={["90%"]}>
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
        </VStack> */}
        <HStack
          spacing={5}
          w={["100%"]}
          flexWrap="wrap"
          justify="center"
          gap={5}
        >
          {PC.map((project, i) => (
            <ProjectCard
              print={project.print}
              title={project.title}
              description={project.description}
              deploy={project.deploy}
              github={project.github}
              key={i}
              labels={project.labels}
            />
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};
