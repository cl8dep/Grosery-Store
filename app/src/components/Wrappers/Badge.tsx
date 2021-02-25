import React from "react";
import {
  Badge as BadgeBase,
} from "@material-ui/core";

function Badge(props: BadgeProps) {

  const color = props.color ? props.color : "secondary";

  return (
    <BadgeBase badgeContent={props.content}
               color={color}>
      {props.children}
    </BadgeBase>
  );

}

interface BadgeProps {
  content?: number | undefined,
  children: React.ReactNode,
  color?: 'primary' | 'secondary' | 'default' | 'error' | undefined
}

export default Badge;


