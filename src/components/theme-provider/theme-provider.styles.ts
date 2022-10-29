import styled from "styled-components";
import theme from "styled-theming";

export const themedBackgroundClip =
  "linear-gradient(30deg, rgb(67, 206, 162) 0%, rgb(24, 90, 157))";

export const themedStaticPrimaryColor = theme("theme", {
  light: "#43cea2",
  dark: "#43cea2",
});

export const themedMainNavTextColor = theme("theme", {
  light: "#4a4752",
  dark: "#43cea2",
});

// Button color: theme
export const themedButtonTextColor = theme("theme", {
  light: "#43cea2",
  dark: "#43cea2",
});

// Button color: theme
export const themedButtonTextColor2 = theme("theme", {
  light: "#fff",
  dark: "#43cea2",
});

// Body/P/Li color: [theme]
export const themedParagraphColor = theme("theme", {
  light: "#3c3e41",
  dark: "#c4cfde",
});

// H1-H6 color: [theme]
export const themedHeadingColor = theme("theme", {
  light: "#777",
  dark: "#fff",
});

// export const themedGradientBackgroundColor = theme("theme", {
//   light: "linear-gradient(165deg,#fff 50%,#edebeb 80%)",
//   dark: "linear-gradient(145deg,#1e2024,#23272b)",
// });

export const themedBackgroundColor = theme("theme", {
  light: "#ECF0F3",
  dark: "#212428",
});

//Timeline border-color: [theme]
export const themedTimelineColor = theme("theme", {
  light: "#d9dee2",
  dark: "#17191c",
});

//Gradient background: [theme]
export const themedGradientBackgroundColor = theme("theme", {
  light: "linear-gradient(145deg, #e2e8ec, #ffffff)",
  dark: "linear-gradient(145deg,#1e2024,#23272b)",
});

//Hover Gradient background: [theme]
//light: "linear-gradient(145deg, #6a67ce, #fc636b)",
export const themedGradientBackgroundColor2 = theme("theme", {
  light: "linear-gradient(221deg, #43cea2 0%, #185a9d)",
  dark: "linear-gradient(to right bottom, #212428, #16181c)",
});

//Box Shadow background: [theme]
export const themedBoxShadow = theme("theme", {
  light: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
  dark: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
});

// export const themedBoxShadowV2 = theme("theme", {
//   dark: "linear-gradient(to right bottom, #212428, #16181c)"
// })
//dark: "0 20px 20px #1c1d21",

//IMG backface bg: [theme]
export const themedImageBackfaceBG = theme("theme", {
  light: "none",
  dark: "#FFF",
});

//Border top-color: [theme]
export const themedBorderColor = theme("theme", {
  light: "#dce1e4",
  dark: "#121415",
});
