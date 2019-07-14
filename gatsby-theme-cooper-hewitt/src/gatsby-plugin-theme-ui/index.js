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
      monospace: `"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace`
    },
    sizes: {
      container: 672
    },
    styles,
    prism
  }
]);
