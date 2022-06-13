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
          <Link href="#quemsomos" w="100%" _focus={{ color: "#41DA78" }}>
            Home
          </Link>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#quemsomos">Sobre</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#quemsomos">Skills</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#quemsomos">Qualification</HeaderLink>
        </MenuItem>
        <MenuItem _focus={{ background: "#262626" }}>
          <HeaderLink to="#quemsomos">Contato</HeaderLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
