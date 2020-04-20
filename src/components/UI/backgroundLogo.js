import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { useSpring, animated } from "react-spring";

const StyledImage = styled(Img)`
  position: absolute !important;
  user-select: none;
  background-color: transparent;
  top: 20vh !important;
  overflow: hidden;
  // opacity: 0.9;
  border-radius: 50%;
  right: 5%;
  width: 50vh;

  @media ${props => props.theme.mediaQueries.largest} {
    top: 30% !important;
  }

  @media ${props => props.theme.mediaQueries.large} {
    top: -15%;
    right: -8%;
    width: 70%;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    top: -10%;
    width: 65%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    top: 0%;
    right: 2%;
    width: 45%;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    top: 0%;
    right: 2%;
    width: 40%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    top: 0%;
    right: 2%;
    width: 40%;
  }
`;

const BackgroundLogo = () => {
  // Animation
  const BackgroundLogoSpring = useSpring({
    delay: 200,
    opacity: 1,
    from: { opacity: 0 }
  });
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_background.png" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <animated.div style={BackgroundLogoSpring}>
      <StyledImage fluid={file.childImageSharp.fluid} />
    </animated.div>
  );
};

export default BackgroundLogo;
