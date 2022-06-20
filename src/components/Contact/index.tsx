import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TextareaForm } from "./TextAreaForm/TextareaForm";
import { InputForm } from "./InputForm/Input";

import Lottie from "react-lottie";
import letter from "../../assets/contact-email-green.json";
import blueLetter from "../../assets/contact-email-blue1.json";
import { useColors } from "../../provider/Colors";
import { useForm, useInput } from "lx-react-form";

interface SendData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: colorMode === "light" ? blueLetter : letter,
  };

  const name = useInput({
    name: "name",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const message = useInput({
    name: "message",
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, message],
    submitCallback: (formData) => {
      const serviceId = "service_4tl3yeb";
      const templateId = "template_4f1ukju";
      const userId = "2V7TRTN8xJ94d9cQs";

      emailjs
        .send(serviceId, templateId, { ...formData }, userId)
        .then((_) => {
          toast({
            title: "Mensagem enviada",
            description: "Em breve entraremos em contato",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .then((error) => console.log(error));
    },
  });

  const { colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 } = useColors();

  return (
    <Box
      id="contact"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor={bgColor1}
    >
      <HStack justify="center" m="15px 0px">
        <Heading color={colorWordsDesc}>Contato</Heading>
      </HStack>

      <HStack justify="center">
        <Flex
          maxW="800px"
          w={["100%", "80%", "100%"]}
          bgColor={bgColor2}
          borderRadius="15px"
          justify={["center", "center", "space-around"]}
          align="center"
          direction={["column", "column", "row"]}
        >
          <VStack h="100%" w={["90%", "80%", "50%"]}>
            <VStack
              as="form"
              onSubmit={form.handleSubmit}
              mt="25px"
              h="100%"
              p="0px 20px"
            >
              <InputForm
                placeholder="Digite seu nome"
                label="Nome"
                name="Nome"
                icon={FaUser}
                error={name.error}
                colorWordsDesc={colorWordsDesc}
                lx={name}
              />
              <InputForm
                placeholder="Digite seu email"
                label="Email"
                name="Email"
                icon={FaEnvelope}
                error={email.error}
                colorWordsDesc={colorWordsDesc}
                lx={email}
              />
              <TextareaForm
                pt="15px"
                pl="30px"
                placeholder="Digite sua mensagem"
                label="Mensagem"
                name="Mensagem"
                error={message.error}
                colorWordsDesc={colorWordsDesc}
                lx={message}
              />
              <Box
                pb="15px"
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  type="submit"
                  bgColor={colorWordsStyle}
                  color={bgColor1}
                  mt="20px"
                  _hover={{
                    background: bgColor1,
                    color: colorWordsStyle,
                  }}
                >
                  Enviar
                </Button>
              </Box>
            </VStack>
          </VStack>
          <VStack>
            <VStack p="0px 20px" w="50%">
              <Box w={["150px", "200px", "220px", "250px"]}>
                <Lottie options={defaultOptions} />
              </Box>

              <VStack color={colorWordsStyle}>
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/caiocgfg" }}
                  target="_blank"
                >
                  <HStack
                    as={motion.div}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon boxSize="30px" as={AiFillLinkedin} />{" "}
                    <Text>@caiocgfg</Text>
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
                    <Icon boxSize="30px" as={AiFillGithub} />{" "}
                    <Text>caiogiffoni</Text>
                  </HStack>
                </Link>
                <HStack
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  pb="15px"
                >
                  <Icon boxSize="30px" as={FiMail} />{" "}
                  <Text>caio_cgf@hotmail.com</Text>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
      </HStack>
    </Box>
  );
};
