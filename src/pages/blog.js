import * as React from "react"
import { graphql, Link } from 'gatsby'

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
        const slug = node.frontmatter.slug

        return (
          <div key={node.id}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </div>
        )
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
          id
          frontmatter {
            title
            slug
          }
          html
        }
      }
    }
  }
`

export default BlogPage