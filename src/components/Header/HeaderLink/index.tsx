import { Box, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

interface HeaderLinkProps {
  to: string;
  children: string;
}

export const HeaderLink = ({ children, to }: HeaderLinkProps) => {
  return (
    <Box w="100%">
      <HashLink to={to} smooth>
        <Text
          _hover={{
            color: "#41DA78",
          }}
        >
          {children}
        </Text>
      </HashLink>
    </Box>
  );
};
