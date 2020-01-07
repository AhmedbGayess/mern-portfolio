import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";

ReactGA.initialize("UA-133565088-1");

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
