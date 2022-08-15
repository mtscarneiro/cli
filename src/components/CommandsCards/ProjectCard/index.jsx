import React from "react";

export default function ProjectCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ {'>'} </span> cd projects/
      </div>
      <div className="commands--ls">
        <ul>
          <li style={{ fontWeight: "bold", color: "beige"}}>uuidExporter/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>Achae/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>clonetflix/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>cli-portfolio/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>pentest-nike2022/</li>
          {/* <li style={{ fontWeight: "bold", color: "beige"}}>nike-transactional-emails/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>centauro-whatsapp-nps/</li>
          <li style={{ fontWeight: "bold", color: "beige"}}>vulnerability-management/</li> */}
          <li>flag</li>
        </ul>
        <br /> <br />
      </div>
      <br />
    </>
  );
}
