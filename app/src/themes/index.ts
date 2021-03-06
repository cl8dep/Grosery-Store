import { createMuiTheme } from "@material-ui/core";
import tinyColor from "tinycolor2";

const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;


const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: primary,
        light: tinyColor(primary)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinyColor(primary)
          .darken(darkenRate)
          .toHexString(),
      },
      secondary: {
        main: secondary,
        light: tinyColor(secondary)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinyColor(secondary)
          .darken(darkenRate)
          .toHexString(),
        contrastText: "#FFFFFF",
      },
      warning: {
        main: warning,
        light: tinyColor(warning)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinyColor(warning)
          .darken(darkenRate)
          .toHexString(),
      },
      success: {
        main: success,
        light: tinyColor(success)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinyColor(success)
          .darken(darkenRate)
          .toHexString(),
      },
      info: {
        main: info,
        light: tinyColor(info)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinyColor(info)
          .darken(darkenRate)
          .toHexString(),
      },
      text: {
        primary: "#4A4A4A",
        secondary: "#6E6E6E",
        hint: "#B9B9B9",
      },
      background: {
        default: "#F6F7FF",
        paper: "#FFFFFF",
      },
    },
     typography: {
      fontFamily: '"Google Sans", Roboto, Arial, sans-serif !important'
    },
    overrides: {
      MuiBackdrop: {
        root: {
          backgroundColor: "#4A4A4A1A",
        },
      },
      MuiMenu: {
        paper: {
          boxShadow:
            "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        },
      },
      MuiSelect: {
        icon: {
          color: "#B9B9B9",
        },
      },
      MuiListItem: {
        root: {
          "&$selected": {
            backgroundColor: "#F3F5FF !important",
            "&:focus": {
              backgroundColor: "#F3F5FF",
            },
          },
        },
        button: {
          "&:hover, &:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      MuiTouchRipple: {
        child: {
          backgroundColor: "white",
        },
      },
      MuiTableRow: {
        root: {
          height: 56,
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "1px solid rgba(224, 224, 224, .5)",
        },
        head: {
          fontSize: "0.95rem",
        },
        body: {
          fontSize: "0.95rem",
        },
      },
      MuiTypography: {
        h1: {
          fontSize: "3rem",
        },
        h2: {
          fontSize: "2rem",
        },
        h3: {
          fontSize: "1.64rem",
        },
        h4: {
          fontSize: "1.5rem",
        },
        h5: {
          fontSize: "1.285rem",
        },
        h6: {
          fontSize: "1.142rem",
        },
      },
    },
  }
);

/*
* custom shadows
* "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
*
* */

export default theme;
