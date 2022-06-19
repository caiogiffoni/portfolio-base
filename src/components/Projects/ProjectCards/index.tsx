import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ProjectCardsProps {
  title: string;
  description: string;
  github: string;
  vercel: string;
  print: string;
}

export const ProjectCard = ({
  title,
  description,
  github,
  vercel,
  print,
}: ProjectCardsProps) => {
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
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={boxVariant}
      animate={control}
      color="white"
      p={["20px 20px", "20px 30px", "20px 60px"]}
      borderRadius="20px"
      bgColor="blackSecondary"
      w="100%"
      maxW="1120px"
    >
      <Flex
        gap={8}
        justify="flex-start"
        align={["flex-start", "flex-start", "center"]}
        direction={["column", "column", "column", "row"]}
      >
        <Image
          src={print}
          alt="HDR"
          w={["310px", "310px", "310px", "310px", "410px"]}
        />
        <VStack align="flex-start" maxW="600px">
          <Heading fontSize={["25px", "30px"]}>{title}</Heading>
          <Text flexGrow="2" fontSize={["16px", "16px"]}>
            {description}
          </Text>
          <HStack spacing={8}>
            <Link
              target="_blank"
              to={{
                pathname: vercel,
              }}
            >
              <Button colorScheme="green">Visite</Button>
            </Link>
            <Link
              target="_blank"
              to={{
                pathname: github,
              }}
            >
              <Button colorScheme="green">
                Github
                <Icon as={AiFillGithub} ml="8px" />
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};
