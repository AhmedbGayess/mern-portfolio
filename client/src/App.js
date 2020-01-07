import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import "./App.css";

import configureStore from "./store/configureStore";
import setAuthToken from "./lib/setAuthToken";
import { setCurrentUser, logout } from "./store/actions/auth";
import AppRouter from "./router/AppRouter";

const store = configureStore();

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(setCurrentUser(localStorage.token));
  const decoded = jwt_decode(localStorage.token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ahmed Ben Gayess | Full-Stack Web Developer</title>
          <meta
            property="og:image"
            content={require("./images/keyboard.jpg")}
          />
          <meta
            property="twitter:image"
            content={require("./images/keyboard.jpg")}
          />
        </Helmet>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
