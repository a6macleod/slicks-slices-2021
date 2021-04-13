import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';

export default function SinglePersonPage({ data: { person } }) {
  return (
    <>
      <SEO
        title={`Slicemaster - ${person.name}`}
        image={person.image?.asset?.fluid?.src}
      />
      <div className="center">
        <Img fluid={person.image.asset.fluid} />
        <div>
          <h2>
            <span className="mark">{person.name}</span>
          </h2>
          <p>{person.description}</p>
        </div>
      </div>
    </>
  );
}

// this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      description
      id
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
