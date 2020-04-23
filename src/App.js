import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import World from "./pages/World";
import India from "./pages/India";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/world" component={World}></Route>
          <Route exact path="/india" component={India}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
