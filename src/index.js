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
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home/" component={Home} />
          <Route exact path="/content/" component={Content} />
          <Route exact path="/journals/" component={Journals} />
          <Route exact path="/notifications/" component={Notifications} />
          <Route exact path="/search/:data" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
