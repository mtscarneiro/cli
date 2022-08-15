import React from "react";

export default function WhoAmI() {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"}</span> whoami
      </div>
      <div className="commands--about">
        <h2 style={{color:"red"}}>root</h2>
        <br />
        <p>
          Experienced as Full Stack Developer and AppSec Engineer with back-end
          knowledgment in frameworks Spring with Java and/or Kotlin, .NET with
          Entity Framework and NodeJS. Front-end experiences are ReactJS and/or
          Next JS. Capable of DevOps ambience with git for version control,
          Docker, Kubernetes, Azure, AWS, GCP and Terraform. XP with routine
          automatization with Shell Script and/or Python; Installation,
          configuration and administration of UNIX servers.
        </p>
        <br /><br /><br />
        <h2>Contact me{">"}</h2>
        <ul>
          <li>Email: matheus.carneiro.dev@gmail.com</li>
        </ul>
      </div>
    </>
  );
};
