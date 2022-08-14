import React from "react";
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="header--logo">
        <AiFillCode />
      </div>
      <div className="header--socialmedia">
        <a href="https://github.com/mtscarneiro" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mtscarneiro23/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </header>
  );
}
