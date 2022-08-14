import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="header--logo">
        <AiFillCode />
      </div>
      <div className="header--socialmedia">
        <a href="https://github.com/mtscarneiro" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mtscarneiro23/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </header>
  );
}
