import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => {
  const img = data.img.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About" />
      <BackgroundSection
        img={img}
        styleClass="about-background"
        title="about us"
      />
      <Info />
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "img-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
