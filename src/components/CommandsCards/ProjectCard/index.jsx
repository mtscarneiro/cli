import React from "react";

export default function ProjectCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ {'>'} </span> cd projects
      </div>
      <div className="commands--project--card">
        <h3>Netflix Clone</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum libero a enim accumsan, ac mattis ligula gravida.
          Pellentesque congue pulvinar pellentesque.
        </p>
        <div className="commands--project--buttons">
        </div>
      </div>
    </>
  );
}
