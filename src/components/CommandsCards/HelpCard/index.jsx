import React from 'react'

export default function HelpCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ {'>'}</span> help
      </div>
      <div className="commands--ls">
        <ul>
        <br />
        <br />
          <li>help:   <span>show all commands</span></li>       <br /> <br />
          <li>cd:     <span>open a folder    </span></li>       <br /> <br />
          <li>ls:     <span>list all folders </span></li>       <br /> <br />
          <li>clear:  <span>clear console    </span></li>       <br /> <br />
        </ul>
      </div>
    </>
  )
}
