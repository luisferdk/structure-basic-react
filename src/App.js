import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}