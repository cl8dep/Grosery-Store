import React from "react";
import { Theme } from '@material-ui/core';
import { useTheme } from "@material-ui/styles";
import { Typography } from "../Wrappers";
import useStyles from "./styles";

function UserAvatar(props: UserAvatarProps) {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const letters = props.name
    ? props.name
      .split(' ')
      .map(word => word[0])
      .join('')
    : "";

  const color = props.color ? props.color : "primary";

  return (
    <div className={classes.avatar}
         style={{ backgroundColor: theme.palette[color].main }}>
      <Typography className={classes.text}>
        {letters}
      </Typography>
    </div>
  );
}

class UserAvatarProps {
  color?: 'primary' = "primary";
  name: string | undefined = ""
}

export default UserAvatar;
