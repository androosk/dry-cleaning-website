import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Covid sucks and we wish it was over already</p>
    <h4>Also, wear a mask</h4>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
