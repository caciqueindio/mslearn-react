import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const App = () => {
  return (
    <Router>
      {" "}
      <nav>
        {" "}
        <ul>
          {" "}
          <li>
             <Link to="/">Home</Link>
            {" "}
          </li>
          {" "}
          <li>
             <Link to="/about">About</Link>
            {" "}
          </li>
          {" "}
        </ul>
        {" "}
      </nav>
      {" "}
      <Routes>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
        {" "}
      </Routes>
      {" "}
    </Router>
  );
};

export default App;
