// 1. Import the extendTheme function
import { extendTheme, theme as base } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const PortfolioTheme = extendTheme({
  colors: {
    primary: "#F0DC5B",
    secondary: "#A69C5D", // mudança de nome pois ocorreu um erro de digitação rs
    warning: "#f55aaa",
    footerDashboard: "#E1E1E1",
    tertiary: "#FFE32F",
    blackPrimary: "#212121",
    blackSecondary: "#262626",
    greenPrimary: "green.400",
  },
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
    logo: "Poppins",
    primary: "Arial",
  },
});
