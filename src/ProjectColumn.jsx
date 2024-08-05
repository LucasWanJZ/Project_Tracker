import { React, useEffect, useState } from "react";
import "./css/ProjectColumn.css";
import ProjectCard from "./ProjectCard";

const ProjectColumn = ({
  columnName,
  icon,
  projects,
  status,
  handleDelete,
  handleTick,
  handleOpenModal,
}) => {
  return (
    <section className="project_column">
      <h2
        className="project_column_heading"
        style={{
          backgroundColor: status === "ongoing" ? "rgb(243,200,122)" : null,
        }}
      >
        <img className="project_column_icon" src={icon} alt="" />
        {columnName}
      </h2>
      <div
        className="projects"
        style={{
          backgroundColor:
            status === "todo"
              ? "lightyellow"
              : status === "ongoing"
              ? "lightblue"
              : "lightgreen",
        }}
      >
        {projects.map(
          (project, index) =>
            project.status === status && (
              <ProjectCard
                key={index}
                title={project.project}
                tags={project.tags}
                handleDelete={handleDelete}
                handleTick={handleTick}
                index={index}
                status={status}
                handleOpenModal={handleOpenModal}
              />
            )
        )}
      </div>
    </section>
  );
};

export default ProjectColumn;
