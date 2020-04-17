import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => {
  const img = data.img.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={img}
        styleClass="default-background"
        title="coffee shop"
      />
      <Info />
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "img-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
