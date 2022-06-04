import { Routes, Route} from "react-router-dom"
import Contact from "./components/Pages/Contact"
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Clients from "./components/Pages/Clients";
import ProjectInfo from "./components/Pages/ProjectInfo"


function App() {
  return (
    <>
      <div className="app">
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/project-info" element={<ProjectInfo/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
    
  );
}

export default App;
