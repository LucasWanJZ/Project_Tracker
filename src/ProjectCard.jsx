import React from "react";
import "./css/ProjectCard.css";
import Tag from "./Tag";
import DeleteIcon from "./assets/delete.png";

const ProjectCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="project_card">
      <p className="project_title">{title}</p>
      <div className="project_card_bottom_line">
        <div className="project_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div
          className="project_card_delete"
          onClick={() => handleDelete(index)}
        >
          <img src={DeleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
