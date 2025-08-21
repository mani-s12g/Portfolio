import React from "react";
import styles from "./Footer.module.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_div}>
        <ul className={styles.footer_links}>
            <li className={styles.email}>
                <EmailOutlinedIcon className={styles.icon} sx={{ fontSize: 33 }}/>
                <span className={styles.text} >email</span>
                {/* <span className={styles.icon} role="img" aria-label="email"></span> */}
                {/* <span className="material-icons-outlined">email</span>. */}
                {/* <span className={`${styles.icon} material-icons-outlined email`}>email</span> */}
                {/* <span className={`${styles.icon} material-icons-outlined`}></span> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> */}
            </li>
            <li className={styles.linkedin}>
                <LinkedInIcon className={styles.icon} sx={{ fontSize: 33 }}/>
                {/* <span className={styles.icon} role="img" aria-label="linkedin">📧</span> */}
                {/* <span className={`${styles.icon} material-icons-outlined`}>linkedin</span> */}
                <span className={styles.text}>linkedin</span>
            </li>
            <li className={styles.github}>
                <GitHubIcon className={styles.icon} sx={{ fontSize: 33 }}/>
                {/* <span className={styles.icon} role="img" aria-label="github">📧</span> */}
                {/* <span className={`${styles.icon} material-icons-outlined`}>github</span> */}
                <span className={styles.text}>github</span>

            </li>
        </ul>
        </div>           
    </footer>
  );
}

export default Footer;
