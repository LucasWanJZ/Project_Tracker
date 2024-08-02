import { React, useEffect, useState } from "react";
import "./css/Modal.css";
import Tag from "./Tag";

const Modal = ({ modalData, onClose, setProjects }) => {
  const [projectData, setProjectData] = useState({
    project: modalData.title,
    status: modalData.status,
    tags: modalData.tags,
    description: modalData.description,
    todo1: modalData.todo1,
    todo2: modalData.todo2,
    todo3: modalData.todo3,
    done1: modalData.done1,
    done2: modalData.done2,
    done3: modalData.done3,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setProjectData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;

    setProjectData((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{modalData.title}</h2>
        <div className="modal_tags">
          {modalData.tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <h2 className="modal-description">Description</h2>
        {!isEditing ? (
          <p className="description">{projectData.description}</p>
        ) : (
          <textarea
            className="description-field"
            name="description"
            value={projectData.description}
            onChange={handleChange}
          ></textarea>
        )}
        <div className="modal-todo">
          <h2>To-Do</h2>
          <div className="todo-item">
            <input
              type="checkbox"
              id="todo-1"
              name="done1"
              checked={projectData.done1}
              onChange={handleChangeCheckbox}
              disabled={!isEditing}
            />
            {!isEditing ? (
              <label htmlFor="todo-1">{projectData.todo1}</label>
            ) : (
              <textarea
                className="td-field"
                name="todo1"
                value={projectData.todo1}
                onChange={handleChange}
              ></textarea>
            )}
          </div>
          <div className="todo-item">
            <input
              type="checkbox"
              id="todo-2"
              name="done2"
              checked={projectData.done2}
              onChange={handleChangeCheckbox}
              disabled={!isEditing}
            />
            {!isEditing ? (
              <label htmlFor="todo-2">{projectData.todo2}</label>
            ) : (
              <textarea
                className="td-field"
                name="todo2"
                value={projectData.todo2}
                onChange={handleChange}
              ></textarea>
            )}
          </div>
          <div className="todo-item">
            <input
              type="checkbox"
              id="todo-3"
              name="done3"
              checked={projectData.done3}
              onChange={handleChangeCheckbox}
              disabled={!isEditing}
            />
            {!isEditing ? (
              <label htmlFor="todo-3">{projectData.todo3}</label>
            ) : (
              <textarea
                className="td-field"
                name="todo3"
                value={projectData.todo3}
                onChange={handleChange}
              ></textarea>
            )}
          </div>
        </div>
        <button
          className="edit-button"
          onClick={() => setIsEditing(true)}
          disabled={isEditing}
        >
          Edit
        </button>
        <button
          className="save-button"
          onClick={() => {
            setIsEditing(false);
            setProjects((prevProjects) => {
              const updatedProjects = [...prevProjects];
              updatedProjects[modalData.index] = projectData;
              return updatedProjects;
            });
          }}
          disabled={!isEditing}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
