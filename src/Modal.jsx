import { React, useEffect, useState } from "react";
import "./css/Modal.css";
import Tag from "./Tag";

const Modal = ({ title, tags, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);

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
        <h2 className="modal-title">{title}</h2>
        <div className="modal_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <h2 className="modal-description">Description</h2>
        {!isEditing ? (
          <p className="description">Description</p>
        ) : (
          <textarea className="description-field"></textarea>
        )}
        <div className="modal-todo">
          <h2>To-Do</h2>
          <div className="todo-item">
            <input type="checkbox" id="todo-1" />
            {!isEditing ? (
              <label htmlFor="todo-1">To Do Task 1</label>
            ) : (
              <textarea className="td-field"></textarea>
            )}
          </div>
          <div className="todo-item">
            <input type="checkbox" id="todo-2" />
            {!isEditing ? (
              <label htmlFor="todo-2">To Do Task 2</label>
            ) : (
              <textarea className="td-field"></textarea>
            )}
          </div>
          <div className="todo-item">
            <input type="checkbox" id="todo-3" />
            {!isEditing ? (
              <label htmlFor="todo-3">To Do Task 3</label>
            ) : (
              <textarea className="td-field"></textarea>
            )}
          </div>
        </div>
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="save-button"
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
