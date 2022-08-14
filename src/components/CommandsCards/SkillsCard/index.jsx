import React from "react";

export default function SkillCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ {">"} </span> cat skills.json
      </div>
      <br />
      <div>
        {
          `
          {
            "skills": [
              {
                "name": "SCA",
                "description": "Software Composition Analysis (SCA) is an application security methodology for managing open source components.",
                "tools": [ "Snyk", "OpenSCA-cli" ]
              },
              {
                "name": "SAST",
                "description": "Static application security testing (SAST) is used to secure software by reviewing the source code of the software to identify sources of vulnerabilities.",
                "tools": [ "SonarCloud", "MicroFocus Fortify", "SemGrep" ]
              },
              {
                "name": "DAST",
                "description": "A dynamic application security testing (DAST) is a non functional testing process where one can assess an application using certain techniques and the end result of such testing process covers security weaknesses and vulnerabilities present in an application. This testing process can be carried out either in manual way or by using automated tools.",
                "tools": [ "OWASP ZAP", "Burp Suite" ]
              },
              {
                "name": "Pentesting",
                "description": "A penetration test, colloquially known as a pen test or ethical hacking, is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system",
                "tools": [ "Burp Suite", "metaXploit", "sqlmap", "nmap", "..." ]
              }
            ]
          }
          
          `
        }
      </div>
    </>
  );
}
