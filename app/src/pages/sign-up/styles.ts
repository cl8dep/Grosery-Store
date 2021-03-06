import { makeStyles } from "@material-ui/styles";
import { Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    backgroundImage: 'url(/img/shopping-cart-wallpaper.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  backDrop: {
    position: 'absolute',
    opacity: '0.9',
    width: "60%",
    height: "100%",
    backdropFilter: 'blur(30px)',
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
    zIndex: 9999,
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    zIndex: 9999,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: 'auto',
    paddingTop: '3%',
    paddingBottom: '5%',
    [theme.breakpoints.down("md")]: {
      width: "50%",
      overflowY: 'initial !important',
      paddingBottom: '5%',
    },
  },
  form: {
    width: 350,
    [theme.breakpoints.down("md")]: {
      boxShadow: theme.shadows[1],
      padding: 15,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '4px'
    },
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  subGreeting: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  googleButton: {
    marginTop: 0,
    boxShadow: theme.shadows[2],
    backgroundColor: "white",
    width: "100%",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      boxShadow: theme.shadows[0],
    },
  },
  googleIcon: {
    width: 30,
    marginRight: theme.spacing(2),
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    height: 46,
    textTransform: "none",
  },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    textAlign: "center",
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.paper,
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(2),
    },
  },
}));
