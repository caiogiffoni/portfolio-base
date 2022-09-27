import { Box, Flex, Heading, HStack } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useColors } from "../../provider/Colors";
import { CardKnowledge } from "./Card";
import { stackData } from "../../utils/stackData";

export const Knowledge = () => {

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
    <>
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
            wrap="wrap"
            gap="18px"
            justify="center"
            mt="25px"
            mb="15px"
          >
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={5}>
              {stackData.map((stack, i) => {
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
                    <CardKnowledge
                      key={i}
                      title={stack.title}
                      icon={stack.img}
                    />
                  </Box>
                );
              })}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
