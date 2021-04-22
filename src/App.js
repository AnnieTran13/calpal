import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./WelcomePage/HomePage";
import Nav from "./Nav";
import Journal from "./Journal";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/journal" component={Journal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
