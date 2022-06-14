import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";

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
  return (
    <Box
      color="white"
      p={["20px 20px", "20px 30px", "20px 60px"]}
      borderRadius="20px"
      bgColor="#212121"
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
