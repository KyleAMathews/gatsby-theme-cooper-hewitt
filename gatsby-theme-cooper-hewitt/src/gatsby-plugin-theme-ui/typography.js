import "typeface-cooper-hewitt";
import { toTheme } from "@theme-ui/typography";

// const Typography = require("typography");
// const CodePlugin = require("typography-plugin-code").default

let theme = {
  baseFontSize: `18px`,
  headerFontFamily: [`Cooper Hewitt`, `sans-serif`],
  bodyFontFamily: [`Cooper Hewitt`, `sans-serif`],
  // plugins: [new CodePlugin()],
  baseLineHeight: 1.45,
  blockMarginBottom: 0.85
};

export default toTheme(theme);
