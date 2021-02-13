import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import useStyles from "./styles";

import logo from "./logo.svg";
import google from "../../images/google.svg";
import { useServerManager } from '../../components/AxiosProvider/ServerManagerProvider';

function SignUp(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const serverManager = useServerManager();

  const performRequest = () => {
    setIsLoading(true);
    serverManager.signUp({
      firstName,
      lastName,
      email,
      password
    })
      .then(response => {
        const {data} = response;
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };


  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Groceries Store</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h2" className={classes.greeting}>
            Welcome!
          </Typography>
          <Typography variant="h3" className={classes.subGreeting}>
            Create your account
          </Typography>
          <TextField
            id="name"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            margin="normal"
            placeholder="First name"
            type="text"
            fullWidth/>
          <TextField
            id="lastName"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            margin="normal"
            placeholder="Last name"
            type="text"
            fullWidth/>
          <TextField
            id="email"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
            placeholder="Password"
            type="password"
            fullWidth
          />
          <div className={classes.creatingButtonContainer}>
            {isLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Button onClick={() => performRequest()}
                      disabled={
                        email.length === 0 ||
                        password.length === 0 ||
                        firstName.length === 0 ||
                        lastName.length === 0
                      }
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.createAccountButton}>
                Create your account
              </Button>
            )}
          </div>
          <div className={classes.formDividerContainer}>
            <div className={classes.formDivider} />
            <Typography className={classes.formDividerWord}>or</Typography>
            <div className={classes.formDivider} />
          </div>
          <Button
            size="large"
            className={classnames(
              classes.googleButton,
              classes.googleButtonCreating,
            )}>
            <img src={google} alt="google" className={classes.googleIcon} />
            &nbsp;Sign up with Google
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(SignUp);
