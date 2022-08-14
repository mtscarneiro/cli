import React from "react";

import "./style.css";

export default function Commands({ commands }) {
  const scrollBottom = () => {
    setTimeout(() => {
      const divv = document.getElementById("commands");
      divv.scrollTop = divv.scrollHeight;
    }, 1)
  }
  return (
      <div className="commands" id="commands">
        {commands.map((item, key) => {
          scrollBottom();
          return item;
        })}
      </div>
  );
}
