/** @jsx jsx */
import React from "react";
import { css, Styled, jsx } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";
export default ({ children, ...props }) => (
  <Styled.root>
    <div
      sx={{
        minHeight: `100vh`,
        borderWidth: [t => `${t.space[2]}px 0 0 0`, t => `${t.space[2]}px`],
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
