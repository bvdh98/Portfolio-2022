import React from "react";
import "./Project.css";

const Project = ({
  title,
  image,
  date,
  status,
  description,
  technologies,
  projectLink,
  gitHubLink,
}) => {
  return (
    <div className="project_container">
      <h4>{title}</h4>
      {image && <img src={require("../../src/img/" + image)} />}
      <h5>{date}</h5>
      <h5>Status: {status}</h5>
      {description}
      <h5>Technologies used: {technologies}</h5>
      {projectLink && (
        <a href={projectLink} className="project_links">
          Project Link
        </a>
      )}
      {gitHubLink && (
        <a href={gitHubLink} className="project_links">
          GitHub Link
        </a>
      )}
    </div>
  );
};

export default Project;
