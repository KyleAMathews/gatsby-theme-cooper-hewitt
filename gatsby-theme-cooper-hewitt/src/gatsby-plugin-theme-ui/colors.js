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
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`
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
