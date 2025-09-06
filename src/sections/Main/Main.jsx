import React from "react";
import styles from "./Main.module.css";
import GradientDiv from "../../components/ui/GradientDiv/GradientDiv";
import { useNavigate } from "react-router-dom";
// import CustomCursor from "../../components/common/CustomCursor/CustomCursor";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <section className={`${styles.mainStyle}`}>
        <h1>
          <div
            className={styles.gradientHeadingDiv}
            style={{
              "--gradient-start": "#9580ff",
              "--gradient-end": "#ff9580",
            }}
          >
            <span className={styles.glow}>Manikanta</span>
          </div>
        </h1>

        <p>
          <strong>
            <span className={styles.frontWhite}>FRONTEND </span>
            <span className={styles.frontGrey}>DEVELOPER</span>
          </strong>
        </p>
        <h4>
          Passionate about building fast, accessible, & visually striking web
          applications.
        </h4>
        {/* <br /> */}
        <button
          className={styles.viewBtn}
          onClick={() => navigate("/projects")}
        >
          <span className="cursor-grow">View my work →</span>
        </button>
      </section>
    </>
  );
}

export default Main;
