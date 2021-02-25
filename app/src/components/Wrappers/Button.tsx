import { useTheme } from '@material-ui/styles';
import { Button as ButtonBase, Theme } from '@material-ui/core';
import React from 'react';
import { createStyled, getColor } from './Utils';

function Button(props: any) {
  const { children, color, ...rest } = props;
  const theme = useTheme() as Theme;

  const Styled = createStyled({
    button: {
      backgroundColor: getColor(color, theme),
      boxShadow: theme.shadows[2],
      color: 'white',
      '&:hover': {
        backgroundColor: getColor(color, theme, 'light'),
        boxShadow: theme.shadows[3],
      },
    },
  });


  return (
    <Styled>
      {({ classes }: any) => (
        <ButtonBase classes={{ root: classes.button }} {...rest}>
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
}

export default Button;
