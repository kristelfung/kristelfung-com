import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const HomePage = ({data}) => {
  const { markdownRemark } = data
  const { title, subtitle } = markdownRemark.frontmatter
  return (
    <div>
      <Navbar/>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "home" }}) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

export default HomePage