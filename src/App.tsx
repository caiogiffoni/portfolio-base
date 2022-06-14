import "./App.css";
import { Introduction } from "./components/Introduction";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutMe />
      <Knowledge />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
