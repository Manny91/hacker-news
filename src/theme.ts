export const theme = {
  colors: {
    boldBlue: "#2a13bd",
    bolderBlue: "#14137d",
    coldBlue: "#4285f4",
    tealTitan: "#00ffff",
    almostWhite: "#f6f6f6",
    nearlyBlack: "#020202",
    lightGrey: "#f0f0f0",
  },
  media: {
    sm: `(max-width: 568px)`,
    md: `(max-width: 768px)`,
    lg: `(max-width: 992px)`,
    xl: `(max-width: 1366px)`,
    xxl: `(max-width: 1920px)`,
  },
  spacing: {
    xs: "5px",
    sm: "10px",
    md: "20px",
    lg: "30px",
    xl: "40px",
    xxl: "50px",
  },
  borders: {
    normal: "7px",
  },
};

export type Theme = typeof theme;
