import React from "react";

const Yarn = () => {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"} </span> yarn dev
      </div>
      <div>

        yarn run v16 <br />
        react-scripts start <br /> 
        <br /> <br />
        <a href="https://elegant-bartik-c6473a.netlify.app/"target={"_blank"} rel={"noreferrer"}>Functional app</a>
        <br /> <br /> <br /> 
        <a href="https://github.com/mtscarneiro/clonetflix" target={"_blank"} rel={"noreferrer"}>GitHub Repo link</a>
      </div>
      <br /> <br />
    </>
  );
};

export default Yarn;