import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import India from "./pages/India";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/india" component={India}></Route>
      </Switch>
    </Router>
  );
};

export default App;
