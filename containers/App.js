import React, { Component } from "react";
import Root from "../components/Root";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import User from '../components/User';
import Contact from '../components/User';

export default class App extends Component {
  render() {
    return (
      <Root>
        {/* <Router>
          <div>
            <Route path="/" component={App} />
            <Route path="/users" component={User} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router> */}
        <div>Hell   lo wrold</div>
      </Root>
    );
  }
}
