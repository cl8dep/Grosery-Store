import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Button } from '@material-ui/core';
import useStyles from './styles';
import { useServerManager } from '../ServerManagerProvider';

function GoogleButton(props: GoogleButtonProps) {

  const classes = useStyles();

  const serverManager = useServerManager();

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in response) {
      serverManager.googleAuth({
        token: response.tokenId,
        create: props.createAccount ? props.createAccount : false
      })
        .then((r: any) => {
          console.log(r);
          const {data} = r;
          props.onSuccess(data)
        })
    }

  };

  const onFailure = (error: any) => {
    console.error(error)
  };

  return (
    <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                 render={props => (
                   <Button onClick={props.onClick} disabled={props.disabled}
                           size="large" className={classes.googleButton}>
                     <img src="/img/google.svg" alt="google" className={classes.googleIcon} />
                     &nbsp;Sign in with Google
                   </Button>
                 )}
                 redirectUri="https://localhost:4000/"
                 onSuccess={onSuccess}
                 onFailure={onFailure}
                 cookiePolicy={'single_host_origin'}/>
  )
}

interface GoogleButtonProps {
  createAccount?: boolean
  onSuccess: (data: any) => {}
}

export default GoogleButton;
