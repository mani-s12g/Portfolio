import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Custom Cursor
import CursorBall from "./components/common/CursorBall/CursorBall";
// App-Layout
import Layout from "./layout/Layout";

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

function App() {
  return (
    <>
      {/* <CursorBall /> */}
      <Router>
        {/* routes */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
