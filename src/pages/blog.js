import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";

const BlogPage = ({data}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Navbar/>
      <h1>{frontmatter.title}</h1>
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "blog" }}) {
      frontmatter {
        title
      }
    }
  }
`

export default BlogPage