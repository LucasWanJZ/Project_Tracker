import React from "react";
import "./css/tag.css";

export const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    GameDev: { backgroundColor: "#fda821" },
    WebDev: { backgroundColor: "#15d4c8" },
    MobileDev: { backgroundColor: "#ffd12c" },
    Others: { backgroundColor: "#4cdafc" },
    Default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.Default}
    >
      {tagName}
    </button>
  );
};

export default Tag;
