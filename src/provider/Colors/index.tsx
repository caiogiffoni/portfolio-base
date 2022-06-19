// fazer os imports
import { useColorModeValue } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";

interface ColorContextProps {
  colorWordsStyle: string;
  colorWordsDesc: string;
  bgColor1: string;
  bgColor2: string;
}

// criar o context
export const ColorContext = createContext<ColorContextProps | null>(null);

// criar o provider
export const ColorProvider = ({ children }: any) => {
  const colorWordsStyle = useColorModeValue("blue.500", "green.400");
  const colorWordsDesc = useColorModeValue("#262626", "#c4c3c3");
  const bgColor1 = useColorModeValue("#e2e2e2", "#212121");
  const bgColor2 = useColorModeValue("#c8c8c8", "#262626");

  return (
    <ColorContext.Provider
      value={{ colorWordsStyle, colorWordsDesc, bgColor1, bgColor2 }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext) as ColorContextProps;
