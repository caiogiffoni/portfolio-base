import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaForm } from "./TextAreaForm/TextareaForm";
import { InputForm } from "./InputForm/Input";

import Lottie from "react-lottie";
import letter from "../../assets/contact-email.json";

interface SendData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: letter,
  };

  const sendEmail = (data: SendData) => {
    console.log(data);

    const serviceId = "service_4tl3yeb";
    const templateId = "template_4f1ukju";
    const userId = "2V7TRTN8xJ94d9cQs";

    emailjs
      .send(serviceId, templateId, { ...data }, userId)
      .then((response) => console.log(response))
      .then((error) => console.log(error));
  };

  const signInSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    message: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendData>({ resolver: yupResolver(signInSchema) });
  return (
    <Box
      id="contact"
      w="100%"
      p={["40px 20px", "50px 20px", "60px 120px"]}
      bgColor="#212121"
      color="#41DA78"
    >
      <HStack justify="center" m="15px 0px">
        <Heading color="white">Contato</Heading>
      </HStack>

      <HStack justify="center">
        <Flex
          maxW="800px"
          w={["100%", "80%", "100%"]}
          bgColor="#262626"
          borderRadius="15px"
          justify={["center", "center", "space-around"]}
          align="center"
          direction={["column", "column", "row"]}
        >
          <VStack h="100%" w={["90%", "80%", "50%"]}>
            <VStack
              as="form"
              onSubmit={handleSubmit(sendEmail)}
              mt="25px"
              h="100%"
              p="0px 20px"
            >
              <InputForm
                placeholder="Digite seu nome"
                label="Nome"
                icon={FaUser}
                error={errors.name}
                {...register("name")}
              />
              <InputForm
                placeholder="Digite seu email"
                label="Email"
                icon={FaEnvelope}
                error={errors.email}
                {...register("email")}
              />
              <TextareaForm
                pt="15px"
                pl="30px"
                placeholder="Digite sua mensagem"
                label="Mensagem"
                error={errors.message}
                {...register("message")}
              />
              <Box
                pb="15px"
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button type="submit" colorScheme="green" mt="20px">
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
