import React from "react";

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
        </ul>
        <br /> <br />
      </div>
    </>
  );
}
