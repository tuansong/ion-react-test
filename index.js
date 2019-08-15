import React from "react";
import ReactDOM from "react-dom";

// main app
import App from "./containers/App";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import User from "./components/User";
import Contact from "./components/Contact";

class Test extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <div className="text-center">
            <h1>I-ON Communications Code Test</h1>
            <p>
              This challenge contains 3 tests. Complete the tests and share us
              your GIT repository.
            </p>
            <h4>Test Pages Links</h4>
            <ul className="test-list">
              <li>
              <Link to="/test1">Test - 1</Link>
              </li>
              <li>
              <Link to="/test2">Test - 2</Link>
              </li>
              <li>
              <Link to="/test3">Test - 3</Link>
              </li>
              <li>
              <Link to="/test4">Test - 4</Link>
              </li>
            </ul>
          </div>
          <Route path="/users" component={User} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("app"));
