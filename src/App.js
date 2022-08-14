import Header from "./components/Header";
import './App.css';
import Input from "./components/Input";
import Commands from "./components/Commands";
import { useState } from "react";

function App() {
  const [command, setCommand] = useState([]);
  return (
    <div className="page">
      <Header />
      <Commands commands={command} />
      <Input commands={command} addCommand={setCommand} />
    </div>
  );
}

export default App;
