import * as React from "react"
import { graphql } from 'gatsby'

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import homeImg from '../img/home.png';

import '../../src/styles/main.scss';

const HomePage = ({data}) => {
  const { markdownRemark } = data
  const { title, subtitle } = markdownRemark.frontmatter
  return (
    <section className="hero is-fullheight fade-in">
      <Navbar/>
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <h1 className="title is-1">{title}</h1>
          <h1 className="title is-1">{subtitle}</h1>
          <img src={homeImg} alt="kristel on laptop"/>
        </div>
      </div>
      <Footer/>
    </section>
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