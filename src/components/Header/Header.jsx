import React, { useEffect, useState } from "react";
import "./Header.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("DARK");

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
    setCurrentTheme(darkMode ? "LIGHT" : "DARK");
  };

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setDarkMode(savedTheme === "dark");
  }, []);

  return (
    <nav className={`${styles.header}`}>
      <div className={`${styles.section_layout}`}>
        <div className={styles.start_section}>
          <NavLink to="/">M</NavLink>
        </div>

        <div className={`${styles.end_section} container`}>
          <ul className={styles.nav_links}>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} cursor-grow`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} cursor-grow`
                }
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} cursor-grow`
                }
              >
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} cursor-grow`
                }
              >
                STACKS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? styles.active : ""} cursor-grow`
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={`${styles.theme} cursor-grow`}
                onClick={toggleTheme}
              >
                {currentTheme} {darkMode ? "🌙" : "☀️"}
              </NavLink>
            </li>

            {/* <button
              className={`${styles.theme} cursor-grow`}
              onClick={toggleTheme}
            >
              {currentTheme} {darkMode ? "🌙" : "☀️"}
            </button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
