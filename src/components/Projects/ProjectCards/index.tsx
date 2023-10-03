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

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../../provider/Colors";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { ListFormat } from "typescript";

interface ProjectCardsProps {
  title: string;
  description: string;
  github: string;
  deploy: string;
  print: string;
  labels: Array<string> | undefined;
}

export const ProjectCard = ({
  title,
  description,
  github,
  deploy,
  print,
  labels,
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

  const { colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 } = useColors();

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={boxVariant}
      animate={control}
      color={colorWordsDesc}
      bgColor={bgColor2}
      p={["10px 10px", "10px 15px", "20px 25px"]}
      borderRadius="20px"
      w={["100%", "80%", "50%", "45%", "24%"]}
      maxW="1120px"
      h="560px"
    >
      <Flex
        gap={8}
        justify="space-between"
        align={["center", "center", "center"]}
        direction={["column"]}
        h="100%"
      >
        <VStack>
          <Box bgColor={bgColor1} borderRadius={20}>
            <Image
              src={print}
              alt="HDR"
              w={["310px", "310px", "310px", "310px", "410px"]}
              // boxSize="250px"
              h="240px"
              objectFit="contain"
            />
          </Box>
          {labels && (
            <HStack flexWrap="wrap" gap={2} justifyContent="flex-start">
              {labels.map((lab) => (
                <Tag
                  key={lab}
                  size="sm"
                  variant="solid"
                  bgColor={colorWordsStyle}
                  color={bgColor1}
                >
                  {lab}
                </Tag>
              ))}
            </HStack>
          )}
        </VStack>
        <VStack align="flex-start" maxW="600px">
          <Heading fontSize={["15px", "20px"]}>{title}</Heading>
          <Box flexGrow="2" minH="100px">
            <Text fontSize={["12px", "14px"]} align="justify">
              {description}
            </Text>
          </Box>
          <HStack spacing={8}>
            <Link
              target="_blank"
              to={{
                pathname: deploy,
              }}
            >
              <Button
                bgColor={colorWordsStyle}
                color={bgColor1}
                _hover={{
                  background: bgColor1,
                  color: colorWordsStyle,
                }}
              >
                Visite
              </Button>
            </Link>
            <Link
              target="_blank"
              to={{
                pathname: github,
              }}
            >
              <Button
                bgColor={colorWordsStyle}
                color={bgColor1}
                _hover={{
                  background: bgColor1,
                  color: colorWordsStyle,
                }}
              >
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
