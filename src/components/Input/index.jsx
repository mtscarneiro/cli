import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import AboutCard from "../CommandsCards/AboutCard";
import HelpCard from "../CommandsCards/HelpCard";
import ListFolders from "../CommandsCards/ListFoldersCard";
import ProjectCard from "../CommandsCards/ProjectCard";
import SkillCard from "../CommandsCards/SkillsCard";
import "./style.css";

const performChangeDirectory = (commands, addCommand, directory, setInputText) => {
  if (directory == 'skills') {
    addCommand([
      ...commands,
      <SkillCard />
    ])
    setInputText("")
  } else if (directory == 'projects') {
    addCommand([
      ...commands,
      <ProjectCard />
    ])
    setInputText("")
  } else if (directory == 'about') {
    addCommand([
      ...commands,
      <AboutCard />
    ])
    setInputText("")
  }
}

const Input = ({ commands, addCommand }) => {
  const [inputText, setInputText] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputArray = inputText.split(' ')

    if (inputArray[0] == 'cd') {
      performChangeDirectory(commands, addCommand, inputArray[1], setInputText)
    }

    switch (inputText) {
      case "clear":
        addCommand([]);
        setInputText("");
        break;
      case "ls":
        addCommand([...commands, <ListFolders />]);
        setInputText("");
        break;
      case "help":
        addCommand([...commands, <HelpCard />]);
        setInputText("");
        break;
      default:
        break;
    }

    const commandsDiv = document.getElementById("commands");
    commandsDiv.scrollTop = commandsDiv.scrollHeight
  };
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div className="input">
      <span>$</span>
      <form className="input--form">
        <input
          placeholder="Digite help para saber todos os comandos"
          value={inputText}
          onChange={handleChange}
          className="input--command"
        />
        <button type="submit" className="input--submit" onClick={handleSubmit}>
          <IoSend />
        </button>
      </form>
    </div>
  );
}

export default Input