import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video src='/clothes.mp4' />
  </Layout>
)

export default IndexPage
