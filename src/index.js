import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Login from "./page/Login";
import Home from "./page/Home";
import Content from "./page/Content";
import Journals from "./page/Journals";
import Notifications from "./page/Notifications";
import Search from "./page/Search";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route push exact path="/" component={Login} />
          <Route push exact path="/home/" component={Home} />
          <Route push exact path="/content/:article" component={Content} />
          <Route push exact path="/journals/" component={Journals} />
          <Route push exact path="/notifications/" component={Notifications} />
          <Route push exact path="/search/:data" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
