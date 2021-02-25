import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField, Fade,
} from '@material-ui/core';

import useStyles from "./styles";

import { useServerManager } from '../../components/ServerManagerProvider';
import { Link } from 'react-router-dom';
import GoogleButton from '../../components/Google';

function SignIn(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const serverManager = useServerManager();

  const performRequest = () => {
    setIsLoading(true);
    serverManager
      .signIn({
        email,
        password
      })
      .then(response => {
        const {data} = response;
        if (data) {
          props.actions.setAuthData(data);
          serverManager.refreshInstance();
          props.history.push("/app")
        }
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
        <div className={classes.backDrop}/>
        <img src="/img/logo.svg" alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Groceries Store</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h3" className={classes.greeting}>
            Welcome!
          </Typography>
          <Typography variant="h5" className={classes.subGreeting}>
            Enter your credentials to sign in to our store
          </Typography>
          {(error) &&
          <Fade in={true}>
            <Typography color="error">
              {error}
            </Typography>
          </Fade>
          }
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
            autoComplete="current-password"
            type="password"
            fullWidth/>

          <div className={classes.formButtons}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
              <Button onClick={() => performRequest()}
                      disabled={
                        email.length === 0 || password.length === 0
                      }
                      variant="contained"
                      color="primary"
                      size="large" fullWidth>
                Sign in
              </Button>
            )}
          </div>

          <div className={classes.formDividerContainer}>
            <div className={classes.formDivider} />
            <Typography className={classes.formDividerWord}>or</Typography>
            <div className={classes.formDivider} />
          </div>

          <GoogleButton/>

          <div className={classes.formButtons}>
            <Button component={Link} to="/forget-password"
              color="primary"
              size="large"
              className={classes.forgetButton}>
              Forget Password
            </Button>
            <Button component={Link} to="/sign-up"
              color="primary"
              size="large"
              className={classes.forgetButton}>
              Create new account
            </Button>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default SignIn;
