import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="container">
      <footer className={`${styles.footer}`}>
        <ul className={styles.footer_links}>
          <li className={styles.email}>
            <EmailOutlinedIcon className={styles.icon} sx={{ fontSize: 33 }} />
            <span className={styles.text}>email</span>
          </li>
          <li className={styles.linkedin}>
            <LinkedInIcon className={styles.icon} sx={{ fontSize: 33 }} />
            <span className={styles.text}>linkedin</span>
          </li>
          <li className={styles.github}>
            <GitHubIcon className={styles.icon} sx={{ fontSize: 33 }} />
            <span className={styles.text}>github</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
