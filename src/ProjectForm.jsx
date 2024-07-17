import React, { useState } from "react";

import "./css/ProjectForm.css";
import Tag from "./Tag";

const ProjectForm = ({ setProjects }) => {
  const [projectData, setProjectData] = useState({
    project: "",
    status: "todo",
    tags: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectData);
    setProjects((prev) => {
      return [...prev, projectData];
    });
    setProjectData({
      project: "",
      status: "todo",
      tags: [],
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="project_input"
          name="project"
          value={projectData.project}
          placeholder="Enter Your Project Name"
          onChange={handleChange}
        />
        <div className="project_form_bottom_line">
          <div>
            <Tag
              tagName="GameDev"
              selectTag={selectTag}
              selected={checkTag("GameDev")}
            />
            <Tag
              tagName="WebDev"
              selectTag={selectTag}
              selected={checkTag("WebDev")}
            />
            <Tag
              tagName="MobileDev"
              selectTag={selectTag}
              selected={checkTag("MobileDev")}
            />
            <Tag
              tagName="Others"
              selectTag={selectTag}
              selected={checkTag("Others")}
            />
          </div>

          <div>
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
            <button type="submit" className="project_submit">
              + Add Project
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default ProjectForm;
