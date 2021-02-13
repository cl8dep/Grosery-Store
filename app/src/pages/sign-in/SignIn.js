import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import useStyles from "./styles";

import logo from "./logo.svg";
import google from "../../images/google.svg";

function SignIn(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Groceries Store</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h3" className={classes.greeting}>
            Sign in to Groceries Store
          </Typography>
          <Button size="large" className={classes.googleButton}>
            <img src={google} alt="google" className={classes.googleIcon} />
            &nbsp;Sign in with Google
          </Button>
          <div className={classes.formDividerContainer}>
            <div className={classes.formDivider} />
            <Typography className={classes.formDividerWord}>or</Typography>
            <div className={classes.formDivider} />
          </div>
          <TextField
            id="email"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            margin="normal"
            placeholder="Email Address"
            type="email"
            fullWidth/>
          <TextField
            id="password"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            margin="normal"
            placeholder="Password"
            type="password"
            fullWidth
          />
          <div className={classes.formButtons}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
              <Button
                disabled={
                  emailValue.length === 0 || passwordValue.length === 0
                }
                variant="contained"
                color="primary"
                size="large">
                Sign in
              </Button>
            )}
            <Button
              color="primary"
              size="large"
              className={classes.forgetButton}>
              Forget Password
            </Button>
          </div>
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-2021 Groceries Store Inc. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(SignIn);
