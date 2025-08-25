import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <section className={`${styles.mainStyle}`}>
      <h1 className={styles.heading1}>
        <span className="cursor-grow">Manikanta</span>
      </h1>

      <p>
        <strong>
          <span className="cursor-grow">Front-End Developer</span>
        </strong>
        <br />
        <small>Worked @ Liquid Lab | Infobell IT Pvt Ltd </small>
        <br />
        <small>Good @ Web Technologies </small>
      </p>
      <button className={styles.viewBtn}>
        <span className="cursor-grow">View my work →</span>
      </button>
    </section>
  );
}

export default Main;
