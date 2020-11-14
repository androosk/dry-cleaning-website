import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video src='/clothes.mp4' />
  </Layout>
)

export default IndexPage
