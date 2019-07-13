import React from "react";
import { css, Styled } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";
console.log(Header);

export default ({ children, ...props }) => (
  <Styled.root>
    <div style={{ background: `red` }}>
      <Header {...props} />
      <div>Hi2</div>
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
            borderWidth: 3,
            background: `red`,
            borderColor: `red`,
            borderStyle: `solid`,
            minHeight: `100vh`
          })}
        >
          {children}
        </div>
      </div>
    </div>
  </Styled.root>
);
