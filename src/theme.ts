export const theme = {
  colors: {
    primary: "#2a13bd",
    secondary: "#4285f4",
    accent: "#00ffff",
    fill: "#f6f6f6",
  },
  media: {
    sm: `(min-width: 568px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 992px)`,
    xl: `(min-width: 1366px)`,
    xxl: `(min-width: 1920px)`,
  },
  spacing: {
    xs: "5px",
    sm: "10px",
    md: "20px",
    lg: "30px",
    xl: "40px",
    xxl: "50px",
  },
};

export type Theme = typeof theme;
