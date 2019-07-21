/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import { Link } from "gatsby";
/**
 * Shadow me to add your own bio content
 */

export default () => (
  <div>
    <div sx={{ mb: 2 }}>
      Words by <Styled.a href="http://example.com/">Jane Doe</Styled.a>.
      <br />
      Change me. This is all quite default. If you'd like.
    </div>
    <div sx={{ mb: 0 }}>
      TODO: make these p elements once gatsby-theme-blog is fixed.
      <Styled.a as={Link} to="/about">
        More about me
      </Styled.a>
    </div>
  </div>
);
