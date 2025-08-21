import React, { useEffect, useRef, useState } from "react";
import "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef(null);

  const handleMouseEnter = (e) => {
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = e.target.getBoundingClientRect();
    setHoverStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const toggleTheme = () => {
    if(darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Load theme from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, [])
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_log}>
        <NavLink to="/">M</NavLink>
      </div>
      <ul className={styles.nav_links} ref={navRef}>
        <div
          className={styles.hoverIndicator}
          style={{
            left: hoverStyle.left,
            width: hoverStyle.width,
            opacity: hoverStyle.opacity,
          }}
        />
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            ABOUT me.
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            CONTACT
          </NavLink>
        </li>

        <button className={styles.theme} onClick={toggleTheme}>Theme {darkMode ? "🌙" : "☀️"}</button>
        {/* <button className={styles.theme} onClick={toggleTheme}>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button> */}
      </ul>
    </nav>
  );
}

export default Navbar;
