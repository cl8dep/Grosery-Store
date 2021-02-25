import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Theme } from '@material-ui/core';


export default makeStyles((theme: Theme) => ({
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  profileMenuItem: {
    color: theme.palette.text.primary,
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.light,
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
