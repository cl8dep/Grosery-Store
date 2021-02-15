import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import cn from "classnames";

// styles
import useStyles from "./styles";

import { Badge, Typography } from "../Wrappers/Wrappers";
import Notification from "../Notification/Notification";
import CartMenu from './components/CartMenu';

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today",
  },
];

export default function Header(props) {
  const classes = useStyles();

  const [notificationsMenu, setNotificationsMenu] = useState(null);
  const [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  const [profileMenu, setProfileMenu] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => props.actions.toggleDrawer()}
          className={cn(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}>
          {(props.isDrawerOpen) ? (
            <ArrowBackIcon
              classes={{
                root: cn(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: cn(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Groceries Store
        </Typography>
        <div className={classes.grow} />
        <div
          className={cn(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}>
          <div
            className={cn(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}>
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <CartMenu/>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}>
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color="warning">
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}>
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>

        <Menu id="notifications-menu"
              open={Boolean(notificationsMenu)}
              anchorEl={notificationsMenu}
              onClose={() => setNotificationsMenu(null)}
              className={classes.headerMenu}
              disableAutoFocusItem>
          {notifications.map(notification => (
            <MenuItem key={notification.id}
                      onClick={() => setNotificationsMenu(null)}
                      className={classes.headerMenuItem}>
              <Notification {...notification} typographyVariant="inherit" />
            </MenuItem>
          ))}
        </Menu>
        <Menu id="profile-menu"
              open={Boolean(profileMenu)}
              anchorEl={profileMenu}
              onClose={() => setProfileMenu(null)}
              className={classes.headerMenu}
              classes={{ paper: classes.profileMenu }}
              disableAutoFocusItem>
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium" align="center">
              {props.account?.firstName}
            </Typography>
            <Typography className={classes.profileMenuLink}
                        color="primary"
                        align="center">
              {props.account?.email}
            </Typography>
          </div>
          <MenuItem className={cn(classes.profileMenuItem, classes.headerMenuItem,)}>
            <AccountIcon className={classes.profileMenuIcon} />
            Mi Cuenta
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography className={classes.profileMenuLink}
                        color="primary" align="center"
                        onClick={() => props.actions.signOut()}>
              Salir
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
