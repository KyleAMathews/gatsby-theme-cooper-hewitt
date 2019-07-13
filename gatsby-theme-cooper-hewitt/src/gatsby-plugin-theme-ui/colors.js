import gray from "gray-percentage";

const blue60 = `#3A69A8`;
const purple30 = `#D9BAE8`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightGreen = `hsla(88, 53%, 80%, 0.5)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;

export default {
  text: gray(25),
  background: white,
  primary: blue60,
  secondary: gray(20),
  muted: gray(80),
  highlight: opaqueLightGreen,
  heading: gray(10),
  prism: {
    background: gray(96),
    comment: `#7D8B99`,
    string: `#2f9c0a`,
    var: `#a67f59`,
    number: `#c92c2c`,
    constant: `#2f9c0a`,
    punctuation: `#5F6364`,
    className: `#1990b8`,
    tag: `#1990b8`,
    boolean: `#c92c2c`,
    property: `#c92c2c`,
    namespace: `#c92c2c`
    // highlight: `hsla(207, 95%, 15%, 1)`
  },
  modes: {
    dark: {
      text: lightWhite,
      background: gray(10),
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: blue60,
      heading: white
    }
  }
};
