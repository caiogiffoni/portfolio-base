import { Box, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useColors } from "../../../provider/Colors";

interface HeaderLinkProps {
  to: string;
  children: string;
}

export const HeaderLinkDesktop = ({ children, to }: HeaderLinkProps) => {
  const { colorWordsStyle, colorWordsDesc } = useColors();

  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      w="100%"
      color={colorWordsDesc}
    >
      <HashLink to={to} smooth>
        <Text
          _hover={{
            color: colorWordsStyle,
          }}
        >
          {children}
        </Text>
      </HashLink>
    </Box>
  );
};
