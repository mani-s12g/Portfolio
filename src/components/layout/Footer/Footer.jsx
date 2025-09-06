import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <small>
        Loosely designed and coded in Visual Studio Code by yours truly. Built
        with React.js and CSS, deployed with github pages. Typography combines
        multiple typefaces for hierarchy and style.
      </small> */}

      <div className={styles.footerCredits}>
        <p>
          Designed & coded with in <strong>Visual Studio Code</strong> by yours
          truly.
        </p>
        <p>
          Built with ❤️ & Passion not just code, using <strong>React.js</strong>{" "}
          and <strong>CSS</strong>, deployed on <strong>GitHub Pages</strong>.
        </p>
      </div>
      <div className={styles.findMe}>
        You know how to find me
        <br />
        <strong>mani.s12g@gmail.com</strong>
      </div>
      <ul>
        <li
          className={styles.email}
          // onClick={() => window.open(window.location.href = "mailto:mani.s12g@gmail.com")}
        >
          {/* <span className={styles.findMe}>& these -</span> */}
          {/* <span className={styles.text}>mani.s12g@gmail.com</span> */}
          {/* <EmailOutlinedIcon className={styles.icon} /> */}
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
