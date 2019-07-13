import React from "react";
import { css, Styled } from "theme-ui";
import Header from "./header";

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>Hi</div>
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
          borderWidth: 3,
          borderColor: `red`,
          borderStyle: `solid`,
          minHeight: `100vh`
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
