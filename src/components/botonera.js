import React from "react";
import "./botonera.css";
import * as ColorAppActions from "../actions/ColorappActions";

const Botonera = (props) => {
  const buttonClick = (color) => {
    ColorAppActions.changeColor(color);
  };
  return (
    <div>
      <button onClick={() => buttonClick("#ff0000")}>Rojo</button>
      <button onClick={() => buttonClick("#00ff00")}>Verde</button>
    </div>
  );
};

export default Botonera;
