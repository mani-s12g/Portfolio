import { useParams } from "react-router-dom";
import { projects } from "../../config/projects";

function ProjectDetail() {
  const { projectSlug } = useParams();

  // Find the project by slug
  const project = projects.projectsArr.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectSlug
  );

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p><strong>Company:</strong> {project.company}</p>
      <p><strong>Duration:</strong> {project.duration}</p>
      <p>{project.description}</p>
      {/* Render technologies, achievements, images, etc. */}
    </div>
  );
}

export default ProjectDetail;
