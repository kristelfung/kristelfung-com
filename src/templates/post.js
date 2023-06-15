import * as React from "react"
import { graphql, Link } from "gatsby"

import Navbar from "../pages/components/navbar";

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  console.log(props)
  return (
    <div>
      <Navbar/>
      <Link to="/blog">back to posts</Link>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`