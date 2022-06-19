import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { HeaderLink } from "../HeaderLink";
import { motion } from "framer-motion";
import { useState } from "react";
import { useColors } from "../../../provider/Colors";

export const HeaderMenu = () => {
  let i = 0;

  const sourceMenu = [
    { description: "Home", to: "#" },
    { description: "Sobre", to: "#aboutme" },
    { description: "Projetos", to: "#projects" },
    { description: "Tecnologias", to: "#skills" },
    { description: "Contato", to: "#contact" },
  ];

  const [menu, setMenu] = useState([{ description: "Home", to: "#" }]);

  const handleClick = () => {
    if (sourceMenu.length === menu.length) return false;
    const interval = setInterval(() => {
      i++;
      setMenu((menu) => [...menu, sourceMenu[i]]);
      if (i >= sourceMenu.length - 1) {
        clearInterval(interval);
      }
    }, 500);
  };

  const { colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 } = useColors();

  return (
    <Menu autoSelect={false} onOpen={() => handleClick()}>
      <MenuButton
        as={Button}
        bgColor={colorWordsStyle}
        _active={{
          background: bgColor2,
          color: colorWordsDesc,
        }}
        _hover={{
          background: bgColor2,
          color: colorWordsDesc,
        }}
        _expanded={{ bg: colorWordsStyle }}
        h="30px"
      >
        <HamburgerIcon boxSize="20px" color="white" />
      </MenuButton>
      <MenuList
        bgColor={bgColor1}
        color={colorWordsDesc}
        borderColor={colorWordsStyle}
      >
        {menu.map((item, i) => (
          <Box
            as={motion.div}
            animate={{ y: [50, 25, 0], opacity: [0, 0.5, 1] }}
            transition="1s linear"
            key={i}
          >
            <MenuItem _hover={{ background: "none" }}>
              <HeaderLink to={item.to}>{item.description}</HeaderLink>
            </MenuItem>
          </Box>
        ))}

        {/* <MenuItem>
            <HeaderLink to="#aboutme">Sobre</HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink to="#projects">Projetos</HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink to="#skills">Tecnologias</HeaderLink>
          </MenuItem>
          <MenuItem>
            <HeaderLink to="#contact">Contato</HeaderLink>
          </MenuItem>*/}
      </MenuList>
    </Menu>
  );
};
