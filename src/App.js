import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import StinsonBeach from "./components/pages/StinsonBeach";
import Bolinas from "./components/pages/Bolinas";
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/stinson-beach-property-management"
              component={StinsonBeach}
            />
            <Route exact path="/stinson" component={StinsonBeach} />
            <Route
              exact
              path="/bolinas-property-management"
              component={Bolinas}
            />
            <Route
              exact
              path="/bolinas"
              component={<Link to="/bolinas-property-management" />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
