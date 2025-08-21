import React from "react";
// import "./Navbar.module.css"
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar_log}>M</div>
        <ul className={styles.nav_links}>
            <li>ABOUT me.</li>
            <li>PROJECTS</li>
            <li>SKILLS</li>
            <li>CONTACT</li>
            <button className={styles.theme} >:)</button>
        </ul>           
    </nav>
  );
}

export default Navbar;
