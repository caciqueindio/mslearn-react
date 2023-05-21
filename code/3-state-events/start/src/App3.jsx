import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return <h1>Product: {id}</h1>;
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/product/1">Product 1</Link>
          </li>
          <li>
            <Link to="/product/2">Product 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/product/:id" component={Product} />
      </Routes>
    </Router>
  );
};

export default App;
