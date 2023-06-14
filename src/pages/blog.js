import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";

const BlogPage = ({data}) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter } = markdownRemark

  const posts = allMarkdownRemark.edges
  
  return (
    <div>
      <Navbar/>
      <h1>{frontmatter.title}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title

        return <h2>{title}</h2>
      })}
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
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "post" }}}) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

export default BlogPage