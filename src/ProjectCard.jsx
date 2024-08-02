import React, { useEffect, useState } from "react";
import "./css/ProjectCard.css";
import Modal from "./Modal";
import Tag from "./Tag";
import DeleteIcon from "./assets/delete.png";
import TickIcon from "./assets/tick.png";

const ProjectCard = ({
  title,
  tags,
  handleDelete,
  handleTick,
  index,
  status,
  handleOpenModal,
}) => {
  return (
    <article
      className="project_card"
      onClick={() => handleOpenModal(title, tags)}
    >
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
        <div
          className="project_card_tick"
          onClick={() => handleTick(index)}
          style={
            status === "finished" ? { display: "none" } : { disabled: true }
          }
        >
          <img src={TickIcon} className="tick_icon" />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
