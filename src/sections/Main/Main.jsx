import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading1}>
        <span className="cursor-grow">Manikanta</span>
      </h1>
      <h2 className={styles.heading2}>
        <span className="cursor-grow">Front-End Developer</span>
      </h2>
      <h4 className={styles.heading4}>
        Worked @ Liquid Lab | Infobell IT Pvt Ltd
      </h4>
      <h5 className={styles.heading5}>Good @ Web Technologies</h5>
      <button className={styles.viewBtn}>
        <span className="cursor-grow">View my work</span>
      </button>
    </main>
  );
}

export default Main;
