import { Theme, withStyles } from '@material-ui/core';
import { DefaultTheme } from '@material-ui/styles';

export function getColor(color: "primary" | "secondary", theme: Theme | DefaultTheme, brightness = "main") {
  // @ts-ignore
  if (color && theme.palette[color] && theme.palette[color][brightness]) {
    // @ts-ignore
    return theme.palette[color][brightness];
  }
}

export function getFontWeight(style: any) {
  switch (style) {
    case "light":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 600;
    default:
      return 400;
  }
}

export function getFontSize(size: any, variant = "", theme: Theme | DefaultTheme) {
  let multiplier;

  switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  // @ts-ignore
  const defaultSize = variant && theme.typography[variant]
    // @ts-ignore
      ? theme.typography[variant].fontSize
    // @ts-ignore
      : theme.typography.fontSize + 'px';

  return `calc(${defaultSize} * ${multiplier})`;
}

export function createStyled(props: any): any {
  const { styles, options } = props;
  const Styled = function(props: any): any {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled) as any;
}
