import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import ErrorPage from "./components/ErrorPage"

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
      </nav>
        <Switch>
          <Route exact path={["/","/lobby=:id"]} component={Home} />
          <Route exact path={["/lobby"]} component={Lobby} />
          <Route path={["*"]} component={ErrorPage} />
        </Switch>
    </div>
  );
};

export default App;
