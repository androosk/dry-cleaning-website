import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from '../components/video'
import Navbar from '../components/navbar'
import CovidAlert from "../components/covidalert"

const IndexPage = () => (
  <Layout>
    <CovidAlert />
    <Navbar />
    <SEO title="Home" />
    <Video src='/clothes.mp4' />
  </Layout>
)

export default IndexPage
