import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

import useStyles from "./styles";

import logo from "./logo.svg";
import google from "../../images/google.svg";
import { useServerManager } from '../../components/ServerManagerProvider';

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
      </div>
    </Grid>
  );
}

export default SignIn;
