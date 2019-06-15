import React from "react";
import { graphql } from "gatsby";
import Logger from "js-logger";

import IndexPage from "./../components/pages/index/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndexWrapper = (props: any) => {
  Logger.debug("IndexWrapperpropa", props);

  const person = props.data.allPersonalInfoJson.nodes[0];

  const headerData = {
    person: person,
  };

  return <IndexPage headerData={headerData} />;
};
export default IndexWrapper;

export const query = graphql`
  query {
    allPersonalInfoJson {
      nodes {
        ...PersonalInfo
      }
    }
  }
`;

// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
//
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )