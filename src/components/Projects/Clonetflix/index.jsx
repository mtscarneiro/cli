import React from "react";

const Clonetflix = () => {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"} </span> cd clonetflix/
      </div>
      <div className="commands--ls">
        <ul>
          <li style={{ fontWeight: "bold", color: "beige"}}>public/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>src/</li>
          <li>.gitignore</li>
          <li>yarn.lock</li>
          <li>README.md</li>
        </ul>
        <br /> <br />
      </div>
    </>
  );
};

export default Clonetflix;
