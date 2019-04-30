import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import HouseCarousel from "./components/HouseCarousel";
import Marketing from "./components/Marketing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu placement="top" />
        <HouseCarousel />
        <Marketing />

        <Menu placement="bottom" />
      </div>
    );
  }
}

export default App;
