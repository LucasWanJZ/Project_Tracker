import React from "react";
import "./css/ProjectColumn.css";
import ProjectCard from "./ProjectCard";

const ProjectColumn = ({
  columnName,
  icon,
  projects,
  status,
  handleDelete,
}) => {
  return (
    <section className="project_column">
      <h2 className="project_column_heading">
        <img className="project_column_icon" src={icon} alt="" />
        {columnName}
      </h2>

      {projects.map(
        (project, index) =>
          project.status === status && (
            <ProjectCard
              key={index}
              title={project.project}
              tags={project.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default ProjectColumn;
