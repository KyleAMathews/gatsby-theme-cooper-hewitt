import merge from "deepmerge";
import typography from "./typography";
import colors from "./colors";
import styles from "./styles";
import prism from "./prism";

export default merge.all([
  {},
  typography,
  {
    initialColorMode: `light`,
    colors,
    fonts: {
      monospace: `"SFMono-Regular", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`
    },
    sizes: {
      container: 672
    },
    styles,
    prism
  }
]);
