import React, { useState, useEffect } from "react";

import "./css/App.css";
import ProjectForm from "./ProjectForm";
import ProjectColumn from "./ProjectColumn";
import Modal from "./Modal";
import ToDoIcon from "./assets/catto/todocat.png";
import OngoingIcon from "./assets/catto/ongoingcat.png";
import FinishedIcon from "./assets/catto/finishedcat.png";
import logoCat from "./src/assets/catto/catto3.png";

let oldProjects = localStorage.getItem("projects");

const App = () => {
  const [projects, setProjects] = useState(JSON.parse(oldProjects) || []);
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState({
    index: -1,
    title: "",
    tags: [],
    status: "todo",
    description: "",
    link: "",
    todo1: "",
    todo2: "",
    todo3: "",
    done1: false,
    done2: false,
    done3: false,
  });
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

  const handleOpenModal = (projectIndex) => {
    const chosenProject = projects[projectIndex];
    setModal({
      index: projectIndex,
      title: chosenProject.project,
      tags: chosenProject.tags,
      link: chosenProject.link,
      status: chosenProject.status,
      description: chosenProject.description,
      todo1: chosenProject.todo1,
      todo2: chosenProject.todo2,
      todo3: chosenProject.todo3,
      done1: chosenProject.done1,
      done2: chosenProject.done2,
      done3: chosenProject.done3,
    });
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <ProjectForm setProjects={setProjects}> </ProjectForm>
      <img src={logoCat} alt="catto" className="logo-cat" />
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
        <Modal
          modalData={modal}
          onClose={onClose}
          setProjects={setProjects}
        ></Modal>
      )}
    </div>
  );
};

export default App;
