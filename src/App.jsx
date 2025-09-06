import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Custom Cursor
import CursorBall from "./components/common/CursorBall/CursorBall";
// App-Layout
import Layout from "./layout/Layout";

// Scroll to Top
import ScrollToTop from "./components/common/ScrollToTop";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

// Global Styles
import "./assets/styles/global.css";
import Experience from "./pages/Experience/Experience";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Certifications from "./pages/Certifications/Certifications";
import CustomCursor from "./components/common/CustomCursor/CustomCursor";
// import applyGradientCursor from 'gradient-cursor';

function App() {
  // useEffect(() => {
  //   applyGradientCursor({
  //     backgroundColor: "#212024",       // page background (optional)
  //     gradientColor: "40, 40, 60",       // RGB spotlight color
  //     gradientSize: "15vmax"             // size of the spot
  //   });
  // }, []);
  return (
    <>
      {/* <CursorBall /> */}
      {/* <CustomCursor /> */}
      <Router>
        <ScrollToTop /> {/* 🔹 Force scroll to top on route change */}
        {/* routes */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
