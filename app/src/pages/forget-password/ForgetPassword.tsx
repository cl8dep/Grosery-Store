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
import ServerManager from '../../apis/axios/ServerManager';

function ForgetPassword(props: ForgetPasswordProps) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const performRequest = () => {
    setIsLoading(true);
    props.serverManager.forgetPassword(email)
      .then((response) => {
        //const {data} = response;
      })
      .catch((e: any) => {
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
          <TextField id="email"
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

          <div className={classes.creatingButtonContainer}>
            {isLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Button onClick={() => performRequest()}
                      disabled={email.length === 0}
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.createAccountButton}>
                Create your account
              </Button>
            )}
          </div>

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

interface ForgetPasswordProps {
  serverManager: ServerManager;

}

export default ForgetPassword;
