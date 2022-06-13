import "./App.css";
import { Introduction } from "./components/Introduction";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Knowledge } from "./components/Knowledge";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutMe />
      <Knowledge />
      <div id="quemsomos"></div>
    </>
  );
}

export default App;
