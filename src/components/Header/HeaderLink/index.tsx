import { Box, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  to: string;
  children: string;
}

export const HeaderLink = ({ children, to }: HeaderLinkProps) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      w="100%"
    >
      <HashLink to={to} smooth>
        <Text
          _hover={{
            color: "greenPrimary",
          }}
        >
          {children}
        </Text>
      </HashLink>
    </Box>
  );
};
