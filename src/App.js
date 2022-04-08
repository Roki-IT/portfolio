import "./App.css";
import Skills from "./Skills";
import TextBox from "./TextBox";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextBox />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
