import { Introduction } from "./components/Introduction";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutMe />
      <Projects />
      <Knowledge />
      <Contact />
    </>
  );
}

export default App;
