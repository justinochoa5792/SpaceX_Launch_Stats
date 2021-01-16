import React, { Component } from "react";
import logo from "./logo.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route } from "react-router-dom";

import Launches from "./component/Launches";
import Launch from "./component/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
