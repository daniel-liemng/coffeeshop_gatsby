import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => {
  const img = data.img.childImageSharp.fluid
  // console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={img}
        styleClass="default-background"
        title="coffee shop"
      />
      <Info />
      <Menu items={data.menu} />
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
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          category
          title
          price
          image {
            fixed(width: 80, height: 80) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

export default IndexPage
