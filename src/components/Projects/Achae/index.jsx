import React from "react";

const Achae = () => {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"} </span> cd Achae/
      </div>
      <div className="commands--ls">
        <ul>
          <li>achae.py</li>
          <li>setup.py</li>
        </ul>
        <br /> <br />
      </div>
    </>
  );
};

export default Achae;
