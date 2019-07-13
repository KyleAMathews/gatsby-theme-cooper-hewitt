/** @jsx jsx */
import React from "react";
import { css, Styled, jsx } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";
export default ({ children, ...props }) => (
  <Styled.root>
    <div
      sx={{
        minHeight: `100vh`,
        // borderWidth: theme => theme.space[2],
        // Why can't I return an array for borderWidth?
        borderWidth: theme => `${theme.space[2]}px 0 0 0`,
        // How do I get access here to theme.breakpoints?
        "@media screen and (min-width: 50em)": {
          borderWidth: theme => theme.space[2]
        },
        borderColor: `red`,
        borderStyle: `solid`
      }}
    >
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: [2, 4]
          })}
        >
          {children}
        </div>
      </div>
    </div>
  </Styled.root>
);
