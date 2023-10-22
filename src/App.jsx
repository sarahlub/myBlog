import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from './components/topbar/TopBar';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Posts from "./components/posts/Posts";

import "./style.css";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/setting">
          {currentUser ? <Setting /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
