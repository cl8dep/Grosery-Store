import { useTheme } from '@material-ui/styles';
import { Typography as TypographyBase } from '@material-ui/core';
import React from 'react';
import { getColor, getFontSize, getFontWeight } from './Utils';

function Typography(props: any) {
  const {
    children,
    weight,
    size,
    colorBrightness,
    color,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
      }}
      {...rest}>
      {children}
    </TypographyBase>
  );
}

export default Typography;
