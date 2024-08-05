import React, { useState } from "react";

import "./css/ProjectForm.css";
import Tag from "./Tag";

const ProjectForm = ({ setProjects }) => {
  const [projectData, setProjectData] = useState({
    project: "",
    status: "todo",
    link: "",
    tags: [],
    description: "",
    todo1: "",
    todo2: "",
    todo3: "",
    done1: false,
    done2: false,
    done3: false,
  });

  const checkTag = (tag) => {
    return projectData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddTag = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prev) => {
      return [...prev, projectData];
    });
    setProjectData({
      project: "",
      status: "todo",
      link: "",
      tags: [],
      description: "",
      todo1: "",
      todo2: "",
      todo3: "",
      done1: false,
      done2: false,
      done3: false,
    });
  };

  const selectTag = (tag) => {
    if (projectData.tags.some((item) => item === tag)) {
      const filterTags = projectData.tags.filter((item) => item !== tag);
      setProjectData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setProjectData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="project_input"
          name="project"
          value={projectData.project}
          placeholder="Enter Your Project Name"
          autoComplete="off"
          onChange={handleChange}
        />
        <div className="project_form_bottom_line">
          <div className="tags_container">
            <Tag
              tagName="Prioritize"
              selectTag={selectTag}
              selected={checkTag("Prioritize")}
            />
            <Tag
              tagName="WebDev"
              selectTag={selectTag}
              selected={checkTag("WebDev")}
            />
            <Tag
              tagName="GameDev"
              selectTag={selectTag}
              selected={checkTag("GameDev")}
            />
            <Tag
              tagName="Others"
              selectTag={selectTag}
              selected={checkTag("Others")}
            />
          </div>
          <div className="status-container">
            <select
              className="project_status"
              onChange={handleChange}
              name="status"
              value={projectData.status}
            >
              <option value="todo">To Do</option>
              <option value="ongoing">Ongoing</option>
              <option value="finished">Finished</option>
            </select>
            <button
              type="submit"
              className="project_submit"
              onClick={handleSubmit}
              disabled={!projectData.project}
            >
              + Add Project
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default ProjectForm;
