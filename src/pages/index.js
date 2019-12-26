import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = props => (
  <Layout>
    <SEO title='Home' />
    <div className='home-img'>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident
        sint numquam odio nam placeat repellendus distinctio ex illo itaque,
        totam ipsum dolorum esse alias, hic consequatur nisi saepe quo?
      </p>
      {/* <div style={{ paddingTop: '10px', paddingBottom: '10px'}}>
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </div> */}
    </div>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage1 on File {
    childImageSharp {
      fluid(maxWidth: 2500, maxHeight: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "homepage-bg.jpg" }) {
      ...fluidImage
    },
    imageTwo: file(relativePath: { eq: "homepg-bottom-bg.jpg" }) {
      ...fluidImage
    }
  }
`;
