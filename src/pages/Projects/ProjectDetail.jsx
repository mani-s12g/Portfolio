import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { projects } from "../../config/projects";
import ChipsList from "../../components/ui/GradientDiv/Chips/Chips";

function ProjectDetail() {
  const { projectSlug } = useParams();
  //   const navigate = useNavigate();

  //   const handleClick = (company) => {
  //     navigate(`/projects?tab=${encodeURIComponent(company)}`); // dynamic project details page
  //   };

  // Find the project by slug
  const project = projects.projectsArr.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectSlug
  );

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <section className={styles["projectDetailSection"]}>
        <h2>Project Details</h2>
        {/* <hr /> */}
        <div className={styles.detailDiv}>
          <div className={styles.roleStyles}>
            <span>
              <strong className={styles.mainrole}>{project.role}</strong>
              <small className={styles.duration}>{project.duration}</small>
            </span>
            <p className={styles.companyLink}>
              <a href={`${project.companyLink}`} target="_blank">
                @{project.company}
              </a>
            </p>
          </div>
          <p className={styles.subHeadings}>Tech Stack</p>
          <ChipsList
            items={project.technologies}
            color="#ffd880"
            textColor="#08070b"
          />

          <div className={styles.experience}>
            <div className={styles["exp-div-inner"]}>
              <p className={styles.subHeadings}>Project Title</p>
              <p className={styles.subPara}>{project.name}</p>
              <p className={styles.subHeadings}>Description</p>
              <p className={styles.subPara}>{project.description}</p>
              <p className={styles.subHeadings}>Contributions</p>
              <ul className="inter-body" style={{ marginTop: "-8px" }}>
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>{project.name}</h1>
      <p><strong>Company:</strong> {project.company}</p>
      <p><strong>Duration:</strong> {project.duration}</p>
      <p>{project.description}</p> */}
      {/* Render technologies, achievements, images, etc. */}
    </div>
  );
}

export default ProjectDetail;
