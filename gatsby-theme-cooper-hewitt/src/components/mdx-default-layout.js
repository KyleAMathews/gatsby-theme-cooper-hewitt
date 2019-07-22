import React from "react";
import Layout from "gatsby-theme-blog/src/components/layout";
import { graphql, useStaticQuery } from "gatsby";

export default ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <div>{children}</div>
    </Layout>
  );
};
