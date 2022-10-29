import styled from "styled-components";
import theme from "styled-theming";

export const themedMainNavTextColor = theme("theme", {
  light: "#4a4752",
  dark: "#43cea2",
});
export const themedButtonTextColor = theme("theme", {
  light: "#000",
  dark: "#43cea2",
});

export const themedParagraphColor = theme("theme", {
  light: "#777",
  dark: "#c4cfde",
});

export const themedHeadingColor = theme("theme", {
  light: "#777",
  dark: "#fff",
});

export const themedGradientBackgroundColor = theme("theme", {
  light: "linear-gradient(165deg,#fff 50%,#edebeb 80%)",
  dark: "linear-gradient(145deg,#1e2024,#23272b)",
});

export const themedBackgroundColor = theme("theme", {
  light: "#f8f8f8",
  dark: "#26282c",
});

export const themedBoxShadow = theme("theme", {
  light: "2px 2px 15px #d8d5d5",
  dark: "0 20px 20px #1c1d21",
});
