import React, { useState, useEffect } from "react";

import "./css/App.css";
import ProjectForm from "./ProjectForm";
import ProjectColumn from "./ProjectColumn";
import Modal from "./Modal";
import ToDoIcon from "./assets/direct-hit.png";
import OngoingIcon from "./assets/glowing-star.png";
import FinishedIcon from "./assets/check-mark-button.png";

const oldProjects = localStorage.getItem("projects");

const App = () => {
  const [projects, setProjects] = useState(JSON.parse(oldProjects) || []);
  const [modal, setModal] = useState({ title: "", tags: [] });
  const [showModal, setShowModal] = useState(false);

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

  const handleOpenModal = (title, tags) => {
    setModal({ title, tags });
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
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
          handleOpenModal={handleOpenModal}
        ></ProjectColumn>
        <ProjectColumn
          columnName="Ongoing"
          icon={OngoingIcon}
          projects={projects}
          status={"ongoing"}
          handleDelete={handleDelete}
          handleTick={handleTick}
          handleOpenModal={handleOpenModal}
        ></ProjectColumn>
        <ProjectColumn
          columnName="Finished"
          icon={FinishedIcon}
          projects={projects}
          status={"finished"}
          handleDelete={handleDelete}
          handleTick={handleTick}
          handleOpenModal={handleOpenModal}
        ></ProjectColumn>
      </main>
      {showModal && (
        <Modal title={modal.title} tags={modal.tags} onClose={onClose}></Modal>
      )}
    </div>
  );
};

export default App;
