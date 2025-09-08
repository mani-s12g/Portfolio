import React from "react";
import styles from "./Experience.module.css";
import GradientDiv from "../../components/ui/GradientDiv/GradientDiv";
import { experience } from "../../config/projects";
import EmphasisText from "../../components/ui/GradientDiv/Emphasis/EmphasisText";
import ChipsList from "../../components/ui/GradientDiv/Chips/Chips";
import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();

  const handleClick = (company) => {
    navigate(`/projects?tab=${encodeURIComponent(company)}`); // dynamic project details page
  };

  return (
    <div>
      <GradientDiv
        keywords={experience.expkeywords}
        gradientStart="#9580ff"
        gradientEnd="#80ffea"
      />

      <div className="inter-body">
        {experience.expintro.map((part, i) =>
          typeof part === "string" ? (
            part
          ) : (
            <EmphasisText key={i} color={part.color}>
              {part.text}
            </EmphasisText>
          )
        )}
      </div>

      <section className={styles["experienceSection"]}>
        <h2>Professional Experience</h2>
        <hr />
        <div>
          {experience.expArr.map((item, index) => {
            return (
              <div key={index} className={styles.experience}>
                <div className={styles["exp-div-inner"]}>
                  <p>{item.designation}</p>
                  <span>
                    <strong>{item.company}</strong>
                    <p className={styles.duration}>
                      {item.fromDate} - {item.toDate} • {item.totalYears}
                    </p>
                  </span>
                  <div className={styles.chipss}>
                    <ChipsList items={item.technologies} color="info" />
                  </div>
                  <p className={styles.achievements}>Key Achievements</p>
                  <ul className="inter-body" style={{marginTop: "-8px"}}>
                    {item.keyAchievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>

                  <button
                    className={styles.expViewBtn}
                    onClick={() => handleClick(item.company)}
                  >
                    View related projects →
                  </button>
                  {/* <hr /> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Experience;
