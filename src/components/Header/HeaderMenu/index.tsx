import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { HeaderLink } from "../HeaderLink";

export const HeaderMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bgColor="#41DA78"
        _active={{
          background: "#262626",
          color: "white",
        }}
        _hover={{
          background: "#262626",
          color: "white",
        }}
        _expanded={{ bg: "#3a3838" }}
        h="30px"
      >
        Menu
      </MenuButton>
      <MenuList bgColor="black" color="white" borderColor="#41DA78">
        <MenuItem
          _focus={{
            background: "#262626",
            color: "white",
          }}
        >
          <Link href="#" w="100%" _focus={{ color: "#41DA78" }}>
            Home
          </Link>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#aboutme">Sobre</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#skills">Competências</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#project">Projetos</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#contact">Contato</HeaderLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
