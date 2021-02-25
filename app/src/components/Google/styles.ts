import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

export default useStyles;
