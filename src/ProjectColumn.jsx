import { React, useEffect, useState } from "react";
import "./css/ProjectColumn.css";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

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
              handleTick={handleTick}
              index={index}
              status={status}
              handleOpenModal={handleOpenModal}
            />
          )
      )}
    </section>
  );
};

export default ProjectColumn;
