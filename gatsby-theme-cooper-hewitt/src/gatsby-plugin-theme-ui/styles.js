export default {
  root: {
    fontFamily: `body`
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 3,
    color: `white`,
    bg: `prism.background`,
    p: 3,
    borderRadius: "3px",
    lineHeight: 1.42,
    overflow: "auto",
    wordWrap: "normal" // So code will scroll on Safari.
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: theme => {
      return theme.fontSizes[0] * 0.92 + `px`;
    }
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingY: `0.15em`,
    paddingX: `0.15em`,
    fontSize: theme => {
      return (theme.fontSizes[0] * 0.92).toFixed(0) + `px`;
    },
    "::before": {
      letterSpacing: "-0.35em",
      content: '"\u00A0"'
    },
    "::after": {
      letterSpacing: "-0.35em",
      content: '"\u00A0"'
    }
  },
  a: {
    color: `primary`,
    "&, &:active, &:visited": {
      color: `primary`
    }
  },
  blockquote: {
    marginLeft: 0,
    paddingLeft: 3,
    borderLeft: theme => `${theme.space[2]}px solid ${theme.colors.highlight}`
  },
  "blockquote > *": {
    fontStyle: `italic`
  },
  "blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4": {
    marginTop: 0
  },
  // "li > p": {
  // marginBottom: rhythm(1 / 2)
  // },
  "p code": {
    fontSize: "75%"
  },
  "tt,code": {
    fontSize: "85%"
  },
  hr: {
    borderColor: `muted`
  },
  p: {
    code: {
      fontSize: `inherit`
    }
  },
  li: {
    code: {
      fontSize: `inherit`
    }
  },
  "pre code": {
    background: "none",
    lineHeight: 1.42
  },
  // Add space before and after code/tt elements.
  "code::before,code::after,tt::before,tt::after": {
    letterSpacing: "-0.2em",
    content: '"\u00A0"'
  },
  // But don't add spaces if the code is inside a pre.
  "pre code:before,pre code:after,pre tt:before,pre tt:after": {
    content: "none"
  }
};
