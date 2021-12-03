import React, { Component } from "react";
import "./caja.css";
import ColorAppStore from "../stores/ColorappStore";

class Caja extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ColorAppStore.getActiveColor(),
    };
  }

  componentDidMount() {
    ColorAppStore.on("storeUpdated", this.updateColor);
  }

  componentWillUnmount() {
    ColorAppStore.removeListener("storeUpdated", this.updateColor);
  }

  updateColor = () => {
    this.setState({ color: ColorAppStore.getActiveColor() });
  };

  render() {
    return (
      <div>
        <div
          className="caja-color"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </div>
    );
  }
}

export default Caja;
