import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to<br/>design and code React apps</h1>
        <p>Complete courses about the best tools and designs.</p>
        <Link to='/page-2/'>Watch the Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
