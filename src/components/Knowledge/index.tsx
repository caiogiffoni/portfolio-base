import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { useColors } from "../../provider/Colors";
import { CardKnowledge } from "./Card";
import { stackData } from "../../utils/stackData";

export const Knowledge = () => {
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
                return (
                  <CardKnowledge
                    key={i}
                    title={stack.title}
                    icon={stack.img}
                    i={i}
                  />
                );
              })}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
