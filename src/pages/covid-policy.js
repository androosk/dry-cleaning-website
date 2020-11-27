import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavDark from "../components/navdark"

const CovidPage = () => (
  <Layout>
    <SEO title="Covid statement" />
    <NavDark />
    <div className="container mx-auto border-2 border-black border-opacity-100">
      <h1 className="text-center" >Our COVID-19 Statement</h1>
      <div className="col-span-4 mx-auto p-5 bg-blue-100 font-sans">
        <p>"During this challenging time, Tirpok Cleaners' focus is on supporting our customers, our employees and the local communities in which we operate</p>
        <p>We have successfully worked to avoid disruptionc caused by COVID-19, while at the same time acting responsibly to do what we can to prevent further spread of the virus.</p>
        <p>We will continue to closely monitor and assess the evolving situation and will be diligent about communicating on important issues."</p>
        <p className="ml-5">- Liberty Ryan, Operations Manager</p>
      </div>
    </div>
  </Layout>
)

export default CovidPage
