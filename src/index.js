import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";

import "./styles.css";

import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
