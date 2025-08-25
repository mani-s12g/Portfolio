import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.email}>
          <span className={styles.text}>email</span>
          <EmailOutlinedIcon className={styles.icon}/>
        </li>
        <li className={styles.linkedin}>
          <span className={styles.text}>linked in</span>
          <LinkedInIcon className={styles.icon}/>
        </li>
        <li className={styles.github}>
          <span className={styles.text}>github</span>
          <GitHubIcon className={styles.icon}/>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
