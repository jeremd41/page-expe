import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Login from "./page/Login";
import Home from "./page/Home";
import Content from "./page/Content";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home/" component={Home} />
          <Route exact path="/content/" component={Content} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
