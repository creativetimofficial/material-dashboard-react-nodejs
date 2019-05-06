import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import registerPageStyle from "assets/jss/material-dashboard-react/views/registerPageStyle.jsx";

const { REACT_APP_SERVER_URL } = process.env;

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errors: {}
    };
  }
  register = async e => {
    e.preventDefault();

    const { history } = this.props;

    const fields = ["name", "username", "password"];
    const formElements = e.target.elements;

    const formValues = fields
      .map(field => ({
        [field]: formElements.namedItem(field).value
      }))
      .reduce((current, next) => ({ ...current, ...next }));

    let registerRequest;
    try {
      registerRequest = await axios.post(
        `http://${REACT_APP_SERVER_URL}/register`,
        {
          ...formValues
        }
      );
    } catch ({ response }) {
      registerRequest = response;
    }
    const { data: registerRequestData } = registerRequest;
    if (registerRequestData.success) {
      return history.push("/login");
    }

    this.setState({
      errors:
        registerRequestData.messages && registerRequestData.messages.errors
    });
  };
  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form onSubmit={this.register}>
              <Card className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="primary"
                >
                  <h4 className={classes.cardTitle}>Register</h4>
                  <div className={classes.socialLine}>
                    {[
                      "fa fa-facebook-square",
                      "fa fa-twitter",
                      "fa fa-google-plus"
                    ].map((prop, key) => {
                      return (
                        <Button
                          color="transparent"
                          justIcon
                          key={key}
                          className={classes.customButtonClass}
                        >
                          <i className={prop} />
                        </Button>
                      );
                    })}
                  </div>
                </CardHeader>
                <CardBody>
                  <p className={classes.cardDescription}>Or Be Classical</p>
                  <CustomInput
                    labelText="Name..."
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "name",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    error={errors.username}
                    inputProps={{
                      required: true,
                      type: "email",
                      name: "username",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    error={errors.password}
                    inputProps={{
                      required: true,
                      name: "password",
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                  <FormControlLabel
                    classes={{
                      root:
                        classes.checkboxLabelControl +
                        " " +
                        classes.checkboxLabelControlClassName,
                      label: classes.checkboxLabel
                    }}
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        required
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot
                        }}
                      />
                    }
                    label={
                      <span>
                        I agree with the <a href="#pablo">Privacy Policy</a>.
                      </span>
                    }
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button type="submit" color="primary" simple size="lg" block>
                    Let's Go
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withStyles(registerPageStyle)(RegisterPage);
