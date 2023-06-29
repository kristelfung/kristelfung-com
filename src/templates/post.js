import * as React from "react"
import { graphql, Link } from "gatsby"

import Navbar from "../pages/components/navbar";

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  return (
    <div className="container is-max-widescreen">
      <Navbar/>
      <div className="post-back">
        <Link to="/blog" className="back-item">
          &lt;&lt; back to posts
          <span className="back-item-hover"></span>
        </Link>
      </div>
      <h1 className="title is-1">{post.frontmatter.title}</h1>
      <h4 className="subtitle is-4">{post.frontmatter.date.toLowerCase()}</h4>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`