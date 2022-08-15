import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import WhoAmI from "../CommandsCards/WhoAmI";
import HelpCard from "../CommandsCards/HelpCard";
import ListFolders from "../CommandsCards/ListFoldersCard";
import ProjectCard from "../CommandsCards/ProjectCard";
import SkillCard from "../CommandsCards/SkillsCard";
import Flag from "../Projects/Flag";
import "./style.css";
import Achae from "../Projects/Achae";
import UuidExporter from "../Projects/UuidExporter";
import Python from "../Actionables/Python";
import Java from "../Actionables/Java";
import Clonetflix from "../Projects/Clonetflix";
import Yarn from "../Actionables/Yarn";
import PentestNike from "../Projects/PentenstNike";

const Input = ({ commands, addCommand }) => {
  const [inputText, setInputText] = useState();

  const clearConsole = () => {
    addCommand([]);
    setInputText("");
  };

  const changeDirectoryToProjects = () => {
    addCommand([...commands, <ProjectCard />]);
    setInputText("");
  };

  const desiredCommand = (inputText) => {
    switch (inputText) {
      case "clear":
        clearConsole();
        break;
      case "cd projects":
        changeDirectoryToProjects();
        setInputText("");
        break;
      case "cd Achae":
        addCommand([...commands, <Achae />]);
        setInputText("");
        break;
      case "python3 achae.py":
        addCommand([...commands, <Python />]);
        setInputText("");
        break;
      case "cd uuidExporter":
        addCommand([...commands, <UuidExporter />]);
        setInputText("");
        break;
      case "java uuidExporter.java":
        addCommand([...commands, <Java />]);
        setInputText("");
        break;
      case "cd clonetflix":
        addCommand([...commands, <Clonetflix />]);
        setInputText("");
        break;
      case "yarn dev":
        addCommand([...commands, <Yarn />]);
        setInputText("");
        break;
      case "cat README.md":
        addCommand([
          ...commands,
          "\n\n$> cat README.md \n\n",
          <div>#Run yarn dev</div>,
        ]);
        setInputText("");
        break;
      case "cd pentest-nike2022":
        addCommand([...commands, <PentestNike />]);
        setInputText("");
        break;
      case "cat skills.json":
        addCommand([...commands, <SkillCard />]);
        setInputText("");
        break;
      case "whoami":
        addCommand([...commands, <WhoAmI />]);
        setInputText("");
        break;
      case "cat flag":
        addCommand([...commands, <Flag />]);
        setInputText("");
        break;
      case "help":
        addCommand([...commands, <HelpCard />]);
        setInputText("");
        break;
      case "ls":
        addCommand([...commands, <ListFolders />]);
        setInputText("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    desiredCommand(inputText);

    const commandsDiv = document.getElementById("commands");
    commandsDiv.scrollTop = commandsDiv.scrollHeight;
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
          id="textId"
          autoComplete="off"
        />
        <button type="submit" className="input--submit" onClick={handleSubmit}>
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default Input;
