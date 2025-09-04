import React, { useRef, useState } from "react";
import "./Header.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({});

  const handleMouseEnter = (e) => {
    const item = e.target.getBoundingClientRect();
    const nav = navRef.current.getBoundingClientRect();
    const padding = 16; // px padding on both sides

    setHighlightStyle({
      left: item.left - nav.left - padding / 2 + "px",
      width: item.width + padding + "px",
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
  };
  // const [darkMode, setDarkMode] = useState(false);
  // const [currentTheme, setCurrentTheme] = useState("DARK");

  // const toggleTheme = () => {
  //   const newTheme = darkMode ? "light" : "dark";
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   setDarkMode(!darkMode);
  //   setCurrentTheme(darkMode ? "LIGHT" : "DARK");
  // };

  // Load theme from localStorage
  // useEffect(() => {
  // const savedTheme = localStorage.getItem("theme") || "light";
  // document.documentElement.setAttribute("data-theme", savedTheme);
  // setDarkMode(savedTheme === "dark");
  // }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">ʍ</NavLink>
      </div>
      <nav className={styles.nav} ref={navRef}>
        <ul onMouseLeave={handleMouseLeave}>
          {["Home","About", "Experience", "Projects", "Certifications"].map(
            (item, index) => {
              return (
                <li key={index} onMouseEnter={handleMouseEnter}>
                  <NavLink
                    to={item != "Home" ? `/${item}` : `/`}
                    className={({ isActive }) =>
                      `${isActive ? styles.active : ""}`
                    }
                  >
                    {item.toUpperCase()}
                  </NavLink>
                </li>
              );
            }
          )}
          {/* <li>
            <NavLink
              to="#"
              className={`${styles.theme} cursor-grow`}
              onClick={toggleTheme}
            >
              {darkMode ? "🌙" : "☀️"}
              {darkMode ? currentTheme : currentTheme }
            </NavLink>
          </li> */}
        </ul>
        <span className={styles["nav-highlight"]} style={highlightStyle} />
      </nav>
    </header>
  );
}

export default Header;
