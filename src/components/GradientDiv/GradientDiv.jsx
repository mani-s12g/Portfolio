import React, { useEffect } from "react";
import styles from "./GradientDiv.module.css";

function GradientDiv({projectKeywords}) {
//   const {projectKeywords} = props;

    useEffect(() => {
      console.log(projectKeywords, "pros");
    }, [])
    

  return (
    <div className={styles.gradientHeadingDiv}>
      {projectKeywords.map((item, index) => {
        return <div key={index}>
            <h1 className={styles.gradient_text}>{item}<span>.</span></h1>
        </div>;
      })}
    </div>
  );
}

export default GradientDiv;
