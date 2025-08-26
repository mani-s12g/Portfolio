import React from "react";
import styles from "./Projects.module.css";
import GradientDiv from "../../components/layout/GradientDiv/GradientDiv";
import projects from "../../config/projects";

function Projects() {
  return (
    <div>
      <GradientDiv
        keywords={projects.keywords}
        gradientStart="#8aff80"
        gradientEnd="#80ffea"
      />
      <div className={styles.intro}>
        <p>
          {projects.intro} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Necessitatibus odio inventore molestias dolorum laboriosam ullam
          voluptatem. Numquam ea consequuntur itaque error dolorum culpa saepe
          laborum esse! Necessitatibus, fuga. Ex, quod.{" "}
        </p>
      </div>

      <div className={styles.cards_layout}>
        {projects.details.map((item, index) => {
          return (
            <div key={index} className={styles.cards_body}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <small>{item.tech}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
