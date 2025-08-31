import React from "react";
import GradientDiv from "../../components/ui/GradientDiv/GradientDiv";
import about from "../../config/about";
import styles from "./About.module.css";
import me from "../../assets/images/meBG.png";
import EmphasisText from "../../components/ui/GradientDiv/Emphasis/EmphasisText";

function About() {
  return (
    <div>
      <GradientDiv
        keywords={about.keywords}
        gradientStart="#ff80bf"
        gradientEnd="#9580ff"
      />
      <section className={styles.bioSection}>
        <div className={styles.headshot}>
          <img src={me} alt="" srcset="" />
        </div>
        <div className={`${styles.bio} inter-body`}>
          <p>
            {about.bioIntro.flatMap((part, i) => {
              if (typeof part === "string") {
                return part.split("\n").map((line, j, arr) => (
                  <React.Fragment key={`${i}-${j}`}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </React.Fragment>
                ));
              }
              return (
                <EmphasisText key={i} color={part.color}>
                  {part.text}
                </EmphasisText>
              );
            })}
          </p>
        </div>
      </section>
      {/* <span> */}

      {/* </span> */}

      <div className={styles.shrinkDiv}>
        <p>Bio</p>
        <p className="inter-body">
          This is made for Human Resources, Referrer and Recommender to
          copy-and-paste.
        </p>
        <div>
          <p id={styles.bioPara}>{about.bioCopy}</p>
        </div>
      </div>

      <button className={styles.aboutBtn}>Copy Bio.</button>
      <button className={styles.aboutBtn}>Visit Resume.</button>
      
      <section className={styles.careerSection}>
        <p>Career</p>
        <div>
          {about.career.map((item, index) => {
            return (
              <div key={index} className={styles.career}>
                <p>{item.designation}</p>
                <span>
                  <strong> {item.company}</strong> &nbsp; {item.basedIn}
                </span>
                <br />
                <span>
                  {item.fromDate} - {item.toDate}. {item.totalYears}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
