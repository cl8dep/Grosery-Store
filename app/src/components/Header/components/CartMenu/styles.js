
export const styles = (theme) => ({
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  headerMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  profileMenuLink: {
    fontSize: 14,
    textDecoration: "none",
  },
  cartItem: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    borderBottom: '1px solid #bdbdbd4f',
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },
  cartItemBody: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  cartItemName: {
    fontSize: '1rem !important',
  },
  cartItemDetails: {
    alignItems: "flex-start",
    marginRight: 0,
    textAlign: 'right',
  },
  cartSubtotal: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    textAlign: "right",
    fontWeight: 600,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: "none",
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  emptyBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: .7,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  emptyBodyIcon: {
    color: theme.palette.secondary.main
  },
  emptyBodyLink: {

  },
  progressBar: {
    width: '25px',
    height: '25px',
  }
});
