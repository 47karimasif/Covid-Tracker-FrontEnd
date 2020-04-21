import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./componets/Home";
import Navbar from "./componets/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
