import * as React from "react"
import { graphql, Link } from 'gatsby'

import Navbar from "./components/navbar";

import '../../src/styles/main.scss';

const BlogPage = ({data}) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { frontmatter } = markdownRemark

  const posts = allMarkdownRemark.edges.sort((a, b) => {
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  })
  
  return (
    <div className="container is-max-widescreen fade-in">
      <Navbar/>
      <h1 className="title is-1">{frontmatter.title}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.frontmatter.slug
        const date = node.frontmatter.date

        return (
          <div key={node.id} className="blog-item">
            <h3 className="title is-3"><Link to={`/blog/${slug}`} className="blog-link-text">{title}</Link></h3>
            <h5 className="subtitle is-5">{date.toLowerCase()}</h5>
            <span className="blog-item-hover"></span>
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