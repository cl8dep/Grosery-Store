import React from 'react';
import { useTheme } from '@material-ui/styles';
import cn from 'classnames';
import useStyles from './styles';
import { Theme } from '@material-ui/core';

export default function Dot(props: DotProps) {

  const {size, color} = props;
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <div
      className={cn(classes.dotBase, {
        [classes.dotLarge]: size === "large",
        [classes.dotSmall]: size === "small",
      })}
      style={{
        backgroundColor:
          color && theme.palette[color] && theme.palette[color].main,
      }}
    />
  );
}

interface DotProps {
  size: any,
  color: "primary" | "secondary" | "info" | "error" | "warning"
}
