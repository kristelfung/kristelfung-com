import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";

import '../../src/styles/main.scss';

const AboutPage = ({data}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="container is-max-widescreen fade-in">
      <Navbar/>
      <h1 className="title is-1">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "about" }}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage