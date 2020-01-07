import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import Navbar from "../components/layout/Nav";
import Home from "../pages/Home";
import Footer from "../components/layout/Footer";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import LoginPage from "../pages/Login";

import Post from "../pages/Post";
import Posts from "../pages/Posts";
import MobileNav from "../components/layout/MobileNav";

import Portfolio from "../pages/Portfolio";
import AdminRouter from "./AdminRouter";

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const scroll = () => {
  window.scrollTo(0, 0);
};

class AppRouter extends React.Component {
  state = {
    mobileNavOpen: false
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  onToggleMobileNav = () => {
    this.setState((prevState) => ({ mobileNavOpen: !prevState.mobileNavOpen }));
  };

  render() {
    return (
      <Router history={history}>
        <MobileNav
          onClose={this.onToggleMobileNav}
          open={this.state.mobileNavOpen}
        />
        <Route
          path={["/about", "/contact", "/post/:id", "/blog", "/portfolio"]}
          render={() => <Navbar onOpen={this.onToggleMobileNav} />}
          exact
        />
        <Switch>
          <Route
            path="/"
            render={() => {
              scroll();
              return <Home onOpen={this.onToggleMobileNav} />;
            }}
            exact
          />
          <Route
            path="/about"
            render={() => {
              scroll();
              return <AboutPage />;
            }}
            exact
          />
          <Route
            path="/contact"
            render={() => {
              scroll();
              return <ContactPage />;
            }}
            exact
          />
          <Route path="/admin-login" component={LoginPage} exact />
          <Route path="/blog" component={Posts} exact />
          <Route path="/post/:id" component={Post} exact />
          <Route
            path="/portfolio"
            render={() => {
              scroll();
              return <Portfolio />;
            }}
            exact
          />
          <Route path="/admin" component={AdminRouter} />
        </Switch>
        <Route
          path={["/", "/about", "/contact", "/post/:id", "/blog", "/portfolio"]}
          component={Footer}
          exact
        />
      </Router>
    );
  }
}

export default AppRouter;
