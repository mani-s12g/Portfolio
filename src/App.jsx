import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CursorBall from "./components/CursorBall/CursorBall";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills"
import "./assets/styles/global.css";

function App() {
  return (
    <>
      <CursorBall />
      <Router>
        {/* header */}
        <Header />
        
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* footer */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
