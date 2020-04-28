import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar";
import India from "./pages/India";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/india" component={India}></Route>
      </Switch>
    </Router>
  );
};

export default App;
