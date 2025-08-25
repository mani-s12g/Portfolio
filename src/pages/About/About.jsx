import React from "react";
import GradientDiv from "../../components/layout/GradientDiv/GradientDiv";
import about from "../../config/about";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <GradientDiv keywords={about.keywords} />
      <section className={styles.bioSection}>
        <div className={styles.headshot}>
          <img src={about.headShotPic} alt="" srcset="" />
        </div>
        <div className={styles.bio}>{about.bioIntro}</div>
      </section>
      {/* <span> */}
      <button className={styles.aboutBtn}>Copy Bio.</button>
      <button className={styles.aboutBtn}>Download Headshot.</button>
      <button className={styles.aboutBtn}>Checkout Resume.</button>
      {/* </span> */}
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
