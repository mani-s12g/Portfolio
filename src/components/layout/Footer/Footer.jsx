import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li
          className={styles.email}
          onClick={() => window.open(window.location.href = "mailto:mani.s12g@gmail.com")}
        >
          <span className={styles.text}>email</span>
          <EmailOutlinedIcon className={styles.icon} />
        </li>

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
