import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.container}>
      
      {/* <div className={styles.blob_outer_container}>
        <div className={styles.blob_inner_container}>
          <div className={styles.blob}></div>
        </div>
      </div> */}

      <h1 className={styles.heading1}>Manikanta</h1>
      <h2 className={styles.heading2}>Front-End Developer</h2>
      <h4 className={styles.heading4}>
        Worked @ Liquid Lab | Infobell IT Pvt Ltd
      </h4>
      <h5 className={styles.heading5}>Good @ Web Technologies</h5>
      <button className={styles.viewBtn}>View my work</button>
    </main>
  );
}

export default Main;
