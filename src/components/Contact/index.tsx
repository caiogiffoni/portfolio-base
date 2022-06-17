import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <Box
      id="contact"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor="#212121"
      color="#41DA78"
    >
      {" "}
      <VStack spacing={10}>
        <HStack justify="center" mt="15px">
          <Heading color="white">Contato</Heading>
        </HStack>
        <VStack>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/caiocgfg" }}
            target="_blank"
          >
            <HStack
              as={motion.div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon boxSize="30px" as={AiFillLinkedin} /> <Text>@caiocgfg</Text>
            </HStack>
          </Link>
          <Link
            to={{ pathname: "https://github.com/caiogiffoni" }}
            target="_blank"
          >
            <HStack
              as={motion.div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon boxSize="30px" as={AiFillGithub} /> <Text>caiogiffoni</Text>
            </HStack>
          </Link>
          <HStack
            as={motion.div}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon boxSize="30px" as={FiMail} />{" "}
            <Text>caio_cgf@hotmail.com</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
