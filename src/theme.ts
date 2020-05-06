import { css } from "styled-components";

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
  typography: {
    h1: css`
      font-size: 27px;
      font-weight: 500;
    `,
    h2: css`
      font-size: 22px;
      font-weight: 300;
    `,
    h3: css`
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
    `,
    h4: css`
      font-size: 18px;
      font-weight: 300;
      line-height: 26px;
    `,
    link: css`
      font-size: 15px;
      font-weight: 500;
    `,
  },
};

export type Theme = typeof theme;
