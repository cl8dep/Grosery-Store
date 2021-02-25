import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core";
import { Link, withRouter } from 'react-router-dom';

import useStyles from "./styles";

function SignUp(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const performRequest = () => {

    if (!settings?.enabled) {
      setError("The administrator has deactivated the creation of accounts.");
    } else {
      setIsLoading(true);
      props.serverManager.signUp({
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
    }
  };

  const settings = props.settings;

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <div className={classes.backDrop}/>
        <img src="/img/logo.svg" alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Groceries Store</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h2" className={classes.greeting}>
            Welcome!
          </Typography>
          <Typography variant="h5" className={classes.subGreeting}>
            Create your account
          </Typography>
          {(error) &&
          <Fade in={true}>
            <Typography color="error">
              {error}
            </Typography>
          </Fade>
          }
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
            placeholder="First name" label="First name"
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
            placeholder="Last name" label="Last name"
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
            placeholder="Email address" label="Email address"
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
            placeholder="Password" label="Password"
            type="password"
            fullWidth
          />
          <TextField
            id="password-confirmation"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
            margin="normal"
            placeholder="Password confirmation" label="Password confirmation"
            type="password"
            fullWidth/>
          <div className={classes.creatingButtonContainer}>
            {isLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Button onClick={() => performRequest()}
                      disabled={
                        firstName.length === 0 ||
                        lastName.length === 0 ||
                        email.length === 0 ||
                        password.length === 0 ||
                        passwordConfirmation.length === 0 ||
                        password !== passwordConfirmation
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
          {
            (settings?.enabledGoogleSignUp) &&
            <React.Fragment>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classes.googleButton}>
                <img src="/img/google.svg" alt="google" className={classes.googleIcon} />
                &nbsp;Sign up with Google
              </Button>
            </React.Fragment>
          }

          <div className={classes.formButtons}>
            <Button component={Link} to="/sign-in"
                    color="primary"
                    size="large"
                    className={classes.forgetButton}>
              Do you have an account? Sign in here
            </Button>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(SignUp);
