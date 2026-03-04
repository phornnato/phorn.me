import { Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";
import Home    from "./pages/Home";
import About   from "./pages/About";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";
import CV       from "./pages/CV";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />}     />
        <Route path="/about"   element={<About />}    />
        <Route path="/projects"element={<Projects />} />
        <Route path="/cv"      element={<CV />}       />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
