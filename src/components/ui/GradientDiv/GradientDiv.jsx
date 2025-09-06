import React, { useEffect } from "react";
import styles from "./GradientDiv.module.css";

function GradientDiv({ keywords, gradientStart, gradientEnd }) {
  //   const {keywords} = props;

  useEffect(() => {
    console.log(keywords, "pros");
  }, []);

  return (
    <div
      className={styles.gradientHeadingDiv}
      style={{
        "--gradient-start": gradientStart,
        "--gradient-end": gradientEnd,
      }}
    >
      {keywords.map((item, index) => {
        return (
          <div key={index}>
            <h1 className={styles.gradient_text}>
              {item}
              <span>. &nbsp;</span>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default GradientDiv;
