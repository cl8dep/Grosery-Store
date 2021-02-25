import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  avatar: {
    width: 65,
    height: 65,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  text: {
    color: "white",
    fontSize: '1.5rem !important',
  },
}));
