import React from "react";
import { graphql } from "gatsby";

class UnitPostTemplate extends React.Component {
  render() {
    const unit = this.props.data.unitsJson;

    return (
      <div>
        {unit["id"]}
        <br/>
        {unit["annotations"]['online_link']}
      </div>
    )
  }
}

export default UnitPostTemplate;

export const pageQuery = graphql`
  query BlogUnitBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    unitsJson(id: { eq: $id }) {
      id
     annotations {
             online_title_en
             online_link
}
    }
  }
`;
