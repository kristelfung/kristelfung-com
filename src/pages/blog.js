import * as React from "react"
import { graphql, Link } from 'gatsby'

import Navbar from "./components/navbar";

const BlogPage = ({data}) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter } = markdownRemark

  const posts = allMarkdownRemark.edges.sort((a, b) => {
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  })
  
  return (
    <div>
      <Navbar/>
      <h1>{frontmatter.title}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.frontmatter.slug
        const date = node.frontmatter.date

        return (
          <div key={node.id}>
            <Link to={`/blog/${slug}`}>{title}</Link>
            <p>{date}</p>
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
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`

export default BlogPage