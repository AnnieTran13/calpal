import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import Journal from "./components/Journal/Journal";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={Profile} />
          <Route path="/journal" component={Journal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
