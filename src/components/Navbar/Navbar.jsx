import React, { useEffect, useState } from "react";
import "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
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
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_log}>
        <NavLink to="/">M</NavLink>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} cursor-grow`
            }
          >
            ABOUT me.
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
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} cursor-grow`
            }
          >
            CONTACT
          </NavLink>
        </li>

        <button className={`${styles.theme} cursor-grow`} onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
