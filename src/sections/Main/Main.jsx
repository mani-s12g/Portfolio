import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={`${styles.mainStyle} container`}>
      <div className={styles.headDiv}>
        <div>
          <h1 className={styles.heading1}>
            <span className="cursor-grow">Manikanta</span>
          </h1>
        </div>
        <div>
          <p>
            <strong>
              <span className="cursor-grow">Front-End Developer</span>
            </strong>
            <br />
            <small>Worked @ Liquid Lab | Infobell IT Pvt Ltd </small>
          </p>
        </div>
        {/* <h2 className={styles.heading2}>
        <span className="cursor-grow">Front-End Developer</span>
        </h2>
        <h4 className={styles.heading4}>
          Worked @ Liquid Lab | Infobell IT Pvt Ltd
        </h4> */}
        <div>
          <h5 className={styles.heading5}>Good @ Web Technologies</h5>
          <br />
          <br />
          <button className={styles.viewBtn}>
            <span className="cursor-grow">View my work</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
