import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Person as AccountIcon } from '@material-ui/icons';
import cn from 'classnames'
import { Typography } from '../../../Wrappers';
import Account from '../../../../apis/bussines/types/Account';
import UserAvatar from '../../../UserAvatar';
import useStyles from './styles'

function AccountMenu(props: AccountMenuProps) {
  const [profileMenu, setProfileMenu] = useState<any>(null);

  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton
        aria-haspopup="true"
        color="inherit"
        className={classes.headerMenuButton}
        aria-controls="profile-menu"
        onClick={e => setProfileMenu(e.currentTarget)}>
        <AccountIcon classes={{ root: classes.headerIcon }} />
      </IconButton>

      <Menu id="profile-menu"
            open={Boolean(profileMenu)}
            anchorEl={profileMenu}
            onClose={() => setProfileMenu(null)}
            className={classes.headerMenu}
            classes={{ paper: classes.profileMenu }}
            disableAutoFocusItem>
        <div className={classes.profileMenuUser}>
          <UserAvatar name={props.account?.firstName}/>
          <Typography variant="h4" weight="medium" align="center">
            {props.account?.firstName}
          </Typography>
          <Typography className={classes.profileMenuLink}
                      color="primary"
                      align="center">
            {props.account?.email}
          </Typography>
        </div>
        <Link to="/app/me">
          <MenuItem className={cn(classes.profileMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} />
            Mi Cuenta
          </MenuItem>
        </Link>       
        <div className={classes.profileMenuUser}>
          <Typography className={classes.profileMenuLink}
                      color="primary" align="center"
                      onClick={() => props.actions.signOut()}>
            Salir
          </Typography>
        </div>
      </Menu>
    </React.Fragment>
  );
}

interface AccountMenuProps {
  account: Account,
  actions: any
}

export default AccountMenu;
