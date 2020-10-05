import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"


const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Learn to design and code React apps</h1>
      <p>Complete courses about the best tools and designs.</p>
      <Link to='/page-2/'>Watch the Video</Link>

      <div className="Logos">
        <img src={require('../images/logo-sketch.png')} width="50" alt=""></img>
        <img src={require('../images/logo-figma.png')} width="50" alt=""></img>
        <img src={require('../images/logo-studio.png')} width="50" alt=""></img>
        <img src={require('../images/logo-framer.png')} width="50" alt=""></img>
        <img src={require('../images/logo-react.png')} width="50" alt=""></img>
        <img src={require('../images/logo-swift.png')} width="50" alt=""></img>
      </div>
      <Wave />
    </div>
  </div>

  <div className="Cards">
    <h2>11 courses, more coming</h2>
    <div className="CardGroup">
      <Card 
        title="React for Designers"
        text="12 Sections"
        image={require('../images/wallpaper.jpg')}
      />
      <Card 
        title="React for Designers"
        text="12 Sections"
        image={require('../images/wallpaper2.jpg')}
      />
      <Card 
        title="React for Designers"
        text="12 Sections"
        image={require('../images/wallpaper3.jpg')}
      />
      <Card 
        title="React for Designers"
        text="12 Sections"
        image={require('../images/wallpaper4.jpg')}
      />
    </div>
  </div>
  <Section
    image={require('../images/wallpaper2.jpg')}
    logo={require('../images/logo-react.png')}
    title="React for Designers"
    text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
  />
</div>



</Layout>


)

export default IndexPage

