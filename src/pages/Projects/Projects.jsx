import React from 'react'
import styles from "./Projects.module.css"
import GradientDiv from "../../components/GradientDiv/GradientDiv"
import projects from "../../config/projects";

function Projects() {
  return (
    <div className={styles.container}>
      <GradientDiv projectKeywords={projects.keywords} />
    </div>
  )
}

export default Projects