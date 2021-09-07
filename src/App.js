import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Post from "./components/Post";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
          <Route component={Post} path="/post" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Project} path="/project" />
        </Switch>
      </NavBar>
    </Router>
  );
}

export default App;
