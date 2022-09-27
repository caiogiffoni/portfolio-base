import { Box, Image, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { keyframes } from "@stitches/react";
import { useColors } from "../../../provider/Colors";
import { useState } from "react";

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
}

export const CardKnowledge = (
  { title, icon: Icon }: StackProps,
  key: number
): JSX.Element => {
  const { colorWordsDesc } = useColors();
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip label={title} isOpen={isLabelOpen}>
      <Box
        minW="150px"
        minH="150px"
        sx={{
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        <Icon size={84} color={colorWordsDesc} />
      </Box>
    </Tooltip>
  );
};
