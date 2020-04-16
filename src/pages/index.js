import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <SEO title="Home" />
      <h1 className="text-vanilla">Liem</h1>
    </div>
  </Layout>
)

export default IndexPage
