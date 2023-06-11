import * as React from "react"
import { graphql } from 'gatsby'

const HomePage = ({data}) => {
  console.log("bitch hello")
  console.log(data)
  const { markdownRemark } = data
  console.log(markdownRemark)
  const { title, subtitle } = markdownRemark.frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/" }}) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

export default HomePage