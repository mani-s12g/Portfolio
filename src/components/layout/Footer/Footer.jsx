import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCredits}>
        <p>
          Designed & coded in <strong>Visual Studio Code</strong> by yours truly &nbsp;
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ❤️
          </motion.span>
          .
        </p>
        <p>
          Built with Passion using <strong>React</strong> and{" "}
          <strong>CSS</strong>, deployed on <strong>Vercel</strong>.
        </p>
      </div>
      <div className={styles.findMe}>
        You know how to find me
        <br />
        <strong>mani.s12g@gmail.com</strong>
      </div>
      <ul>
        <li
          className={styles.linkedin}
          onClick={() =>
            window.open("https://www.linkedin.com/in/manikanta-s/", "_blank")
          }
        >
          <span className={styles.text}>linked in</span>
          <LinkedInIcon className={styles.icon} />
        </li>

        <li
          className={styles.github}
          onClick={() => window.open("https://github.com/mani-s12g", "_blank")}
        >
          <span className={styles.text}>github</span>
          <GitHubIcon className={styles.icon} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
