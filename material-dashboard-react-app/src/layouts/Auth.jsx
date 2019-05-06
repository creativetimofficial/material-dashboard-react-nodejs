import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import Footer from "components/Footer/AuthFooter.jsx";

import routes from "routes.js";

import pagesStyle from "assets/jss/material-dashboard-react/layouts/authStyle.jsx";

import register from "assets/img/register.jpeg";
import login from "assets/img/login.jpeg";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }
  getBgImage = () => {
    if (window.location.pathname.indexOf("/auth/register-page") !== -1) {
      return register;
    } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return login;
    }
  };
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <AuthNavbar brandText={this.getActiveRoute(routes)} {...rest} />
        <div className={classes.wrapper}>
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + this.getBgImage() + ")" }}
          >
            {switchRoutes}
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
