import { Box, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { keyframes } from "@stitches/react";
import { useColors } from "../../../provider/Colors";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@chakra-ui/react";

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

interface StackProps {
  title: string;
  icon: IconType;
  key: number;
  i: number;
}

export const CardKnowledge = ({
  title,
  icon: Icon,
  i,
}: StackProps): JSX.Element => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const boxVariant = {
    initial: {
      opacity: 0,
      translateX: i % 2 === 0 ? -70 : 70,
      translateY: -70,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: isLargerThan1280 ? i * 0.3 : 0.8,
        delay: isLargerThan1280 ? i * 0.3 : 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("initial").then((res) => control.start("visible"));
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const { colorWordsDesc } = useColors();
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip label={title} isOpen={isLabelOpen}>
      <Box
        as={motion.div}
        animate={control}
        ref={ref}
        variants={boxVariant}
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
