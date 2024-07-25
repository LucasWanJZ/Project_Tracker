import React, { useState, useEffect } from "react";

import "./css/App.css";
import ProjectForm from "./ProjectForm";
import ProjectColumn from "./ProjectColumn";
import ToDoIcon from "./assets/direct-hit.png";
import OngoingIcon from "./assets/glowing-star.png";
import FinishedIcon from "./assets/check-mark-button.png";

const oldProjects = localStorage.getItem("projects");

const App = () => {
  const [projects, setProjects] = useState(JSON.parse(oldProjects) || []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleDelete = (projectIndex) => {
    const newProjects = projects.filter(
      (project, index) => index !== projectIndex
    );
    setProjects(newProjects);
  };

  const handleTick = (projectIndex) => {
    const chosenProject = projects[projectIndex];
    if (chosenProject.status === "todo") {
      chosenProject.status = "ongoing";
    } else {
      chosenProject.status = "finished";
    }
    const newProjects = projects.map((project, index) =>
      index === projectIndex ? chosenProject : project
    );
    setProjects(newProjects);
  };

  return (
    <div className="app">
      <ProjectForm setProjects={setProjects}> </ProjectForm>
      <main className="app_main">
        <ProjectColumn
          columnName="To Do"
          icon={ToDoIcon}
          projects={projects}
          status={"todo"}
          handleDelete={handleDelete}
          handleTick={handleTick}
        ></ProjectColumn>
        <ProjectColumn
          columnName="Ongoing"
          icon={OngoingIcon}
          projects={projects}
          status={"ongoing"}
          handleDelete={handleDelete}
          handleTick={handleTick}
        ></ProjectColumn>
        <ProjectColumn
          columnName="Finished"
          icon={FinishedIcon}
          projects={projects}
          status={"finished"}
          handleDelete={handleDelete}
          handleTick={handleTick}
        ></ProjectColumn>
      </main>
    </div>
  );
};

export default App;
