import React from "react";
import { SiRubygems } from "react-icons/si";

export default function ListFolders() {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"} </span> ls
      </div>
      <div className="commands--ls">
        <ul>
          <li style={{ fontWeight: "bold", color: "beige"}}>projects/</li>
          <li>skills.json</li>
          <li>about</li>
        </ul>
      </div>
    </>
  );
}
