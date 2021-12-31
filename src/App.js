import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Sign-Up";
import Success from "./components/Succesful";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/signup" />
                </Route>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/success" component={Success} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
